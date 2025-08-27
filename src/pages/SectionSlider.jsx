import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import news1 from "../image/news1.jpg"
import news2 from "../image/news2.jpg"
import ii1 from "../image/ii1.jpeg"
import ii2 from "../image/ii2.jpg"
import kbc1 from "../image/kbc1.jpg"
import kbc2 from "../image/kbc2.jpg"

const sections = [
  {
    id: 1,
    content: (
      <div className="relative w-screen h-[100vh] flex justify-center items-center bg-[url('./news.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-white/50"></div>

        <div className="relative w-[90%] h-[85vh] mt-10 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 lg:gap-16 z-20 py-6">
          
          {/* Text Box */}
          <div className="w-full md:w-[40%] h-auto flex flex-col justify-center backdrop-blur-2xl p-6 rounded-lg">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Best advertising in Top news channels
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Reach millions with impact! Advertising on top news channels builds
              unmatched credibility, grabs attention instantly, and ensures your
              brand stays in the spotlight where trust and influence matter most.
              Be seen where leaders, decision-makers, and trendsetters watch daily!
            </p>
          </div>

          {/* Images */}
          <div className="w-full md:w-[55%] flex flex-col justify-center items-center gap-5 h-full">
            <div
              className="w-full sm:w-[80%] md:w-[90%] flex-1 rounded-tl-2xl rounded-br-2xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  `url(${news1})`,
              }}
            />
            <div
              className="hidden md:block w-full sm:w-[80%] md:w-[90%] flex-1 rounded-tl-2xl rounded-br-2xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  `url(${news2})`,
              }}
            />
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 2,
    content: (
      <div className="relative w-screen h-[100vh] flex justify-center items-center bg-[url('./sing.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-white/50"></div>

        <div className="relative w-[90%] h-[85vh] mt-10 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 lg:gap-16 z-20 py-6">
          
          

          {/* Images */}
          <div className="w-full md:w-[55%] flex flex-col justify-center items-center gap-5 h-full">
            <div
              className="w-full sm:w-[80%] md:w-[90%] flex-1 rounded-tl-2xl rounded-br-2xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  `url(${ii1})`,
              }}
            />
            <div
              className="hidden md:block w-full sm:w-[80%] md:w-[90%] flex-1 rounded-tl-2xl rounded-br-2xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  `url(${ii2})`,
              }}
            />
          </div>

          {/* Text Box */}
          <div className="w-full md:w-[40%] h-auto flex flex-col justify-center backdrop-blur-2xl p-6 rounded-lg">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Best advertising in Indian Idol
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Advertising in Indian Idol connects your brand with millions of
              passionate viewers, creating unforgettable impact. It’s more than
              promotion—it’s inspiration, emotion, and visibility on India’s biggest
              stage. Be seen, be remembered!
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 3,
    content: (
      <div className="relative w-screen h-[100vh] flex justify-center items-center bg-[url('./kbc.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-white/50"></div>

        <div className="relative w-[90%] h-[85vh] mt-10 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 lg:gap-16 z-20 py-6">
          
          <div className="w-full md:w-[40%] h-auto flex flex-col justify-center backdrop-blur-2xl p-6 rounded-lg">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Best advertising in Kaun Banega Crorepati
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Advertising in KBC is not just promotion—it’s inspiration. Your brand
              becomes part of a journey where dreams meet opportunity, reaching
              millions with hope, trust, and motivation to aim higher.
            </p>
          </div>

          <div className="w-full md:w-[55%] flex flex-col justify-center items-center gap-5 h-full">
            <div
              className="w-full sm:w-[80%] md:w-[90%] flex-1 rounded-tl-2xl rounded-br-2xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  `url(${kbc1})`,
              }}
            />
            <div
              className="hidden md:block w-full sm:w-[80%] md:w-[90%] flex-1 rounded-tl-2xl rounded-br-2xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  `url(${kbc2})`,
              }}
            />
          </div>
        </div>
      </div>
    ),
  },
];

const SectionSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sections.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % sections.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + sections.length) % sections.length);

  return (
    <div className="relative w-screen h-[100vh] max-w-[100%] mx-auto overflow-hidden">
      
      <AnimatePresence mode="sync">
  <motion.div
    key={sections[index].id}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 1 }}
    className="absolute top-0 left-0 w-full h-full"
  >
    {sections[index].content}
  </motion.div>
</AnimatePresence>


      {/* Prev/Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 md:left-8 -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-100 z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 md:right-5 -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-100 z-20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 cursor-pointer">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionSlider;
