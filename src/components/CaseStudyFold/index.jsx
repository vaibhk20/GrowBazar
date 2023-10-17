import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const CaseStudyFold = () => {
  return (
    <div className="flex max-w-6xl mx-auto px-16 ">
      <div className="text-gray-100 space-y-10 w-[45%]">
        <p className="text-6xl font-bold text-gray-100">
          Our <span className="text-orange-600">Case Studies</span>
        </p>

        {/* <button className="border border-orange-600 py-3 px-10 text-orange-600 font-semibold flex">
          VIEW ALL
          <span className="self-center ml-2">
            <LiaLongArrowAltRightSolid />
          </span>
        </button> */}
      </div>
    </div>
  );
};

export default CaseStudyFold;
