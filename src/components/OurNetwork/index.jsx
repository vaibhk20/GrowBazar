import React from "react";
import { networkData } from "../../utils/networkConstants";

const OurNetwork = () => {
  return (
    <div className="flex flex-col max-w-6xl mx-auto px-16 mt-36 pb-36 ">
      <div className="space-y-4 text-center md:text-left md:w-1/2">
        <p className="md:text-7xl text-5xl font-bold text-gray-100">
          Our <span className="text-orange-600">Network</span>
        </p>
        <p className="text-lg text-gray-100 leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="flex flex-wrap flex-row justify-between md:ml-[20%] mb-20 mt-10 px-[5%] ">
        {networkData.map((data) => (
          <div
            className={`rounded-lg ${data.palatte} mt-6 p-12 text-center max-md:w-[100%] md:w-[48%]`}
          >
            <p className="font-bold text-5xl ">{data.followers}</p>
            <p className="font-bold text-xl">{data.platform}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurNetwork;
