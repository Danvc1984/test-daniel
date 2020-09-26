import React from "react";
import "../scss/components/senderDetails";
const SenderDetails = () => {
  return (
    <div className="sender">
      <img
        src="https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1"
        alt="Italian Trulli"
      />
      <div>
        <span>Name----Subject</span>
        <span>from danvc1984@gmial.cpm</span>
      </div>
    </div>
  );
};

export default SenderDetails;
