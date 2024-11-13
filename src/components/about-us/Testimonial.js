import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { testimonials } from "../../data/testimonials";

function Testimonial() {
  return (
    <Carousel
      autoPlay="true"
      infiniteLoop="true"
      showThumbs={false}
      showStatus="false"
      className="w-75 bg-warning mt-5 testimonial-radius"
    >
      {testimonials.map((testimonial) => {
        return (
          <div className="row p-5" key={testimonial.title}>
            <div className="col-md-4 m-auto">
              <img
                src={require("../../assets/" + testimonial.image)}
                alt="BlogImage"
                className="rounded-circle"
                style={{ width: "150px", height: "150px" }}
              />
            </div>

            <div className="col-md-8 p-2">
              <p>{testimonial.review}</p>
              <span className="text-danger">{testimonial.title}</span>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default Testimonial;
