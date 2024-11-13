import React from "react";
import AboutUs from "../about-us/AboutUs";
import ContactUs from "../contact-us/ContactUs";
import Carousal from "../carousal/Carousel";
import "./Landing.css";
import Destinations from "../destinations/Destinations";
import DevotionalCircuit from "../devotional-circuit/DevotionalCircuit";

function Landing() {
  const phoneNumber = 8803660003;
  return (
    <>
      <div className="bg d-flex flex-column align-items-center">
        <div className="row w-100 m-auto">
          <div className="col-md-6">
            <Carousal />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center mt-5">
            <h1 className="text-warning">Welcome to Travel Theoriz</h1>
            <h1>It's time to travel</h1>
            <a className="contact-button p-lg-3" href={`tel:${phoneNumber}`}>
              CONTACT US
            </a>
          </div>
        </div>
      </div>
      <Destinations />
      <DevotionalCircuit />
      <AboutUs />
      <ContactUs />
      <footer className="text-center text-black-50 p-1">
        {" "}
        <span>COPYRIGHT © 2024 TRAVEL THEORIZ - ALL RIGHTS RESERVED.</span>
      </footer>
    </>
  );
}

export default Landing;
