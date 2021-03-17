import React from "react";
import classes from "./About.module.css";
import Profile from "../../Profile/Profile";
import Aux from "../../../hoc/Auxiliary";
import about_me_1 from "../../../assets/images/aboutMe/about_me_1.jpeg";
import about_me_2 from "../../../assets/images/aboutMe/about_me_2.jpg";
import about_me_3 from "../../../assets/images/aboutMe/about_me_3.jpeg";
import about_me_4 from "../../../assets/images/aboutMe/about_me_4.jpg";
import about_me_5 from "../../../assets/images/aboutMe/about_me_5.jpg";
import about_me_6 from "../../../assets/images/aboutMe/about_me_6.jpg";

const About = (props) => {
  let [zh_about1, eng_about1] = [
    `你好！我是鍾貽丞，今年24歲，畢業於國立政治大學資訊管理學系雙主修廣播電視學系。
    我喜歡用雙手親手做東西，例如做菜或是畫畫、寫程式。我也是一個熱愛旅行的人，2016年暑假獨自當了背包客到歐洲打工換宿了兩個月。
    我也喜歡學習英文，這也是我把這個網站做成雙語切換的原因。
    `,
    `Hello there! I'm Yi-Cheng, 24, graduated from National ChengChi University double-majored in MIS 
    and Broadcast & Television. 
    I enjoy building stuffs with my own hands, such as cooking, painting or coding. 
    I'm also a travelholic that have spent entire two months in summer 2016 doing work-exchange as a backpacker alone in Europe.
    I enjoy studying English too, that's kinda reason why I tried to make this website bilingual with toggle buttons.
    `,
  ];
  let [zh_about2, eng_about2] = [
    `去年底自己開始努力學習前端程式相關課程，上網自學了HTML, CSS, Javascript, React js 等相關程式語言跟框架，發現自己非常喜歡！
    特別是能夠實現想像中的功能或畫面時很有成就感！希望未來工作實作中能夠續深入精進自己的程式能力。
    `,
    `To be honest, I was once lost in my future directions until I tried to approach the building knowledges of website.
    I started studying really hard last year end at front-end programming related courses online, which includes several
    programming languages and frameworks such as HTML, CSS, Javascript and React js, and ended up realizing that I like it a lot!
    Especially the moment when you are able to fullfill your imaginary functions or render, which really gives me senses of achievement!
    Hope to even dive deeper to strenghthen my coding knowledge in the future career.
    `,
  ];
  return (
    <Aux>
      <div className={classes.showProfile}>
        <Profile lan={props.lan} />
      </div>
      <div className={classes.About}>
        <div className={classes.Card1}>
          <h1>{props.lan === "zh" ? "關於我" : "About Me"}</h1>
          <p>{props.lan === "zh" ? zh_about1 : eng_about1}</p>
          <p>{props.lan === "zh" ? zh_about2 : eng_about2}</p>
        </div>
        <div className={classes.Card2}>
          <h1>{props.lan === "zh" ? "一點點我的生活" : "A peek of my life"}</h1>
          <div
            id="aboutMe"
            class="carousel slide"
            data-ride="carousel"
            style={{
              width: "90%",
              margin: "3% 5%",
            }}
          >
            <ol class="carousel-indicators">
              <li data-target="#aboutMe" data-slide-to="0" class="active"></li>
              <li data-target="#aboutMe" data-slide-to="1"></li>
              <li data-target="#aboutMe" data-slide-to="2"></li>
              <li data-target="#aboutMe" data-slide-to="3"></li>
              <li data-target="#aboutMe" data-slide-to="4"></li>
              <li data-target="#aboutMe" data-slide-to="5"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={about_me_1} alt="about_me_1" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>{props.lan === "zh" ? "登山去!" : "Let's go hiking!"}</h5>
                  <p>
                    {props.lan === "zh"
                      ? "與朋友們的一日四獸山小旅行"
                      : "A daily little trip to the Four Beasts with friends."}
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={about_me_2} alt="about_me_2" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>
                    {props.lan === "zh" ? "來擺攤吧!" : "Let's run a stall!"}
                  </h5>
                  <p>
                    {props.lan === "zh"
                      ? "在假日免費市集送出不需要的東西"
                      : "Giving away stuffs that we don't need for free at the weekend market."}
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={about_me_3} alt="about_me_3" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>
                    {props.lan === "zh"
                      ? "一起來攀岩!"
                      : "Let's go rock climbing!"}
                  </h5>
                  <p>
                    {props.lan === "zh"
                      ? "與朋友一同室內攀岩"
                      : "Indoor rock climbing with my friends."}
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={about_me_4} alt="about_me_4" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>
                    {props.lan === "zh"
                      ? "一起來遊行吧!"
                      : "Let's martch with pride!"}
                  </h5>
                  <p>
                    {props.lan === "zh"
                      ? "去年跟大學朋友一起參加遊行"
                      : "Attended pride parade with my college friends last year."}
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={about_me_5} alt="about_me_5" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>
                    {props.lan === "zh"
                      ? "與德國打工換宿家庭合影"
                      : "Photo with my work-exchange German family"}
                  </h5>
                  <p>
                    {props.lan === "zh"
                      ? "陪伴我度過2016年精采美好暑假的德國一家人"
                      : "A warn-hearted German family that I spent amazing summer holiday 2016 with."}
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={about_me_6} alt="about_me_6" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#aboutMe"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#aboutMe"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default About;
