import React from "react";
import Section from "./Section";
import "./AboutUs.css";
import Testimonial from "./Testimonial";

function AboutUs() {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h2>
        {" "}
        <span className="about-us-h2 text-warning">About Us</span>
      </h2>
      <Section />
      <h2 className=" mt-5">
        {" "}
        <span className="about-us-h2 blue-color">Testimonials</span>
      </h2>
      <Testimonial />
    </div>
  );
}

export default AboutUs;
