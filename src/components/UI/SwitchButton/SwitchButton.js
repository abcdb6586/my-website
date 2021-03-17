import React from "react";
import classes from "./SwitchButton.module.css";

const SwitchButton = (props) => {
  const [zh, eng] = ["zh", "eng"];
  return (
    <div className={classes.SwitchBtn}>
      <button
        type="button"
        className={classes.Switch1}
        disabled={props.lan === "zh" && true}
        value={zh}
        onClick={() => props.clicked(zh)}
      >
        <span>中文</span>
      </button>
      <button
        type="button"
        className={classes.Switch2}
        disabled={props.lan === "eng" && true}
        value={eng}
        onClick={() => props.clicked(eng)}
      >
        <span>ENG</span>
      </button>
    </div>
  );
};

export default SwitchButton;
