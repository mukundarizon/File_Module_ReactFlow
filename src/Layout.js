import React, { useState } from "react";
import Aside from "./Aside";
import Main from "./Main";
import "./styles/App.scss";

function Layout() {
  const [toggled, setToggled] = useState(false);
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${toggled ? "toggled" : ""}`}>
      <Aside toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
      <Main toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
    </div>
  );
}

export default Layout;
