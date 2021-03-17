import React from "react";
import classes from "./Profile.module.css";
import Me from "../../assets/images/me.jpg";

import Avatar from "@material-ui/core/Avatar";
import { GitHub, Facebook, LinkedIn, Landscape } from "@material-ui/icons/";

const Profile = (props) => {
  return (
    <div className={classes.Profile}>
      <div className={classes.ProfilePic}>
        <Avatar
          alt="Yi-Cheng Chung"
          src={Me}
          style={{
            height: "150px",
            width: "150px",
            border: "7px solid rgba(107, 36, 36, 0.4)",
          }}
        />
      </div>
      <div className={classes.FlexCenter}>
        <span>{props.lan === "zh" ? "鍾貽丞" : "Yi-Cheng, Chung"}</span>
        <h6>
          {props.lan === "zh" ? "新手前端工程師" : "Junior Front-End Engineer"}
        </h6>
        <h6>
          {props.lan === "zh"
            ? "國立政治大學 資訊管理學系"
            : "National ChengChi Uni. MIS"}
        </h6>
        <h6>(2014 - 2020)</h6>
      </div>
      <p className={classes.SelfIntro}>
        {props.lan === "zh"
          ? "去年底自學網頁前端程式語言後，因為非常感興趣而立志成為前端工程師！技術上還有許多不足的地方，但對於程式，我願意用我的餘生去探索它。"
          : "I decided to become a front-end engineer out of passion after me self-taught programming knowledge of website last year. Still got rooms to improve for sure, but I'm willing to spend the rest of my life keep exploring nonstop."}
      </p>
      <nav className={classes.IconsFlex}>
        <div>
          <a href="https://github.com/abcdb6586">
            <GitHub style={{ fontSize: "3rem" }} />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/yi-cheng-chung-7b711218b/">
            <LinkedIn style={{ fontSize: "3rem" }} />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/yichengchung.549">
            <Facebook style={{ fontSize: "3rem" }} />
          </a>
        </div>
        <div>
          <a href="https://www.helpx.net/profile/877650EJ">
            <Landscape style={{ fontSize: "3rem" }} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Profile;
