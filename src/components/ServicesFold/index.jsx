import React from "react";
import { services } from "../../utils/servicesConstants";

const ServicesFold = () => {
  return (
    <div className="flex flex-col max-w-6xl mx-auto px-16 justify-between mt-36 pb-32 space-y-8 ">
      <p className="md:text-7xl text-5xl text-center lg:text-left font-bold text-gray-100">
        Our <span className="text-orange-600">Sevices</span>
      </p>

      <div className="flex flex-wrap lg:ml-[20%] lg:w-4/5 z-50">
        {services.map((data) => (
          <div className="p-6 rounded-lg bg-gradient-to-r from-[#201f27]/50 to-[#0e0c13] md:w-1/2 lg:w-1/3 space-y-3 mt-4">
            <img src="/brandingLogo.png" className="w-[70px] pb-4" />
            <p className="text-gray-100 tracking-wide font-bold">
              {data.service}
            </p>
            <p className="text-gray-100 tracking-wide text-sm font-light">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesFold;
