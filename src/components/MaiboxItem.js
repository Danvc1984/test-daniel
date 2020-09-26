import React from "react";
import "../scss/components/mailboxItem.scss";
const MaiboxItem = (props) => {
  let read = props.isRead == "unread" ? "unreadItem" : "item";
  return (
    <div className={read}>
      <span>
        <h3>{props.sender}</h3>
        <p>{props.sent}</p>
      </span>
      <h4>{props.subject}</h4>
    </div>
  );
};

export default MaiboxItem;
