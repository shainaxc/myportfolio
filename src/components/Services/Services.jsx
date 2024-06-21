import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>About Us</span>
        <span>E M B E R</span>
        <spane>
       The EMBER system is a fire detection based on image processing <br/>that uses a Raspberry Pi 4B, a GSM Module for SMS notifications, <br/> and IP Cameras for fire detection. <br/> different alarm levels for fires up to alarm level 3.<br/> This system has the capability to enhance fire detection and <br/>emergency response as it delivers real-time information.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">More info</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Goal #1"}
            detail={"Ensure Unrivaled Safety"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Goal #2"}
            detail={"Enhance Reliability and Efficiency"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "26rem", left: "30rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Goal #3"}
            detail={
              "Foster Accessibility and Affordability"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
