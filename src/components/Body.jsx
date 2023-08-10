import React from "react";

const Body = () => {
  return (
    <div className="flex bg-white justify-between lg:px-44 items-center pb-10 md:px-6">
      <div>
        <p className="text-black font-semibold">
          Improving the relationships <br /> of customer and businesess:
        </p>
      </div>
      <div className="flex md:gap-x-4 lg:gap-x-20 pl-16  justify-center items-center pr-4">
        <div className="flex md:gap-2 justify-center lg:gap-5 items-center">
          <img
            className="w-5 h-5 rounded"
            src="https://i.ibb.co/fq8Qg92/Logo-Mark.png"
            alt=""
          />
          <p className="font-bold md:text-2xl">smushsi</p>
        </div>
        <div className="flex md:gap-2 justify-center lg:gap-5 items-center">
          <img
            className="w-5 h-5 rounded"
            src="https://i.ibb.co/tPtqMGB/Rectangle-1.png"
            alt=""
          />
          <p className="font-bold md:text-2xl">marshi</p>
        </div>
        <div className="flex md:gap-2 justify-center lg:gap-5 items-center">
          <img
            className="w-5 h-5 rounded"
            src="https://i.ibb.co/zfkMb1C/Logo-Mark-1.png"
            alt=""
          />
          <p className="font-bold md:text-2xl">cotokishi</p>
        </div>
        <div className="flex md:gap-2 justify-center lg:gap-5 items-center">
          <img
            className="w-5 h-5 rounded"
            src="https://i.ibb.co/PQn19KY/Logo-Mark-2.png"
            alt=""
          />
          <p className="font-bold md:text-2xl">cotokishi</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
