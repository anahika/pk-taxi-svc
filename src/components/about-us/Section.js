import React from "react";
import aboutData from "../../data/data.json";
import "./aboutUs.css";

function Section() {
  return (
    <div>
      {aboutData.data.map((section, index) => (
        <div key={index}>
          <div
            className={
              index%2 === 0 ? "d-flex flex-row mt-4 p-4" : "d-flex flex-row-reverse mt-4 p-4"
            }
          >
            <div className="align-self-center about-text">
              <h3 className="text-center">{section.title}</h3>
              <p>{section.text}</p>
            </div>
            <div>
              <img src={require("../../assets/" + section.image)} alt="img" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section;
