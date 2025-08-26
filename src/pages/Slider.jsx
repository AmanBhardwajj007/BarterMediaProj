import React, { useState, useEffect } from "react";

const images = [
  "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/10/901444-thekapilsharmashow-online.jpg",
  "https://www.exopicmedia.com/wp-content/uploads/2021/02/How_much_does_it_cost_for_an_advertisement_on_Aaj-Tak_TV-Channel.jpeg",
  "https://data1.ibtimes.co.in/en/full/719556/kapil-sharma-show.png?w=899&h=436&l=50&t=40",
  "https://5.imimg.com/data5/SELLER/Default/2024/6/424594175/OO/QJ/ZB/3849022/promotional-advertisement-on-aaj-tak.jpg",
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative w-screen h-[80vh] overflow-hidden">
      
      <div className="flex transition-transform duration-700 ease-in-out"
           style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full h-[80vh] object-cover flex-shrink-0"
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-10 -translate-y-1/2 bg-black/10 text-white p-3 rounded-full 
        hover:bg-black/40">
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-10 -translate-y-1/2 bg-black/10 text-white p-3 rounded-full
        hover:bg-black/40">
        ❯
      </button>
      
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-8 h-[3.2px] rounded-[1px] cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;  