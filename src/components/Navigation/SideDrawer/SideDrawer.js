import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import SwitchButton from "../../UI/SwitchButton/SwitchButton";
import Aux from "../../../hoc/Auxiliary";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <nav>
          <NavigationItems lan={props.lan} />
        </nav>
        <SwitchButton lan={props.lan} clicked={props.clicked} />
      </div>
    </Aux>
  );
};

export default sideDrawer;
