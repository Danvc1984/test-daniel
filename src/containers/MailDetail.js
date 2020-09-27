import React from "react";
import "../scss/components/mailDetails";
import SenderDetails from "../components/SenderDetails";
import Attachment from "../components/Attachment";
import { useSelector, useDispatch } from "react-redux";
import {
  sendToDeleted,
  sendToSpam,
  clearCurrent,
  toggleRead,
} from "../store/mailSlice";
const MailDetail = () => {
  const dispatch = useDispatch();
  const { currentItem } = useSelector((state) => {
    return state;
  });

  const handleMarkUnread = () => {
    dispatch(toggleRead({ id: currentItem.id, change: currentItem.isRead }));
  };

  const handleMailboxChange = (mailbox) => {
    if (mailbox == "deleted") {
      dispatch(sendToDeleted(currentItem.id));
      dispatch(clearCurrent());
    } else if (mailbox == "spam") {
      dispatch(sendToSpam(currentItem.id));
      dispatch(clearCurrent());
    }
  };

  let details = (
    <div className="placeholder">Click on a email to open it's details!</div>
  );

  if (currentItem.id != "") {
    let attachments = currentItem.attachments.map((item) => (
      <Attachment key={item.name} file={item.file} name={item.name} />
    ));

    details = (
      <div className="details">
        <div className="options">
          <span>
            <button id="del" onClick={() => handleMailboxChange("deleted")}>
              Delete
            </button>
            <button onClick={() => handleMailboxChange("spam")}>Spam</button>
          </span>
          <button id="und" onClick={() => handleMarkUnread()}>
            Mark as unread
          </button>
        </div>
        <SenderDetails
          sender={currentItem.sender}
          subject={currentItem.subject}
          avatar={currentItem.avatar}
          from={currentItem.from}
        />
        <div className="body">
          <div>21/09/2020</div>
          <p>{currentItem.body}</p>
        </div>
        <div className="attachments">{attachments}</div>
      </div>
    );
  }
  return <>{details}</>;
};

export default MailDetail;
