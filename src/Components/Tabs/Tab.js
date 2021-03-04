import React, { useState, useContext } from "react";
import "./Tab.css";
import { Tab_Context_Provider } from "./Tabs";

function Tab(props) {
  let { activeTab, setActiveTab } = useContext(Tab_Context_Provider);
  let { label, tabIndex } = props;
  let active = activeTab === tabIndex;
  return (
    <li
      className={`tabs-tab ${active ? "active" : ""}`}
      onClick={() => setActiveTab(active ? "" : tabIndex)}
    >
      {label}
    </li>
  );
}

export default Tab;
