import React, { useState } from "react";
import "./Tab.css";

function Tab_DropDown(props) {
  let { items } = props;
  let [show, setShow] = useState(items.sec_1);
  let [active, setActive] = useState("sec_1");

  let showItems = (id) => {
    console.log(id);
    if (id === "sec_1") {
      setShow(items.sec_1);
      setActive("sec_1");
      return;
    }
    if (id === "sec_2") {
      setShow(items.sec_2);
      setActive("sec_2");
      return;
    }
    if (id === "sec_3") {
      setShow(items.sec_3);
      setActive("sec_3");
      return;
    }
    if (id === "sec_4") {
      setShow(items.sec_4);
      setActive("sec_4");
      return;
    }
    if (id === "sec_5") {
      setShow(items.sec_5);
      setActive("sec_5");
      return;
    }
    if (id === "sec_6") {
      setShow(items.sec_6);
      setActive("sec_6");
      return;
    }
    if (id === "sec_7") {
      setShow(items.sec_7);
      setActive("sec_7");
      return;
    }
    if (id === "sec_8") {
      setShow(items.sec_8);
      setActive("sec_8");
      return;
    }
    if (id === "sec_9") {
      setShow(items.sec_9);
      setActive("sec_9");
      return;
    }
  };

  return (
    <div className="Tab_DropDown">
      <div className="dropdown_1">
        {items.main.map((item, index) => (
          <div
            style={{ padding: props.padding }}
            key={index}
            className="dropdown_content"
            onClick={() => showItems(item.press)}
          >
            <div style={{ fontSize: props.iconSize }} className="icon">
              {item.icon}{" "}
            </div>

            <h1
              style={{ color: item.press == active ? "black" : "" }}
              className="dropdown_title"
            >
              {item.name}
            </h1>
          </div>
        ))}
      </div>
      <div className="dropdown_2">
        {show.item_1.map((item, index) => (
          <div
            style={{ padding: props.sec2and3_padding }}
            className="dropdown_content_2"
          >
            <h3 className="dropdown_title">{item.name}</h3>
          </div>
        ))}
      </div>
      <div className="dropdown_2">
        {show.item_2.map((item, index) => (
          <div
            style={{ padding: props.sec2and3_padding }}
            className="dropdown_content_2"
          >
            <h3 className="dropdown_title">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tab_DropDown;
