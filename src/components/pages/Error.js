import React from "react";
import { Link } from "react-router-dom";
import Carousal from "../carousal/Carousel";

export const Error = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column p-3 mt-3 m-auto w-100">
        <Carousal />

        <p className="mt-3 text-center text-primary">
          All that is gold does not glitter, Not all those who wander are lost.
        </p>
        <Link to="/" className="btn btn-warning mt-3">
          GO HOME
        </Link>
      </div>
      <footer className="text-center text-black-50 p-3">
        {" "}
        <span>COPYRIGHT © 2023 TRAVEL THEORIZ - ALL RIGHTS RESERVED.</span>
      </footer>
    </>
  );
};
