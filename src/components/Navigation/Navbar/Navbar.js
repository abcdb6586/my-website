import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <header className={classes.Navbar}>
      <DrawerToggle clicked={props.clicked} />
      <div className={classes.Logo}>
        <NavLink to="/">
          <span>YiCheng's Page</span>
        </NavLink>
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems lan={props.lan} />
      </nav>
    </header>
  );
};

export default Navbar;
