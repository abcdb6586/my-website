import React from "react";
import classes from "./Skills.module.css";
import skills from "../../../assets/images/skills/skills.png";

const Skills = (props) => {
  return (
    <div className={classes.Skills}>
      <h1>
        {props.lan === "zh"
          ? "技能 (熟悉程度)"
          : "Skills (Level of Proficiency)"}
      </h1>

      <div className={classes.Skill}>
        <span>HTML5</span>
        <div class="progress" style={{ height: "20px" }}>
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "90%", backgroundColor: "rgb(202, 65, 65)" }}
          >
            90%
          </div>
        </div>
      </div>

      <div className={classes.Skill}>
        <span>CSS3</span>
        <div class="progress" style={{ height: "20px" }}>
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "75%", backgroundColor: "rgb(202, 65, 65)" }}
          >
            75%
          </div>
        </div>
      </div>
      <div className={classes.Skill}>
        <span>Javascript</span>
        <div class="progress" style={{ height: "20px" }}>
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "85%", backgroundColor: "rgb(202, 65, 65)" }}
          >
            85%
          </div>
        </div>
      </div>
      <div className={classes.Skill}>
        <span>React JS</span>
        <div class="progress" style={{ height: "20px" }}>
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "75%", backgroundColor: "rgb(202, 65, 65)" }}
          >
            75%
          </div>
        </div>
      </div>
      <div className={classes.Skill}>
        <span>Git</span>
        <div class="progress" style={{ height: "20px" }}>
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "80%", backgroundColor: "rgb(202, 65, 65)" }}
          >
            80%
          </div>
        </div>
      </div>
      <div className={classes.Skill}>
        <span>RWD</span>
        <div class="progress" style={{ height: "20px" }}>
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "80%", backgroundColor: "rgb(202, 65, 65)" }}
          >
            80%
          </div>
        </div>
      </div>
      <div className={classes.Skill}>
        <span>Jquery, Bootstrap</span>
        <div class="progress" style={{ height: "20px" }}>
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "70%", backgroundColor: "rgb(202, 65, 65)" }}
          >
            70%
          </div>
        </div>
      </div>
      <img src={skills} alt="skills" />
    </div>
  );
};

export default Skills;
