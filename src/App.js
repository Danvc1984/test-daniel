import React from "react";

import MailBox from "./containers/MailBox";
import MailDetail from "./containers/MailDetail";
import "./scss/app";

const App = () => {
  return (
    <div className="email-client">
      <MailBox />
      <MailDetail />
    </div>
  );
};

export default App;
