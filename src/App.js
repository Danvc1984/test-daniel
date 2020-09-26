import React from "react";
import "./scss/components/app.scss";
import MailBox from "./containers/MailBox";
import MailDetail from "./containers/MailDetail";
const App = () => {
  return (
    <div className="email-client">
      <MailBox className="list" />
      <MailDetail className="details" />
    </div>
  );
};

export default App;
