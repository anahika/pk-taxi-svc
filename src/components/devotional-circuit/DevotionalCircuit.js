import React, { useEffect, useState, useRef } from "react";
import "./DevotionalCircuit.css"; // Custom CSS for hover and other styles
import Xarrow from "react-xarrows";
import { devotionalCircuit } from "../../data/devotional-circuit"; // Assuming your destinations are stored in data/destinations.js

export default function DevotionalCircuit() {
  const [isMounted, setIsMounted] = useState(false);
  const imageRefs = useRef([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      imageRefs.current = imageRefs.current.slice(0, devotionalCircuit.length);
    }
  }, [isMounted]);

  return (
    <>
      <h2 className="text-center mt-5">
        {" "}
        <span className="about-us-h2 text-warning">
          Travel the Devotional Circuit with Comfort & Ease
        </span>
      </h2>

      <div
        className="position-relative"
        style={{ minHeight: "400px" }}
      >
        {devotionalCircuit.map((location, index) => {
          const currentId = `elem${index}`;
          const nextId =
            index < devotionalCircuit.length - 1 ? `elem${index + 1}` : null;

          return (
            <div
              key={location.title}
              className="location-wrapper"
              style={{
                top: location.position.top,
                left: location.position.left,
              }}
            >
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                id={currentId}
                src={require("../../assets/" + location.image)}
                alt={location.name}
                className="location-image"
              />
              <h6 className="text-center blue-color p-2">{location.title}</h6>

              {isMounted && nextId && (
                <Xarrow
                  start={currentId}
                  end={nextId}
                  lineColor="#355278"
                  headColor="#355278"
                  strokeWidth={2}
                  headSize={5}
                  dashness={true}
                  animateDrawing={true}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
