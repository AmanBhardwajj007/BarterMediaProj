import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import euroB from "../image/euroB.jpg"
import i1 from "../image/vivo_img.png"
import i2 from "../image/buzz_img.png"
import i3 from "../image/euro_img.jpg"
import i4 from "../image/vi-john_img.jpg"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mainpage = () => {

  const products = [
    {
      id: 1,
      title: "Vivo Phones",
      description: "Vivo latest phone.",
      image: i1,
      wants: "Standing Desk",
    },
    {
      id: 2,
      title: "Buzz Drink",
      description: "Buzz energy drink.",
      image: i2,
      wants: "Standing Desk",
    },
    {
      id: 3,
      title: "Namkeen",
      description: "Tasty Namkeen.",
      image: i3,
      wants: "Standing Desk",
    },
    {
      id: 4,
      title: "VI-JOHN",
      description: "Shaving Cream.",
      image: i4,
      wants: "Standing Desk",
    },
  ]

    // Animation 

    useEffect(() => {

    gsap.from(".hero-title", {
      y: -100,
      opacity: 0,
      duration: 2,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".hero-title",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(".hero-sub", {
      x: -300,
      opacity: 0,
      duration: 2.1,
      ease: "elastic.out(1, 0.8)",
      scrollTrigger: {
        trigger: ".hero-sub",
        start: "top 90%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(".card-title", {
      x: -300,
      opacity: 0,
      duration: 1.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".card-title",
        start: "top 90%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(".connect-section", {
      y: 80,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".connect-section",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

  }, []);

  return (
      <div className="w-screen h-auto">
        <div className="relative w-screen h-[90vh] md:h-[100vh] flex justify-center items-center"
            style={{
              backgroundImage: `url(${euroB})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="z-20 text-center px-4 sm:px-6 md:px-12">
            <h1 className="hero-title text-2xl sm:text-3xl md:text-5xl font-bold italic text-white leading-snug">
              Swap, Don't Shop - Barter Your Products
            </h1>
            <p className="hero-sub pt-3 sm:pt-4 text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed">
              Trade items you no longer need for something you actually want.
              List your product, set what<br className="hidden sm:block"/> you'd
              like in exchange & connect with people nearby for a smarter, sustainable swap.
            </p>

            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
              <button className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-[#090a21] font-semibold rounded-xl shadow-md hover:bg-gray-100 cursor-pointer transition">
                List Your Product
              </button>
              <button className="px-5 sm:px-6 py-2 sm:py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#090a21] cursor-pointer transition">
                Browse Trades
              </button>
            </div>
          </div>
        </div>


      
      {/* Card Section  */}
      <section className="w-full py-12 px-6 bg-[#090a21]">
      <h2 className="card-title text-3xl font-bold text-center text-white mb-8">
        Available for Barter
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden transition
                        hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.2),0_0_20px_5px_rgba(255,215,0,0.3)]"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-65 object-cover bg-center"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {product.description}
              </p>
              <p className="text-sm mt-2">
                <span className="font-medium text-gray-700">Looking for: </span>
                {product.wants}
              </p>
              <button className="mt-4 w-full px-4 py-2 bg-[#0a0c33] text-white rounded-xl font-medium hover:bg-[#0f1255] transition">
                Swap Now
              </button>
            </div>
          </div>
        ))}
      </div>

        {/* Connecting Section */}
      <div className="connect-section w-full bg-gradient-to-r from-[#181a57] to-[#0c0e36] py-10 md:py-12 flex flex-col md:flex-row 
        items-center md:items-start justify-between px-6 md:px-16 rounded-2xl shadow-lg mt-10 gap-6 md:gap-0">

        <div className="hero-sub text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
            Ready to Start Bartering?
          </h2>
          <p className="text-base sm:text-lg text-emerald-100 mt-2">
            Join our community today and exchange items with ease.
          </p>
        </div>

        <div className="flex flex-col md:mt-4 sm:flex-row gap-4">
          <Link
            to="/join"
            className="bg-white text-slate-600 font-semibold px-6 py-3 rounded-xl shadow hover:text-[#fff]
            hover:bg-[#ffffff1f] transition text-center"
          >
            Join Now
          </Link>
          <Link
            to="/list"
            className="bg-[#181a57] text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#13154e] transition text-center"
          >
            List Your Item    
          </Link>
        </div>
      </div>

    </section>
    </div>
  )
}

export default Mainpage