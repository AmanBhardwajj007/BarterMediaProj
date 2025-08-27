import React from "react";
import Slider from "./Slider";
import Services from "./Services";
import About from "./About";
import SectionSlider from "./SectionSlider";

const Homepage = () => {
  return (
    <>
      {/* <Slider/> */}
      <SectionSlider />
      <Services />

      <div className="w-screen min-h-screen flex justify-center items-center bg-white px-4 md:px-8">
        <div className="w-[80%] max-w-7xl flex flex-col md:flex-row justify-between items-center text-black gap-10 md:gap-6 py-10">
          
          
          <div className="w-full md:w-1/2 flex flex-col text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Corporate Barter Made Easy
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed mt-4">
              We enable brands to unlock hidden value by trading products, services,
              or surplus inventory for media and promotions, reducing cash spend while
              maximizing marketing impact.
            </p>
          </div>

          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto object-contain"
              src="https://barterclan.com/wp-content/uploads/2022/05/280.webp"
              alt="Corporate Barter"
            />
          </div>
        </div>
      </div>

      
      
      <About />
    </>
  );
};

export default Homepage;
