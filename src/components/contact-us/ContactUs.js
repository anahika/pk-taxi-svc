import React from "react";
import "./ContactUs.css";

function ContactUs() {
  const phoneNumber = 8803660003;

  return (
    <div className="d-flex flex-column align-items-center mt-5 contact-us-bg p-4">
      <h2>
        {" "}
        <span className="contact-us-h2">We are here for you!</span>
      </h2>
      <p className="contact-para">
        We love our customers, so feel free to visit during normal business
        hours.
      </p>

      <div className="row d-flex justify-content-center">
        <div className="card col-md-4 m-2 col-10">
          <div className="card-body text-center font-monospace">
            <h5 className="card-title text-danger">Need a ride?</h5>
            <p className="card-text">
              Call us anytime for fast and reliable taxi service. Our drivers
              are available 24/7 to get you where you need to go. Contact us
              today to book your ride.
            </p>
            <a className="btn btn-warning" href={`tel:${phoneNumber}`}>
              <i className="fa fa-phone"> +91 8803660003</i>
            </a>
          </div>
        </div>

        <div className="card col-md-4 m-2 col-10">
          <div className="card-body text-center font-monospace">
            <h5 className="card-title text-danger">
              Need help? Contact us by email
            </h5>
            <p className="card-text">
              For support inquiries, please don't hesitate to contact us at
              traveltheoriz@gmail.com. Contact us for assistance via email.
            </p>
            <a
              className="btn btn-warning"
              href="mailto:traveltheoriz@gmail.com"
            >
              <i className="fa fa-envelope"> traveltheoriz@gmail.com</i>
            </a>
          </div>
        </div>

        <div className="card col-md-4 m-2 col-10">
          <div className="card-body text-center font-monospace">
            <h5 className="card-title text-danger">24/7 Taxi Service</h5>
            <p className="card-text">
              We understand that transportation needs can arise at any time of
              day or night. That's why we offer reliable and convenient taxi
              service 24 hours a day, 7 days a week.
            </p>
            <a
              className="btn btn-warning"
              href="mailto:traveltheoriz@gmail.com"
            >
              <i className="fa fa-envelope"> traveltheoriz@gmail.com</i>
            </a>
          </div>
        </div>
      </div>

      <p className="contact-para mt-4">
        Contact us today to book your ride and experience the beauty of Himachal
        Pradesh in comfort and style. We look forward to hearing from you!{" "}
      </p>
    </div>
  );
}

export default ContactUs;
