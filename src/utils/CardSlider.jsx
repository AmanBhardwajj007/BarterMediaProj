import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import lg1 from "../gallery/lg1.jpeg";
import lg2 from "../gallery/lg2.jpeg";
import lg3 from "../gallery/lg3.jpeg";
import lg4 from "../gallery/lg4.jpeg";
import lg5 from "../gallery/lg5.jpeg";

const images = [lg1, lg2, lg3, lg4, lg5];

const CardSlider = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    const prev = (index - 1 + images.length) % images.length;
    const next = (index + 1) % images.length;
    return [prev, index, next];
  };

  return (
    <div className="relative w-screen h-[80vh] sm:h-[85vh] md:h-[90vh] flex justify-center items-center bg-[#090a21] overflow-hidden">
      {/* Slider */}
      <div className="flex gap-3 sm:gap-6 items-center">
        {getVisibleImages().map((imgIdx, i) => (
          <motion.div
            key={imgIdx}
            className="w-[220px] h-[300px] sm:w-[280px] sm:h-[370px] md:w-[320px] md:h-[420px] rounded-2xl shadow-lg bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${images[imgIdx]})` }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            whileHover={{ scale: 1.1 }}
            animate={{
              scale: i === 1 ? 1.1 : 0.9,
              opacity: i === 1 ? 1 : 0.7,
            }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 md:left-18 p-2 sm:p-3 bg-white/20 rounded-full hover:bg-white/40 transition"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 md:right-18 p-2 sm:p-3 bg-white/20 rounded-full hover:bg-white/40 transition"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
    </div>
  );
};

export default CardSlider;
