import React from "react";
import Section from "./Section";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h2>
        {" "}
        <span className="about-us-h2">About Us</span>
      </h2>
      <Section />
    </div>
  );
}

export default AboutUs;
