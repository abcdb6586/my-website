import React, { Component } from "react";

import Navbar from "../Navigation/Navbar/Navbar";
import Profile from "../Profile/Profile";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import classes from "./Blog.module.css";

class Blog extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <section>
        <Navbar
          lan={this.props.lan}
          clicked={() => this.sideDrawerToggleHandler()}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          clicked={this.props.clicked}
          lan={this.props.lan}
        />
        <div className={classes.DesktopOnly}>
          <Profile lan={this.props.lan} />
        </div>
      </section>
    );
  }
}

export default Blog;
