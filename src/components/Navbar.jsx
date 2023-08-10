import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const navOption = (
    <>
      <li>
        <Link className="font-bold">
          Solutions
          <FaAngleDown className="justify-center items-center" />{" "}
        </Link>
      </li>
      <li>
        <Link className="font-bold">
          Company <FaAngleDown />
        </Link>
      </li>
      <li>
        <Link className="font-bold">
          Resources <FaAngleDown />
        </Link>
      </li>
      <li>
        <Link className="font-bold">Pricing</Link>
      </li>
    </>
  );

  return (
    <div className="relative">
      <div
        className="navbar bg-white text-black
        z-30"
      >
        <div className="lg:pl-[120px]">
          <div className="dropdown z-30">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 bg-white rounded-box w-52 text-center"
            >
              {navOption}
              <button className="btn btn-outline text-black">Live Demo</button>

          <button className="btn btn-success hover:bg-green-700 text-white">
            Get Started
          </button>
             
            </ul>
          </div>
          <Link className="px-10">
            <div className="flex gap-5 items-center">
              <img
                className="w-10 h-10 rounded"
                src="https://i.ibb.co/fq8Qg92/Logo-Mark.png"
                alt=""
              />
              <p className="font-bold md:text-2xl">smushsi</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">
            {navOption}
            
          </ul>
        </div>
        <div className="hidden lg:flex lg:navbar-end gap-x-4 lg:pr-[105px]">
          <button className="btn btn-outline text-black">Live Demo</button>

          <button className="btn btn-success hover:bg-green-700 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
