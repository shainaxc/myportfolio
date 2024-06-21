import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>E</div>
        <span  style={{color: darkMode?'white':''}}>Early</span>
        <span>warning </span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>M</div>
        <span  style={{color: darkMode?'white':''}}>Monitoring</span>
        <span>Devices</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>B</div>
        <span  style={{color: darkMode?'white':''}}>Backup</span>
        <span>Systems</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>E</div>
        <span  style={{color: darkMode?'white':''}}>Emergency</span>
        <span>alerts</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>R</div>
        <span  style={{color: darkMode?'white':''}}>Response</span>
        <span>protocols</span>
      </div>
    </div>
  );
};

export default Experience;
