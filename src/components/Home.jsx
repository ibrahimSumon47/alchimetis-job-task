import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Body from "./Body";

const Home = () => {
  return (
    <div>
      <div className="bg-green-600 px-20 pt-20">
        <p className="text-center bg-black text-white p-5">
          Version .2.0 Released with a new user database managements.{" "}
          <span className="underline">What’s new</span>
        </p>
      <Navbar />
      <Banner/>
      <Body/>
      </div>
    </div>
  );
};

export default Home;
