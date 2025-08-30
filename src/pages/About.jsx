import React, { useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Mainpage = () => {
  
    useEffect(() => {
      gsap.from(".main-title",{
        y: -90,
        opacity: 0,
        duration: 1,
        delay: .6,
        ease: "circ.out",
        scrollTrigger: {
        trigger: ".main-title",
        start: "top 80%",
        toggleActions: "play none none reset", 
        },
      });

      gsap.from(".brand-title",{
        x: -300,
        opacity: 0,
        duration: 1,
        delay: .5,
        ease: "circ.out",
        scrollTrigger: {
        trigger: ".brand-title",
        start: "top 80%",
        toggleActions: "play none none reset", 
        },
      });

      gsap.from(".brand-p",{
        x: 300,
        opacity: 0,
        duration: 1,
        delay: .5,
        ease: "circ.out",
        scrollTrigger: {
        trigger: ".brand-p",
        start: "top 80%",
        toggleActions: "play none none reset", 
        },
      });

      gsap.from(".scope-work",{
        x: 300,
        opacity: 0,
        duration: 1,
        delay: .4,
        ease: "bounce.out",
        scrollTrigger: {
        trigger: ".scope-work",
        start: "top 80%",
        toggleActions: "play none none reset", 
        },
      });
    }, []);

  return (
     <div className="w-screen bg-white"
      style={{
        paddingTop: location.pathname === "/about" ? "80px" : "0px",
      }}
    >
      <div className='relative w-screen h-40 sm:h-52 md:h-64 flex justify-center items-center bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1724627561948-3004cc467dc6?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="main-title z-40 text-2xl sm:text-3xl md:text-4xl font-medium text-white">
          What we Do
        </h1>
      </div>

      <div className="w-full flex justify-center mt-10 px-4">
        <div className="w-full md:w-[80%] flex flex-col justify-center items-center border-[2px] border-gray-600 rounded-md p-6 sm:p-8 md:p-11">
          <h1 className="brand-title text-lg sm:text-xl md:text-2xl font-semibold md:text-left">
            Connect India's No-1 Brand Promotion Company
          </h1>
          <p className="brand-p mt-3 text-sm sm:text-base md:text-lg leading-6 md:text-left">
            We are the brands makers we establish brands and help in their Brand
            Promotion. Our expert team makes CUSTOMIZE brandings and promotion
            opportunities for clients. We have more than 1800 active clients. In
            covid time we have made benchmarks in releasing maximum numbers of
            clients. We provide brandings as per client requirement and budget.
            We can do different-2 things like{" "}
            <b>
              Video Production, Short Films, Ad Film Making, Celebrity
              Endorsement, Ad film production, CSR Films
            </b>{" "}
            with the help of our No-1 <b>TV Broadcast Company.</b>
          </p>
        </div>
      </div>

      <div className='relative bg-cover bg-center w-full mt-10 flex justify-center items-center px-4 py-10 bg-[url("https://images.unsplash.com/photo-1575507479993-7bb702d5e966?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
        <div className="absolute inset-0 bg-white/60"></div>

        <div className="relative w-[90%] max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-8 z-40">
          
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden hover:scale-105 duration-300 ease-in-out">
              <img
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                src="https://poojamoviecreations.com/images/what/2.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg overflow-hidden hover:scale-105 duration-300 ease-in-out">
              <img
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                src="https://poojamoviecreations.com/images/what/3.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg overflow-hidden hover:scale-105 duration-300 ease-in-out">
              <img
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                src="https://poojamoviecreations.com/images/what/5.jpg"
                alt=""
              />
            </div>
            <div className="rounded-lg overflow-hidden hover:scale-105 duration-300 ease-in-out">
              <img
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                src="https://poojamoviecreations.com/images/what/4.jpg"
                alt=""
              />
            </div>
          </div>

          {/* Scope of Work */}
          <div className="scope-work w-full lg:w-1/3 backdrop-blur-sm p-6 rounded-md">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              SCOPE OF OUR WORK :
            </h1>
            <ul className="space-y-2 text-sm sm:text-base md:text-[17px]">
              <li>
                <i className="ri-arrow-drop-right-line"></i> Brand Development
              </li>
              <li>
                <i className="ri-arrow-drop-right-line"></i> New Brand
                Establishment Planning
              </li>
              <li>
                <i className="ri-arrow-drop-right-line"></i> New Product
                Launching Marketing <br /> &emsp; Planning
              </li>
              <li>
                <i className="ri-arrow-drop-right-line"></i> How to Increase
                Sales
              </li>
              <li>
                <i className="ri-arrow-drop-right-line"></i> How to Enhance Your
                Product in Market
              </li>
              <li>
                <i className="ri-arrow-drop-right-line"></i> How to Make Your
                Brand More Exclusive <br /> &emsp; in Market
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
