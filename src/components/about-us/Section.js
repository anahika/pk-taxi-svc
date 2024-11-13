import React from "react";
import { aboutData } from "../../data/aboutUs";

function Section() {
  return (
    <>
      {aboutData.map((section, index) => (
        <div
          key={index}
          className={
            (index % 2 === 0 ? "section-odd" : "section-even") +
            " d-flex mt-4 p-4 align-items-center"
          }
        >
          <div className=" col-12 col-md-7 about-text">
            <h3 className="text-center blue-color">{section.title}</h3>
            <p>{section.text}</p>
          </div>
          <div className="col-12 col-md-5">
            <img
              className="section-img"
              src={require("../../assets/" + section.image)}
              alt="img"
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Section;
