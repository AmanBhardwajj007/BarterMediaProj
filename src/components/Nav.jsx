import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-screen bg-[#ff4444] shadow-lg h-[80px] fixed flex justify-center items-center z-50">
      <div className="w-[85%] h-[60px] flex justify-between items-center">
        
        <div className="w-[10%] flex justify-center items-center text-2xl font-semibold">
          <a href="/">
            <h2 className="hover:text-[#74c0df] text-[#fff]">LOGO</h2>
          </a>
        </div>

        
        <div className="hidden md:flex w-[85%] items-center justify-end lg:text-[17px] pr-2">
          <div className="flex gap-6 cursor-pointer text-[#fff] font-medium">
            <Link className="hover:text-[#74c0df]" to="/">Home</Link>
            <Link className="hover:text-[#74c0df]" to="/services">Services</Link>
            <Link className="hover:text-[#74c0df]" to="/about">About us</Link>
            <Link className="hover:text-[#74c0df]" to="/barterMedia">Barter Media</Link>
            <Link className="hover:text-[#74c0df]" to="/barterProducts">Barter products</Link>
            <Link className="hover:text-[#74c0df]" to="/media">Media</Link>
            <Link className="hover:text-[#74c0df]" to="/gallery">Gallery</Link>
          </div>
        </div>

        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none transition-all duration-300"
          >
            {isOpen ? (
              <i className="ri-close-large-line text-white text-2xl"></i>
            ) : (
              <i className="ri-menu-line text-white text-2xl"></i>
            )}
          </button>
        </div>
      </div>

      
      <div
        className={`absolute top-[80px] left-0 w-full bg-[#ff4444] flex flex-col items-center gap-6 text-white font-medium md:hidden 
        transition-all duration-500 ease-in-out overflow-hidden 
        ${isOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"}`}
      >
        <Link onClick={() => setIsOpen(false)} className="hover:text-[#74c0df]" to="/">Home</Link>
        <Link onClick={() => setIsOpen(false)} className="hover:text-[#74c0df]" to="/services">Services</Link>
        <Link onClick={() => setIsOpen(false)} className="hover:text-[#74c0df]" to="/about">About us</Link>
        <Link onClick={() => setIsOpen(false)} className="hover:text-[#74c0df]" to="/barterMedia">Barter Media</Link>
        <Link onClick={() => setIsOpen(false)} className="hover:text-[#74c0df]" to="/barterProducts">Barter products</Link>
        <Link onClick={() => setIsOpen(false)} className="hover:text-[#74c0df]" to="/media">Media</Link>
        <Link onClick={() => setIsOpen(false)} className="hover:text-[#74c0df]" to="/gallery">Gallery</Link>
      </div>
    </nav>
  );
};

export default Nav;
