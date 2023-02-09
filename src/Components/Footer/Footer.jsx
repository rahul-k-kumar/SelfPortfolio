import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>getrahul.257@gmail.com</span>
        <span>+91-7488713617</span>
        <div className="f-icons">
          <a href="https://instagram.com/rahulpatel__._?igshid=YmMyMTA2M2Y=">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/getrahul257/">
          <LinkedIn color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/rahul-k-kumar">
          <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://bit.ly/3HIHAi8">
          <Whatsapp color="white" size={"3rem"} />
          </a>
          </div>
      </div>
    </div>
  );
};

export default Footer;