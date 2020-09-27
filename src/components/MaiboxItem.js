import React from "react";

import "../scss/components/mailboxItem";
const MaiboxItem = (props) => {
  let read = props.isRead ? "item" : "unreadItem";
  return (
    <div className={read} onClick={props.clicked}>
      <span>
        <h3>{props.sender}</h3>
        <p>{props.sent}</p>
      </span>
      <h4>{props.subject}</h4>
    </div>
  );
};

export default MaiboxItem;
