import React from "react";
import classes from "./LandingPage.module.css";
import hello from "../../../assets/images/landingPage/hello.png";

const LandingPage = (props) => {
  let [zh_p1, eng_p1] = [
    `這是我第一個用 React 製作的簡易中英文履歷SPA，利用了 React Routing 讓畫面呈現多頁式感。
    RWD的部分，我使用 media query 讓網站有一些響應式設計，呈現上有幾種不同的版本，歡迎縮放網頁試試看！。 
    部分的 component 借用了 Bootstrap 跟 Jquery 中好用的套件，至於部屬至網路使用了 Heroku，希望你會喜歡！ `,
    `This is my first personal cv single page application built by react. I used react routing to give my
    website a bit mulitipage application feeling. As to Reponsive Web Design, I used media query to make my website a bit responsive,
     there are several versions, please feel free to play around with them!
     I also used a bit of great open source toolkits from Bootstrap and Jquery in some of my components. As for deploying to website, I used Heroku. Hope you enjoy it! `,
  ];
  return (
    <div className={classes.LandingPage}>
      <h1>
        {props.lan === "zh"
          ? "嗨！歡迎來到我的網站!"
          : "Welcome to my website!"}
      </h1>
      <p>{props.lan === "zh" ? zh_p1 : eng_p1}</p>
      <img src={hello} alt="hello" />
    </div>
  );
};

export default LandingPage;
