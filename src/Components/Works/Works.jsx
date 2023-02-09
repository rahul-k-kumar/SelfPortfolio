import React, { useContext } from "react";
import "./Works.css";
import Spotify from "../../img/Spotify.jpg";
import Amazon from "../../img/amazon.png";
import Whatsapp from "../../img/Whatsapp.png"
import flipkart from "../../img/flipkart.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          I practiced on All these
          </span>
          <span>Brands Website clone</span>
          <span>
          Building a website clone is an excellent method to learn the fundamentals of page structure,
          <br/>
          colors, fonts, media, tables, and other design elements. To duplicate the original,
          <br/>
          go into as much detail as possible.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <a href="https://www.spotify.com">
            <img src={Spotify} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://www.whatsapp.com">
            <img src={Whatsapp} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://www.amazon.in">
            <img src={Amazon} alt="" />
            </a>
          </div>{" "}
          <div className="w-secCircle">
            <a href="https://www.flipkart.com/">
            <img src={flipkart} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://www.facebook.com/">
            <img src={Facebook} alt="" />
            </a>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;