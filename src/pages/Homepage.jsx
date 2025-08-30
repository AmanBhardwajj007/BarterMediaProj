import React, { useEffect } from "react";
import Slider from "./Slider";
import Services from "./Services";
import About from "./About";
import SectionSlider from "./SectionSlider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {

    useEffect(() => {
      
    gsap.from(".homepage-textbox", {
      x: -200,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".homepage-textbox",
        start: "top 80%",
        toggleActions: "play none none reset", 
      },
    });

    gsap.from(".homepage-img", {
      x: 200,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "bounce.out",
       scrollTrigger: {
        trigger: ".homepage-img",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });
  }, []);

  return (
    <>
      {/* <Slider/> */}
      <SectionSlider />
      <Services />

      <div className="w-screen min-h-screen flex justify-center items-center px-4 md:px-8 pb-[-80px] homepage-textbox">
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

          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end homepage-img">
            <img
              className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto object-contain "
              src="https://barterclan.com/wp-content/uploads/2022/05/280.webp"
              alt="Corporate Barter"
            />
          </div>
        </div>
      </div>
      <About/>
    </>
  );
};

export default Homepage;
