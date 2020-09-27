import React from "react";

const Attachment = (props) => {
  return (
    <div>
      <a href={props.file}>{props.name}</a>
    </div>
  );
};

export default Attachment;
