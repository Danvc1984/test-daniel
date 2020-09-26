import React from "react";
import "../scss/components/mailBox.scss";
import Header from "../components/Header";
import MailItem from "../components/MaiboxItem";
const MailBox = () => {
  return (
    <div className="mailBox">
      <Header mailBox="Inbox" />
      <div className="searchBar">
        <input placeholder="Search" />
      </div>
      <MailItem
        sent="8:22"
        isRead="unread"
        sender="Obi Wan"
        subject="Hello There!"
      />
      <MailItem
        sent="8:22"
        isRead="unread"
        sender="Obi Wan"
        subject="Hello There!"
      />
      <MailItem
        sent="8:24"
        isRead="read"
        sender="General Greivous"
        subject="General Kenobi!!"
      />
    </div>
  );
};

export default MailBox;
