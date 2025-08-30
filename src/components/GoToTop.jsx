import React from "react";
import "remixicon/fonts/remixicon.css";

const GoToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 
                 w-10 h-10 sm:w-12 sm:h-12 
                 bg-[#00034d] flex items-center justify-center 
                 rounded-full shadow-lg transition cursor-pointer"
    >
      <i className="ri-arrow-up-circle-line text-2xl sm:text-3xl text-white"></i>
    </button>
  );
};

export default GoToTop;
