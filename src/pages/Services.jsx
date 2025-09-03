import React, { useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Mainpage = () => {

    useEffect(() => {

    gsap.from(".service-text", {
      x: -200,              
      opacity: 0,
      duration: 1,
      ease: "bounce.out",   
      stagger: 0.2,         
      scrollTrigger: {
        trigger: ".service-text",
        start: "top 85%",   
        toggleActions: "play none none none",
        once: true,
      },
    });

    // gsap.utils.toArray(".service-box").forEach((box, i) => {
    //   gsap.from(box, {
    //     x: -(i % 2 === 0 ? -100 : 100),  
    //     duration: 0.5,
    //     ease: "bounce.out",
    //     scrollTrigger: {
    //       trigger: box,                
    //       start: "top 85%",           
    //       toggleActions: "play none none reset",
    //     },
    //   });
    // });
    
  }, []);

  return (
    <div
      id="serviceSec"
      className="w-screen min-h-screen bg-[#090a21] flex justify-center items-center px-4 py-10 pt-[90px]"
      >
      <div className="w-[90%] max-w-7xl flex flex-col lg:flex-row justify-between items-center border
      border-slate-700 border-dashed rounded-2xl text-white gap-10 p-10">
        
        <div className="w-full lg:w-1/3 service-text">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">
            Barter Media Services
          </h1>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mt-4">
            The rewriting of business rules in the past few decades has forced
            businesses to evolve and innovate.
          </p>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mt-3">
            Barterclan envisions to facilitate this evolution by helping
            businesses maximize the benefits of their spending on media by
            providing these solutions in barter.
          </p>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#062644] text-white hover:bg-slate-200 hover:text-[#090a21] rounded-lg p-6 hover:scale-105 duration-300 ease-in-out service-box">
            <i className="ri-tv-line text-[37px]"></i>
            <h3 className=" text-lg font-medium text-yellow-400">Television</h3>
            <p className="text-sm mt-1 leading-relaxed">
              Pan India Barter 2 Barter, exchange of media into products. Spend
              less and create buzz in terms of Media Promotion & Branding. We
              provide Branding & Promotions in Barter.
            </p>
          </div>

          <div className="bg-[#062644] text-white hover:bg-slate-200 hover:text-[#090a21] rounded-lg p-6 hover:scale-105 duration-300 ease-in-out service-box">
            <i className="ri-file-list-3-line text-[37px]"></i>
            <h3 className=" text-lg font-medium text-yellow-400">All News Channels</h3>
            <p className="text-sm mt-1 leading-relaxed">
              Pan India Barter 2 Barter, exchange of media into products. Spend
              less and create buzz in terms of Media Promotion & Branding. We
              provide Branding & Promotions in Barter.
            </p>
          </div>

          <div className="bg-[#062644] text-white hover:bg-slate-200 hover:text-[#090a21] rounded-lg p-6 hover:scale-105 duration-300 ease-in-out service-box">
            <i className="ri-clapperboard-ai-fill text-[37px]"></i>
            <h3 className=" text-lg font-medium text-yellow-400">
              All Entertainment Channels
            </h3>
            <p className="text-sm mt-1 leading-relaxed">
              Pan India Barter 2 Barter, exchange of media into products. Spend
              less and create buzz in terms of Media Promotion & Branding. We
              provide Branding & Promotions in Barter.
            </p>
          </div>

          <div className="bg-[#062644] text-white hover:bg-slate-200 hover:text-[#090a21] rounded-lg p-6 hover:scale-110 duration-300 ease-in-out service-box">
            <i className="ri-movie-2-line text-[37px] "></i>
            <h3 className=" text-lg font-medium text-yellow-400">
              All Movie / Music / Sports Channels
            </h3>
            <p className="text-sm mt-1 leading-relaxed">
              Pan India Barter 2 Barter, exchange of media into products. Spend
              less and create buzz in terms of Media Promotion & Branding. We
              provide Branding & Promotions in Barter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
