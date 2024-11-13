import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { carousal } from "../../data/carousal";

function Carousal() {
  return (
    <Carousel
      autoPlay="true"
      infiniteLoop="true"
      showThumbs={false}
      showStatus="false"
      className="w-100"
    >
      {carousal.map((post) => {
        return (
          <div key={post.title}>
            <div className="postImageWrapper1">
              <img
                src={require("../../assets/" + post.image)}
                alt="BlogImage"
                 className="img1"
              />
            </div>
            <h3>{post.title}</h3>
          </div>
        );
      })}
    </Carousel>
  );
}

export default Carousal;
