import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='w-screen h-auto md:h-[75vh] flex flex-col items-center pt-3 bg-slate-900 text-white'>
      <div className='w-[90%] h-auto md:h-[55vh] flex flex-col md:flex-row justify-between md:justify-around mt-4 gap-6 md:gap-0'>
        
        <div className='w-full md:w-[31%] h-auto md:h-[55vh]'>
          <h1 className='my-4 md:my-8 text-center text-lg md:text-xl font-bold'>QUICK LINKS</h1>
          <div className='flex flex-col gap-2 ml-6 md:ml-10 mt-4 md:mt-8 text-[15px] md:text-[16px] font-medium'>
            <Link to="/"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>Home</Link>
            <Link to="/services"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>Services</Link>
            <Link to="/about"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>About us</Link>
            <Link to="/barterMedia"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>Our Team</Link>
            <Link to="/barterProducts"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>Our Work</Link>
            <Link to="/media"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>Privacy Policy</Link>
          </div>
        </div>

        <div className='w-full md:w-[31%] h-auto md:h-[55vh]'>
          <h1 className='my-4 md:my-8 text-center text-lg md:text-xl font-bold'>MORE LINKS</h1>
          <div className='flex flex-col gap-2 ml-6 md:ml-10 mt-4 md:mt-8 text-[15px] md:text-[16px] font-medium'>
            <Link to="/"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>Our Clients</Link>
            <Link to="/services"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>Gallery</Link>
            <Link to="/about"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>Media/News</Link>
            <Link to="/barterMedia"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>CSR</Link>
            <Link to="/barterProducts"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>Contact Us</Link>
            <Link to="/media"><i className="ri-arrow-right-s-fill text-[18px] mr-[8px]"></i>Terms & Conditions</Link>
          </div>
        </div>

        <div className='w-full md:w-[31%] h-auto md:h-[55vh]'>
          <h1 className='my-4 md:my-8 text-center text-lg md:text-xl font-bold'>Contact Us</h1>
          <div className='flex flex-col gap-4 ml-6 md:ml-10 mt-4 md:mt-8 text-[15px] md:text-[16px] font-medium'>
            <Link to="/"><i className="ri-phone-fill text-[18px] mr-[8px]"></i>(+91)-8799746544</Link>
            <Link to="/services"><i className="ri-phone-fill text-[18px] mr-[8px]"></i>(+91)-8076151724</Link>
            <Link to="/about"><i className="ri-mail-fill text-[18px] mr-[8px]"></i>info@poojamoviecreations.com</Link>
            <Link to="/barterMedia"><i className="ri-map-pin-fill text-[18px] mr-[8px]"></i>www.poojamoviecreations.com</Link>
          </div>
        </div>

      </div>

      <hr className='w-[90%] my-2 text-slate-50' />

      <div className='w-[90%] h-auto md:h-[12vh] flex flex-col md:flex-row justify-around items-center gap-4 md:gap-0'>
        <h1 className='text-center md:text-left text-sm md:text-base'>
          Copyright 2008-2021 | All rights reserved | Pooja Movie Creations Group
        </h1>

        <div className='w-full md:w-[30%] flex justify-center md:justify-end gap-5 text-2xl'>
          <i className="ri-facebook-fill border-1 rounded-xl py-[8px] px-[12px]"></i>
          <i className="ri-twitter-x-line border-1 rounded-xl py-[8px] px-[12px]"></i>
          <i className="ri-instagram-line border-1 rounded-xl py-[8px] px-[12px]"></i>
          <i className="ri-youtube-fill border-1 rounded-xl py-[8px] px-[12px]"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
