import React, { useState, useEffect } from "react";
import "../scss/components/mailBox.scss";
import Header from "../components/Header";
import MailItem from "../components/MaiboxItem";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilterBy,
  setCurrentItem,
  toggleRead,
  newEmail,
} from "../store/mailSlice";
import * as newMails from "../mail-data.json";
import { generateUUID, formatedHour } from "../utils";
const MailBox = () => {
  const { filterBy, inbox, deleted, spam } = useSelector((state) => {
    return state;
  });
  const [filteredList, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const handleFilterChange = (event) => {
    dispatch(setFilterBy(event.target.value));
  };
  const clickedEmailHandler = (key, filterBy) => {
    let clickedItem = null;
    if (filterBy === "Spam") {
      clickedItem = spam.find((mail) => mail.id === key);
    } else if (filterBy === "Deleted") {
      clickedItem = deleted.find((mail) => mail.id === key);
    } else {
      clickedItem = inbox.find((mail) => mail.id === key);
    }
    dispatch(toggleRead({ id: clickedItem.id, changed: true }));

    dispatch(
      setCurrentItem({
        id: clickedItem.id,
        sender: clickedItem.sender,
        isRead: true,
        from: clickedItem.from,
        subject: clickedItem.subject,
        body: clickedItem.body,
        date: clickedItem.date,
        avatar: clickedItem.avatar,
        attachments: clickedItem.attachments,
      })
    );
  };

  let list = null;

  if (filterBy === "Spam") {
    list = spam;
  } else if (filterBy === "Deleted") {
    list = deleted;
  } else {
    list = inbox;
  }

  useEffect(() => {
    setFilter(
      list.filter((mail) => {
        return (
          mail.subject.toLowerCase().includes(search.toLowerCase()) ||
          mail.sender.toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, list]);

  useEffect(() => {
    const interval = setInterval(() => {
      newMails.forEach((mail) => {
        dispatch(
          newEmail({
            id: generateUUID(),
            sent: formatedHour(new Date()),
            sender: mail.sender,
            from: mail.from,
            subject: mail.subject,
            body: mail.body,
            date: mail.date,
            isRead: mail.isRead,
            avatar: mail.avatar,
            attachments: mail.attachments,
          })
        );
      });
    }, 90000);
    return () => clearInterval(interval);
  }, []);

  let emails = filteredList.map((email) => (
    <MailItem
      key={email.id}
      id={email.id}
      sent={email.sent}
      isRead={email.isRead}
      sender={email.sender}
      subject={email.subject}
      clicked={() => clickedEmailHandler(email.id, filterBy)}
    />
  ));

  return (
    <div className="mailBox">
      <Header
        mailBox={filterBy}
        changed={(event) => handleFilterChange(event)}
      />
      <div className="searchBar">
        <input
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <section>{emails}</section>
    </div>
  );
};

export default MailBox;
