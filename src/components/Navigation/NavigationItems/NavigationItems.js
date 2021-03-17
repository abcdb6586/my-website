import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItems.module.css";
const NavigationItems = (props) => {
  return (
    <div className={classes.NavigationItems}>
      <ul className={classes.NavLinks}>
        <li>
          <NavLink
            to="/"
            exact
            activeStyle={{
              fontSize: "2rem",
              fontWeight: "550",
              paddingBottom: "2.5px",
              borderBottom: "1px solid black",
            }}
          >
            {props.lan === "zh" ? "首頁" : "Main"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeStyle={{
              fontSize: "2rem",
              fontWeight: "550",
              paddingBottom: "2.5px",
              borderBottom: "1px solid black",
            }}
          >
            {props.lan === "zh" ? "關於我" : "About"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            activeStyle={{
              fontSize: "2rem",
              fontWeight: "550",
              paddingBottom: "2.5px",
              borderBottom: "1px solid black",
            }}
          >
            {props.lan === "zh" ? "技能" : "Skills"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portofolio"
            activeStyle={{
              fontSize: "2rem",
              fontWeight: "550",
              paddingBottom: "2.5px",
              borderBottom: "1px solid black",
            }}
          >
            {props.lan === "zh" ? "作品集" : "Portofolio"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeStyle={{
              fontSize: "2rem",
              fontWeight: "550",
              paddingBottom: "2.5px",
              borderBottom: "1px solid black",
            }}
          >
            {props.lan === "zh" ? "聯絡我" : "Contact"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationItems;
