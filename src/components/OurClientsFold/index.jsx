import React, { useRef } from "react";
import { clients } from "../../utils/ourClientsConstants";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const OurClientsFold = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollLeft -= 400; // Adjust the scroll distance as needed
  };

  const scrollRight = () => {
    carouselRef.current.scrollLeft += 400; // Adjust the scroll distance as needed
  };
  return (
    <div className="bg-[#14131a]">
      <div className=" max-w-6xl mx-auto px-16 pt-16">
        <div className="text-gray-100 space-y-10 w-[45%]">
          <p className="text-6xl font-bold text-gray-100">
            We have <span className="text-orange-600">worked for</span>
          </p>
        </div>
        <div className="container mx-auto mt-4">
          <div className="w-full overflow-hidden relative">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2 py-1"
              onClick={scrollLeft}
            >
              <MdArrowBackIosNew color="#fff" />
            </button>
            <div
              ref={carouselRef}
              className="flex space-x-4 overflow-x-auto no-scrollbar p-16"
              style={{ scrollBehavior: "smooth" }}
            >
              {clients.map((item, index) => (
                <img
                  key={index}
                  src={item.logoURL}
                  alt={item.alt}
                  className="lg:w-1/4 p-4"
                />
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-1"
              onClick={scrollRight}
            >
              <MdArrowForwardIos color="#fff" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClientsFold;
