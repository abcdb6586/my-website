import React from "react";
import classes from "./Portofolio.module.css";
import portofolio from "../../../assets/images/portofolio/portofolio.png";

const Portofolio = (props) => {
  return (
    <div className={classes.Portofolio}>
      <div>
        <h1>{props.lan === "zh" ? "作品集" : "Portofolio"}</h1>
        <p>{props.lan === "zh" ? "盡快更新中！" : "Coming soon!"}</p>
      </div>
      <img src={portofolio} alt="portofolio" />
    </div>
  );
};

export default Portofolio;
