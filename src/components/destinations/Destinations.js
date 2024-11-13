import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { destinations } from "../../data/destinations";
import "./Destinations.css";

const Destinations = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;

    if (!isPaused) {
      interval = setInterval(() => {
        setFocusedIndex((prevIndex) => (prevIndex + 1) % destinations.length);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseEnter = (index) => {
    setFocusedIndex(index);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <>
      <h2 className="text-center mt-5">
        {" "}
        <span className="about-us-h2 text-warning">Destinations</span>
      </h2>
      <div className="row mt-5 justify-content-center">
        {destinations.map((destination, index) => (
          <Link
            key={destination.title}
            to="/contact-us"
            className={`col-12 col-sm-3 col-md-3 col-lg-3 p-3 destination justify-content-center align-items-center flex-column ${
              focusedIndex === index ? "focused" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)} // Set focus on hover
            onMouseLeave={handleMouseLeave} // Resume cycling on mouse leave
          >
            <h3 style={{ fontWeight: "bold" }} className="blue-color">
              {destination.title}
            </h3>
            <img
              className="destination-img"
              src={require("../../assets/" + destination.image)}
              alt="img"
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Destinations;
