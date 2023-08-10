import React from "react";

const Banner = () => {
  return (
    <div className="md:flex justify-between bg-white lg:py-10 lg:px-44 md:px-10 md:py-10 py-5">
      <div>
        <h3 className="text-5xl text-black font-bold mb-6 mt-10 px-5 md:px-0">
          Manage your <br /> CRM right way
        </h3>
        <p className="text-black font-bold mt-6 mb-12 px-5 md:px-0">
          Our platform brings new processes into smart <br />
          CRM Solution. Manage your Customer <br /> processes right way.
        </p>

        <div className="px-5 md:px-0 mb-5 md:mb-0">
          <button className="btn btn-success hover:bg-green-700 text-white">
            Get Started
          </button>
          <button className="btn btn-outline text-black ml-4">Live Demo</button>
        </div>
      </div>
      <div className="p-28 md:p-36 lg:p-48 bg-gray-200"></div>
    </div>
  );
};

export default Banner;
