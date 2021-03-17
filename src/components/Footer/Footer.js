import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Yi-Cheng, Chung. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
