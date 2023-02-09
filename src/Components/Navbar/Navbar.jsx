import React from "react";

import "./Navbar.css";
import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      
      <div className="n-left">
        <div className="n-name">Design Tech</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact US</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;