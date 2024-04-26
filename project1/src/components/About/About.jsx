import React from "react";
import AboutImg from "../../assets/about.jpeg";
import "./About.css";
const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="wrapper">
        <h1 className="heading">
          About <span>Us</span>
        </h1>
        <div className="section-center about-center">
        <div className="about-img">
          <img
            src={AboutImg}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <div className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
         <button>READ MORE</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
