import React from "react";

import "../scss/components/header";
const Header = (props) => {
  return (
    <div className="header">
      <h2>{props.mailBox}</h2>
      <select onChange={props.changed}>
        <option hidden>Filter By</option>
        <option value="Inbox">Inbox</option>
        <option value="Spam">Spam</option>
        <option value="Deleted">Deleted</option>
      </select>
    </div>
  );
};
export default Header;
