import React, { useState } from "react";
import "./Navbar.css";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/logo.svg";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToogle] = useState(false);
  return (
    <div className="container">
      <nav className="wrapper">
        <div className="logo">
          <img src={Logo} alt="BackRoads" />
        </div>
        {toggle && (
          <div className="nav-menu-bar">
            {[
              { menu: "Home", url: "#home" },
              { menu: "About", url: "#about" },
              { menu: "Services", url: "#service" },
              { menu: "Tours", url: "#tour" },
            ].map((data, i) => (
              <a key={i} className="nav-menu" href={data.url}>
                {data.menu}
              </a>
            ))}
          </div>
        )}
        <div className="menu" onClick={() => setToogle(!toggle)}>
          <IoMenu />
        </div>
        <div className="social-media">
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
      </nav>
    </div>
  );
};

export default Navbar;
