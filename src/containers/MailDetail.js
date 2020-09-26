import React from "react";
import "../scss/components/mailDetails";
import SenderDetails from "../components/SenderDetails";
import Attachment from "../components/Attachment";
const MailDetail = () => {
  return (
    <div className="details">
      <div className="options">
        <span>
          <button id="del">Delete</button>
          <button>Spam</button>
        </span>
        <button id="und">Mark as unread</button>
      </div>
      <SenderDetails />
      <div className="body">Body and Date</div>
      <div className="attachments">
        //map attachments
        <Attachment />
      </div>
    </div>
  );
};

export default MailDetail;
