import React from "react";
import Profileimage from "./images/profileimg.png";
import slack from "./images/slack.png";
import github from "./images/Icon.png";
import ingressive from "./images/I4G.png";
import share from "./images/share.png";
import sharemobile from "./images/mobileshare.png";
import "./style.css";

const PageContainer = () => {
  const buttonTitles = [
    {
      title: "Twitter Link",
      url: "https://twitter.com/ahm_tamilore?t=P45cW5kpnZ8J7Ro7LyAoAw&s=09",
    },
    {
      title: "Zuri Team",
      url: "https://training.zuri.team/",
      iden: "btn__zuri",
    },
    {
      title: "Zuri Books",
      url: "http://books.zuri.team/",
      iden: "books",
    },
    {
      title: "Python Books",
      url: "https://books.zuri.team/python-for-beginners?ref_id=<aiyegbusioluwaferanmi>",
      iden: "book__python",
    },
    {
      title: "Background Checks for Coders",
      url: "https://background.zuri.team/",
      iden: "pitch",
    },
    {
      title: "Design Books",
      url: "https://books.zuri.team/design-rules",
      iden: "book__design",
    },
  ];

  //create list of buttontitles...

  const buttonList = buttonTitles.map((item) => {
    return (
      <a href={item.url}>
        <button id={item.iden}>{item.title}</button>
      </a>
    );
  });
  return (
    <>
      <div className="container">
        <div className="share-grid">
          <div></div>
          <div></div>
          <div></div>
          <img src={share} alt="share button" className="share" />
        <img src={sharemobile} alt="share-mobile" className="share-mobile" />
        </div>
        <div className="profile-part">
          <img src={Profileimage} alt="profilepic" id="profile__img" />
          <p id="twitter">Ahm_Tamilore</p>
          <p id="slack">Aiyegbusi Oluwaferanmi</p>
        </div>
        <div className="all-buttons">{buttonList}</div>
        <div className="icons">
          <img src={slack} alt="slack-icon" />
          <a href="https://github.com/Ferrari-coder">
            <img src={github} alt="github-icon" />
          </a>
        </div>
        <div className="underline"></div>
        <footer>
          <h2>
            Zuri<span>.</span>Internship
          </h2>
          <p>HNG Internship 9 Frontend Task</p>
          <img src={ingressive} alt="I4G-logo" />
        </footer>
      </div>
    </>
  );
};

export default PageContainer;
