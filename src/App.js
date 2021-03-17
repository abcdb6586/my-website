import React, { Component } from "react";
import classes from "./App.module.css";
import { Route, Switch } from "react-router-dom";

import SwitchButton from "./components/UI/SwitchButton/SwitchButton";
import Blog from "./components/Blog/Blog";
import LandingPage from "./components/content/LandingPage/LandingPage";
import Skills from "./components/content/Skills/Skills";
import About from "./components/content/About/About";
import Portofolio from "./components/content/Portofolio/Portofolio";
import Contact from "./components/content/Contact/Contact";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = { lan: "zh" };

  clickHandler = (lan) => {
    this.setState({ lan: lan });
  };

  render() {
    return (
      <div>
        <div className={classes.DesktopOnly}>
          <SwitchButton
            lan={this.state.lan}
            clicked={(lan) => this.clickHandler(lan)}
          />
        </div>

        <Blog lan={this.state.lan} clicked={(lan) => this.clickHandler(lan)} />
        <Route
          path="/"
          exact
          render={() => <LandingPage lan={this.state.lan} />}
        />
        <Switch>
          <Route path="/about" render={() => <About lan={this.state.lan} />} />
          <Route
            path="/skills"
            render={() => <Skills lan={this.state.lan} />}
          />
          <Route
            path="/portofolio"
            render={() => <Portofolio lan={this.state.lan} />}
          />
          <Route
            path="/contact"
            render={() => <Contact lan={this.state.lan} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
