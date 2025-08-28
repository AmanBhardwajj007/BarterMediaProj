import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import g1 from "../gallery/g1.jpeg";
import g2 from "../gallery/g2.jpeg";
import g3 from "../gallery/g3.jpeg";
import g4 from "../gallery/g4.jpeg";
import f1 from "../gallery/f1.jpeg";
import f2 from "../gallery/f2.jpeg";
import f3 from "../gallery/f3.jpeg";
import f4 from "../gallery/f4.jpeg";
import sev from "../gallery/7.jpeg";
import eight from "../gallery/8.jpeg";

import lg1 from "../gallery/lg1.jpeg";
import lg2 from "../gallery/lg2.jpeg";
import lg3 from "../gallery/lg3.jpeg";
import lg4 from "../gallery/lg4.jpeg";
import lg5 from "../gallery/lg5.jpeg";
import cc from "../gallery/cc.jpg"

const Gallery = () => {
  const images = [g2, g3, g4, f1, f2, f3, f4, sev, eight];
  const sliderImages = [lg1, lg2, lg3, lg4, lg5];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  const getVisibleImages = () => {
    const prev = (index - 1 + sliderImages.length) % sliderImages.length;
    const next = (index + 1) % sliderImages.length;
    return [prev, index, next];
  };

  return (
    <div className="w-screen h-auto pt-[80px]">
      <div
        className="relative w-screen h-[100vh] flex justify-center items-center pt-[10px] bg-cover bg-center"
        style={{ backgroundImage: `url(${g1})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold italic text-white">
            Captured Moments, Framed Forever..
          </h1>
          <p className="pt-4 text-base md:text-lg text-white">
            Step into our gallery where every image speaks louder than words —
            a vibrant collection <br /> of creativity, memories, and inspiration
            captured in frames.
          </p>
        </div>
      </div>

      <div className="relative w-screen min-h-screen bg-[#090a21] p-6 md:p-10">
        <div className="flex justify-center items-center gap-3 mb-10">
          <i className="ri-camera-ai-line text-4xl md:text-5xl text-white"></i>
          <h1 className="text-3xl md:text-xl sm:text-xl lg:text-4xl uppercase underline underline-offset-6 font-semibold text-white">
            Our Photo Gallery
          </h1>
        </div>

        <div className="w-full border border-slate-700 border-dashed rounded-2xl p-4 md:p-6 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="w-full h-[220px] sm:h-[260px] md:h-[300px] rounded-lg hover:scale-105 duration-500 shadow-lg
                z-20"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            ))}
          </div>

          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <hr className="absolute top-1/3 left-[4%] w-[92%] border-0 border-b border-dashed border-slate-700" />
            <hr className="absolute top-2/3 left-[4%] w-[92%] border-0 border-b border-dashed border-slate-700" />
            <hr className="absolute top-[5%] left-1/3 h-[90%] border-0 border-l border-dashed border-slate-700" />
            <hr className="absolute top-[5%] left-2/3 h-[90%] border-0 border-l border-dashed border-slate-700" />
          </div>
        </div>
      </div>

      {/* Card Slider */}
      <div className="relative w-screen h-[80vh] sm:h-[85vh] md:h-[90vh] flex justify-center items-center overflow-hidden"
      style={{
        backgroundImage: `url(${cc})`,
      }}
      >
        <div className="flex gap-3 sm:gap-6 items-center">
          {getVisibleImages().map((imgIdx, i) => (
            <motion.div
              key={imgIdx}
              className="w-[200px] h-[260px] sm:w-[260px] sm:h-[340px] md:w-[320px] md:h-[420px] rounded-2xl shadow-lg bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${sliderImages[imgIdx]})` }}
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

        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 p-2 sm:p-3 bg-white/20 rounded-full hover:bg-white/40 transition"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 p-2 sm:p-3 bg-white/20 rounded-full hover:bg-white/40 transition"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
