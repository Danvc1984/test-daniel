import React from "react";
import "../scss/components/header.scss";
const Header = (props) => {
  return (
    <div className="header">
      <h2 className="title">{props.mailBox}</h2>
      <select className="filter">
        <option disabled selected>
          Filter By
        </option>
        <option>Inbox</option>
        <option>Spam</option>
        <option>Deleted</option>
      </select>
    </div>
  );
};
export default Header;
