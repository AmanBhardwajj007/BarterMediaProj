import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactUs from '../components/ContactUs';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  const [showContactUs, setShowContactUs] = useState(false);

    useEffect(() => {
      if (showContactUs) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    }, [showContactUs]);

    useEffect(() => {
      gsap.from(".title-link",{
        y: -200,              
        opacity: 0,
        duration: 0.9,
        ease: "bounce.out",   
        stagger: 0.2,         
        scrollTrigger: {
          trigger: ".title-link",
          start: "top 85%",   
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, [])

  return (
    <div className='w-screen h-auto md:h-[75vh] flex flex-col items-center pt-3 bg-slate-900 text-white pb-6 md:pb-0'>
      <div className='w-[90%] h-auto md:h-[55vh] flex flex-col md:flex-row justify-between md:justify-around mt-4 gap-6 md:gap-0'>

        <div className='w-full md:w-[31%] h-auto md:h-[55vh]'>
          <h1 className='title-link my-4 md:my-8 text-center text-lg md:text-xl font-bold '>QUICK LINKS</h1>
          <div className="flex items-center justify-center relative -mt-[2.7vh] md:-mt-[4.5vh] sm:-mt-[2.5vh]">
            <div className="h-0.5 w-20 sm:w-20 md:w-24 lg:w-24 bg-yellow-400"></div>
          </div>

          <div className='flex flex-col gap-2 ml-6 md:ml-10 mt-4 md:mt-8 text-[15px] md:text-[16px] font-medium'>
            <Link className='inline-block transform transition duration-300 ease-in-out hover:translate-x-[10px]
            hover:text-[#cccccc]' to="/"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px] "></i>Home</Link>
            <Link className='inline-block transform transition duration-300 ease-in-out hover:translate-x-[10px]
            hover:text-[#cccccc]' to="/services"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px] "></i>Services</Link>
            <Link className='inline-block transform transition duration-300 ease-in-out hover:translate-x-[10px]
            hover:text-[#cccccc]' to="/about"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px] "></i>About us</Link>
            <Link className='inline-block transform transition duration-300 ease-in-out hover:translate-x-[10px]
            hover:text-[#cccccc]' to="/barterMedia"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px] "></i>Our Team</Link>
            <Link className='inline-block transform transition duration-300 ease-in-out hover:translate-x-[10px]
            hover:text-[#cccccc]' to="/barterProducts"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px] "></i>Our Work</Link>
            <Link className='inline-block transform transition duration-300 ease-in-out hover:translate-x-[10px]
            hover:text-[#cccccc]' to="/media"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px] "></i>Privacy Policy</Link>
          </div>
        </div>

        <div className='w-full md:w-[31%] h-auto md:h-[55vh]'>
          <h1 className='title-link my-4 md:my-8 text-center text-lg md:text-xl font-bold'>MORE LINKS</h1>
          <div className="flex items-center justify-center relative -mt-[2.7vh] md:-mt-[4.5vh] sm:-mt-[2.5vh]">
            <div className="h-0.5 w-20 sm:w-20 md:w-24 lg:w-24 bg-yellow-400"></div>
          </div>
          <div className='flex flex-col gap-2 ml-6 md:ml-10 mt-4 md:mt-8 text-[15px] md:text-[16px] font-medium'>
            <Link className='inline-block transform transition duration-300 ease-in-out hover:translate-x-[10px]
            hover:text-[#cccccc]' to="/"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>Our Clients</Link>
            <Link className='inline-block transform transition duration-300 ease-in-out hover:translate-x-[10px]
            hover:text-[#cccccc]' to="/services"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>Gallery</Link>
            <Link className='inline-block transform transition duration-300 ease-in-out hover:translate-x-[10px]
            hover:text-[#cccccc]' to="/about"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>Media/News</Link>
            <Link className='inline-block transform transition duration-300 ease-in-out hover:translate-x-[10px]
            hover:text-[#cccccc]' to="/barterMedia"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>CSR</Link>
            <Link className='inline-block transform transition duration-300 ease-in-out hover:translate-x-[10px]
            hover:text-[#cccccc]' to="/barterProducts"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>Contact Us</Link>
            <Link className='inline-block transform transition duration-300 ease-in-out hover:translate-x-[10px]
            hover:text-[#cccccc]' to="/media"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>Terms & Conditions</Link>
          </div>
        </div>

        <div className='w-full md:w-[31%] h-auto md:h-[55vh]'>
          <h1 className='title-link my-4 md:my-8 text-center text-lg md:text-xl font-bold'>Contact Us</h1>
          <div className="flex items-center justify-center relative -mt-[2.7vh] md:-mt-[4.5vh] sm:-mt-[2.5vh]">
            <div className="h-0.5 w-20 sm:w-20 md:w-24 lg:w-24 bg-yellow-400"></div>
          </div>
          <div className='flex flex-col gap-4 ml-6 md:ml-10 mt-4 md:mt-8 text-[15px] md:text-[16px] font-medium'>
            <Link 
            onClick={() => setShowContactUs(true)}
            className='inline-block transform transition duration-300 ease-in-out hover:translate-x-[10px]
            hover:text-[#cccccc]' to="/"><i className="ri-phone-fill text-[18px] mr-[8px]"></i>(+91)-8799746544</Link>
            <Link 
            onClick={() => setShowContactUs(true)}
            className='inline-block transform transition duration-300 ease-in-out hover:translate-x-[10px]
            hover:text-[#cccccc]' to="/services"><i className="ri-phone-fill text-[18px] mr-[8px]"></i>(+91)-8076151724</Link>
            <Link 
            onClick={() => setShowContactUs(true)}
            className='inline-block transform transition duration-300 ease-in-out hover:translate-x-[10px]
            hover:text-[#cccccc]' to="/about"><i className="ri-mail-fill text-[18px] mr-[8px]"></i>info@poojamoviecreations.com</Link>
            <Link className='inline-block transform transition duration-300 ease-in-out hover:translate-x-[10px]
            hover:text-[#cccccc]' to="/barterMedia"><i className="ri-map-pin-fill text-[18px] mr-[8px]"></i>www.poojamoviecreations.com</Link>
          </div>
          
        </div>
        {showContactUs && <ContactUs onClose={() => setShowContactUs(false)} />}

      </div>

      <hr className='w-[90%] my-2 text-slate-50' />

      <div className='w-[90%] h-auto md:h-[12vh] xs:py-10 sm:py-5 md:py-5 flex flex-col md:flex-row justify-around items-center gap-4 md:gap-0'>
        <h1 className='text-center md:text-left text-sm md:text-base'>
          Copyright 2008-2021 | All rights reserved | Pooja Movie Creations Group
        </h1>

        <div className='w-full md:w-[30%] xs:py-20 sm:py-2 md:py-2 flex justify-center md:justify-end gap-4 text-2xl'>
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
          <i className="ri-facebook-fill border-1 rounded-xl p-[10px] 
          hover:bg-white hover:text-[#090a21] hover:border-none transition 
          hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.2),0_0_15px_3px_rgba(255,215,0,0.3)]"></i>
          </a>
          <a 
            href="https://www.twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
          <i className="ri-twitter-x-line border-1 rounded-xl p-[10px] 
          hover:bg-white hover:text-[#090a21] hover:border-none transition 
          hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.2),0_0_15px_3px_rgba(255,215,0,0.3)]"></i>
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
          <i className="ri-instagram-line border-1 rounded-xl p-[10px] 
          hover:bg-white hover:text-[#090a21] hover:border-none transition 
          hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.2),0_0_15px_3px_rgba(255,215,0,0.3)]"></i>
          </a>
          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
          <i className="ri-youtube-fill border-1 rounded-xl p-[10px] 
          hover:bg-white hover:text-[#090a21] hover:border-none transition 
          hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.2),0_0_15px_3px_rgba(255,215,0,0.3)]"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
