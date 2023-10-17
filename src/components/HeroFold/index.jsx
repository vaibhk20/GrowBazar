import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";

const HeroFold = () => {
  const scrollToSection = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="text-gray-100 w-full mx-auto items-center flex max-md:flex-col md:flex-row justify-between mt-32 pb-10 pt-10 max-w-7xl bg-gradient-to-t from-[#201f27]/50 to-[#0e0c13] rounded-[48px]">
      <div className="w-2/5 p-12 hidden md:flex">
        <img src="/meme0.jpeg" alt="" />
      </div>
      <div className="flex flex-col w-[50%] items-center space-y-6 text-center tracking-wider">
        <p className="md:text-5xl text-4xl font-light">We are Truely</p>
        <p className="md:text-7xl text-5xl font-bold  ">Make Meme!</p>
        <p className="text-xl font-light md:w-[70%]">
          Advertisements interrupt good content
          <span> Memes are good content...</span>
        </p>
        <button
          onClick={scrollToSection}
          className="bg-orange-600 py-3 px-5 rounded-sm font-semibold text-sm"
        >
          CONTACT US
        </button>
        <FaChevronDown color="#3c3b41" />
      </div>
      <div className="w-2/5 p-12 relative hidden md:flex">
        <img src="/meme1.jpg" alt="" />
        {/* <div className="absolute right-6">
          <div className="rounded-md border-gray-500 border max-w-fit p-1.5 mt-3">
            <AiOutlineInstagram color="#697484" />
          </div>
          <div className="rounded-md border-gray-500 border max-w-fit p-1.5 mt-3">
            <BiLogoFacebook color="#697484" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroFold;
