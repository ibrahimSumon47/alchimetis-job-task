import React from "react";

const Body = () => {
  return (
    <div className="md:flex bg-white md:justify-between lg:px-44 items-center pb-10 md:px-6 md:p-10 p-5">
      <div>
        <p className="text-black font-semibold ">
          Improving the relationships <br /> of customer and businesess:
        </p>
      </div>
      <div className="md:flex md:gap-x-4 lg:gap-x-20 md:pl-16  justify-center items-center md:pr-4 ">
        <div className="flex gap-5 md:gap-2 md:justify-center lg:gap-5 items-center">
          <img
            className="w-5 h-5 rounded"
            src="https://i.ibb.co/fq8Qg92/Logo-Mark.png"
            alt=""
          />
          <p className="font-bold md:text-2xl">smushsi</p>
        </div>
        <div className="flex gap-5 md:gap-2 md:justify-center lg:gap-5 items-center">
          <img
            className="w-5 h-5 rounded"
            src="https://i.ibb.co/tPtqMGB/Rectangle-1.png"
            alt=""
          />
          <p className="font-bold md:text-2xl">marshi</p>
        </div>
        <div className="flex md:gap-2 md:justify-center gap-5 lg:gap-5 items-center">
          <img
            className="w-5 h-5 rounded"
            src="https://i.ibb.co/zfkMb1C/Logo-Mark-1.png"
            alt=""
          />
          <p className="font-bold md:text-2xl">cotokishi</p>
        </div>
        <div className="flex md:gap-2 md:justify-center gap-5 lg:gap-5 items-center">
          <img
            className="w-5 h-5 rounded"
            src="https://i.ibb.co/PQn19KY/Logo-Mark-2.png"
            alt=""
          />
          <p className="font-bold md:text-2xl">ranshishi</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
