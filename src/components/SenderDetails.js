import React from "react";

import "../scss/components/senderDetails";
const SenderDetails = (props) => {
  return (
    <div className="sender">
      <div className="imgContainer">
        <img src={props.avatar} alt="Avatar" />
      </div>
      <div>
        <h2>
          {props.sender} | {props.subject}
        </h2>
        <h4>from {props.from}</h4>
      </div>
    </div>
  );
};

export default SenderDetails;
