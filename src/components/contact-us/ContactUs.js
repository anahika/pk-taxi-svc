import React from "react";
import "./ContactUs.css";
import { contacts } from "../../data/contacts";

function ContactUs() {
  return (
    <div className="d-flex flex-column align-items-center mt-5 contact-us-bg p-4">
      <h2>
        {" "}
        <span className="contact-us-h2">We are here for you!</span>
      </h2>
      <p className="contact-para text-warning">
        We love our customers, so feel free to visit during normal business
        hours.
      </p>

      <div className="row d-flex justify-content-center">
        {contacts.map((contact, index) => (
          <div key={index} className="card col-md-4 m-2 col-10">
            <div className="card-body text-center">
              <h5 className="card-title text-danger">{contact.title}</h5>
              <p className="blue-color">{contact.description}</p>
              <a className="btn btn-warning" href={contact.link}>
                <i className="fa fa-phone"> {contact.content}</i>
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="contact-para mt-4 text-warning">
        Contact us today to book your ride and experience the beauty of Himachal
        Pradesh in comfort and style. We look forward to hearing from you!{" "}
      </p>
    </div>
  );
}

export default ContactUs;
