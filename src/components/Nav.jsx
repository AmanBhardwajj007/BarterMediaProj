import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../logo.png'
import logo2 from '../logo2.png'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 570) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-screen h-[80px] fixed flex justify-center items-center z-50 transition-colors duration-500
    ${location.pathname === "/" && !isScrolled ? "backdrop-blur-2xl" : "bg-slate-900 shadow-lg"
      }`}
    >
      <div className="w-[85%] h-[60px] flex justify-between items-center">

        <div className="w-[10%] h-10 flex justify-center items-center text-2xl hover:scale-110 duration-150 font-semibold">
          <a href="/">
            <img
              className="h-full w-auto object-contain"
              src={logo2}
              alt="logo"
            />
          </a>
        </div>



        <div className="hidden md:flex w-[85%] items-center justify-end lg:text-[17px] pr-2">
          <div className="flex gap-6 cursor-pointer text-[#fff] font-medium">
            <Link className={`hover:text-[#cccccc] hover:translate-y-[-5px] hover:scale-110 duration-150 
            ${location.pathname === "/" ? "text-yellow-400 font-semibold" : ""}`} to="/">
              Home
            </Link>
            <Link className={`hover:text-[#cccccc] hover:translate-y-[-5px] hover:scale-110 duration-150 
            ${location.pathname === "/services" ? "text-yellow-400 font-semibold" : ""}`} to="/services">
              Services
            </Link>
            <Link className={`hover:text-[#cccccc] hover:translate-y-[-5px] hover:scale-110 duration-150 
            ${location.pathname === "/about" ? "text-yellow-400 font-semibold" : ""}`} to="/about">
              About us
            </Link>
            <Link className={`hover:text-[#cccccc] hover:translate-y-[-5px] hover:scale-110 duration-150 
            ${location.pathname === "/barterMedia" ? "text-yellow-400 font-semibold" : ""}`} to="/barterMedia">
              Barter Media
            </Link>
            <Link className={`hover:text-[#cccccc] hover:translate-y-[-5px] hover:scale-110 duration-150 
            ${location.pathname === "/barterProducts" ? "text-yellow-400 font-semibold" : ""}`} to="/barterProducts">
              Barter products
            </Link>
            <Link className={`hover:text-[#cccccc] hover:translate-y-[-5px] hover:scale-110 duration-150 
            ${location.pathname === "/media" ? "text-yellow-400 font-semibold" : ""}`} to="/media">
              Media
            </Link>
            <Link className={`hover:text-[#cccccc] hover:translate-y-[-5px] hover:scale-110 duration-150 
            ${location.pathname === "/gallery" ? "text-yellow-400 font-semibold" : ""}`} to="/gallery">
              Gallery
            </Link>
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
        <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
        <Link onClick={() => setIsOpen(false)} to="/services">Services</Link>
        <Link onClick={() => setIsOpen(false)} to="/about">About us</Link>
        <Link onClick={() => setIsOpen(false)} to="/barterMedia">Barter Media</Link>
        <Link onClick={() => setIsOpen(false)} to="/barterProducts">Barter products</Link>
        <Link onClick={() => setIsOpen(false)} to="/media">Media</Link>
        <Link onClick={() => setIsOpen(false)} to="/gallery">Gallery</Link>
      </div>
    </nav>
  );
};

export default Nav;
