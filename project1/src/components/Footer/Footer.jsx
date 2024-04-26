import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer-container">
          <div id="footer-menu" className="nav-menu-bar">
            {[
              { menu: "Home", url: "#home" },
              { menu: "About", url: "#about" },
              { menu: "Services", url: "#services" },
              { menu: "Tours", url: "#tours" },
            ].map((data, i) => (
              <a key={i} className=" footer-menu" href={data.url}>
                {data.menu}
              </a>
            ))}
          </div>
          <div className="social-media-footer">
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaTwitter />
            </a>

            <a href="">
              <FaGithub />
            </a>
          </div>
          <div className="copyright">
            Copyright © Backroads Travel Tours Company 2024 All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
