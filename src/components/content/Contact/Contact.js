import React from "react";
import classes from "./Contact.module.css";
import { Mail, PhoneIphone } from "@material-ui/icons/";
import { GitHub, Facebook, LinkedIn } from "@material-ui/icons/";
import contact from "../../../assets/images/contact/contact.png";

const Contact = (props) => {
  return (
    <div className={classes.Contact}>
      <h1>{props.lan === "zh" ? "聯絡方式" : "Contact Me"}</h1>
      <div className={classes.FlexIcon}>
        <Mail style={{ fontSize: "3rem" }} />
        <span>
          {props.lan === "zh" ? "信箱: " : "Email: "}
          103306072@g.nccu.edu.tw
        </span>
      </div>
      <div className={classes.FlexIcon} style={{ marginBottom: "15%" }}>
        <PhoneIphone style={{ fontSize: "3rem" }} />
        <span>
          {props.lan === "zh" ? "手機: " : "Mobile: "}
          0909-101-760
        </span>
      </div>
      <h1>{props.lan === "zh" ? "我的連結" : "My Links"}</h1>
      <div className={classes.FlexIcon}>
        <a href="https://github.com/abcdb6586">
          <GitHub style={{ fontSize: "3rem" }} />
        </a>
        <a href="https://www.linkedin.com/in/yi-cheng-chung-7b711218b/">
          <LinkedIn style={{ fontSize: "3rem", marginLeft: "10px" }} />
        </a>
        <a href="https://www.facebook.com/yichengchung.549">
          <Facebook style={{ fontSize: "3rem", marginLeft: "10px" }} />
        </a>
      </div>
      <img src={contact} alt="contact" />
    </div>
  );
};

export default Contact;
