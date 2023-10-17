import React from "react";

const WhyFold = () => {
  return (
    <div className="flex  max-md:flex-col md:flex-row max-w-6xl mx-auto px-16 items-center justify-between mt-36 pb-36">
      <div className="text-gray-100 md:w-[55%] text-center md:text-left space-y-14 tracking-wider max-md:mb-10 md:mb-0 md:mr-10">
        <p className="md:text-7xl text-5xl font-bold ">
          <span className="text-orange-600">Why</span> Meme Marketing?
        </p>
        <p className="text-lg leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="md:w-2/5 flex justify-center">
        <img src="/meme2.png" className="w-[80%] flex md:float-right " />
      </div>
    </div>
  );
};

export default WhyFold;
