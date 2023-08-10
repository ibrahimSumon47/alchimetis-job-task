import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex justify-between bg-white lg:py-10 lg:px-44 md:px-10 md:py-10">
      <div>
        <h3 className="text-5xl text-black font-bold mb-6 mt-10">
          Manage your <br />
          CRM right way
        </h3>
        <p className="text-black font-bold mt-6 mb-12">
          Our platform brings new processes into smart <br /> CRM Solution. Manage your
          Customer <br /> processes right way.
        </p>
        <div className="">
          <button className="btn btn-success hover:bg-green-700 text-white">
            Get Started
          </button>
          <button className="btn btn-outline text-black ml-4">Live Demo</button>

        </div>
      </div>
      <div className="md:p-36 lg:p-48 bg-gray-200"></div>
    </div>
  );
};

export default Banner;
