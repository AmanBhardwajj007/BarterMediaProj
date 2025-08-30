import React, { useEffect } from 'react'
import news1 from "../image/news1.jpg"
import news2 from "../image/news2.jpg"
import ii1 from "../image/ii1.jpeg"
import ii2 from "../image/ii2.jpg"
import kbc1 from "../image/kbc1.jpg"
import kbc2 from "../image/kbc2.jpg"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BarterMedia = () => {

    // gSap Animation 

  useEffect(() => {
    gsap.from(".news-title", {
      x: -400,
      opacity: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".news-title",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(".news-p", {
      x: 400,
      opacity: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".news-p",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(".idol-title", {
      x: -250,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".idol-title",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(".idol-p", {
      x: 250,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".idol-p",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(".kbc-title", {
      x: -300,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".kbc-title",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(".kbc-p", {
      x: 300,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".kbc-p",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });
  });

  return (
    <div className="w-screen h-auto flex flex-col items-center pt-[80px]">
      
      <div className="relative w-screen h-auto md:h-[110vh] lg:h-[95vh] flex justify-center bg-[url('./news.jpg')] overflow-hidden bg-cover bg-center">
        <div className="absolute inset-0 bg-white/50"></div>

        <div className="w-[90%] h-auto lg:h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between pt-6 z-20">
          
          <div className="w-full md:w-[38%] h-auto md:h-[70vh] mb-6 md:mb-0 flex flex-col justify-center backdrop-blur-2xl p-6 rounded-lg">
            <h2 className="news-title text-white text-xl md:text-3xl font-bold mb-5">
              Best advertising in Top news channels
            </h2>
            <p className="news-p text-white text-base md:text-[17px] leading-relaxed">
              Reach millions with impact! Advertising on top news channels builds unmatched credibility,
              grabs attention instantly, and ensures your brand stays in the spotlight where trust and
              influence matter most. Be seen where leaders, decision-makers, and trendsetters watch daily!
            </p>
          </div>

          <div className="w-full md:w-[55%] flex flex-col justify-center items-center gap-6">
            <div className="w-full h-[200px] md:w-[40vw] md:h-[38vh] rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] bg-cover bg-center"
            style={{
                    backgroundImage:
                    `url(${news1})`,
                  }}
            ></div>
            <div className="w-full h-[200px] md:w-[40vw] md:h-[38vh] rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] bg-cover bg-center"
            style={{
                    backgroundImage:
                    `url(${news2})`,
                  }}
            ></div>
          </div>
        </div>
      </div>

      <div className="relative w-screen h-auto md:h-[110vh] lg:h-[95vh] flex justify-center bg-[url('./sing.jpg')] overflow-hidden bg-cover bg-center">
        <div className="absolute inset-0 bg-white/50"></div>

        <div className="w-[90%] h-auto lg:h-[90vh] flex flex-col md:flex-row items-center justify-between pt-6 z-20">
         
          <div className="w-full md:w-[55%] flex flex-col justify-center items-center gap-6">
            <div className="w-full h-[200px] md:w-[40vw] md:h-[38vh] rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] bg-cover bg-center"
            style={{
                    backgroundImage:
                    `url(${ii1})`,
                  }}
            ></div>
            <div className="w-full h-[200px] md:w-[40vw] md:h-[38vh] rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] bg-cover bg-center"
            style={{
                    backgroundImage:
                    `url(${ii2})`,
                  }}
            ></div>
          </div>

          
          <div className="w-full md:w-[38%] h-auto md:h-[70vh] mt-6 md:mt-0 flex flex-col justify-center backdrop-blur-2xl p-6 rounded-lg">
            <h2 className="idol-title text-white text-xl md:text-3xl font-bold mb-5">Best advertising in Indian Idol</h2>
            <p className="idol-p text-white text-base md:text-[17px] leading-relaxed">
              Advertising in Indian Idol connects your brand with millions of passionate viewers, creating unforgettable impact. 
              It's more than promotion—it's inspiration, emotion, and visibility on India’s biggest stage. Be seen, be remembered!
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-screen h-auto md:h-[110vh] lg:h-[95vh] flex justify-center bg-[url('./kbc.jpg')] overflow-hidden bg-cover bg-center">
        <div className="absolute inset-0 bg-white/50"></div>

        <div className="w-[90%] h-auto lg:h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between pt-6 z-20">
          
          <div className="w-full md:w-[38%] h-auto md:h-[70vh] mb-6 md:mb-0 flex flex-col justify-center backdrop-blur-2xl p-6 rounded-lg">
            <h2 className="kbc-title text-white text-xl md:text-3xl font-bold mb-5">Best advertising in Kaun Banega Crorepati</h2>
            <p className="kbc-p text-white text-base md:text-[17px] leading-relaxed">
              Advertising in Kaun Banega Crorepati is not just promotion—it's inspiration. 
              Your brand becomes part of a journey where dreams meet opportunity, reaching millions with hope, trust, and motivation to aim higher.
            </p>
          </div>

          
          <div className="w-full md:w-[55%] flex flex-col justify-center items-center gap-6">
            <div className="w-full h-[200px] md:w-[40vw] md:h-[38vh] rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] bg-cover bg-center"
            style={{
                    backgroundImage:
                    `url(${kbc1})`,
                  }}
            ></div>
            <div className="w-full h-[200px] md:w-[40vw] md:h-[38vh] rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] bg-cover bg-center"
            style={{
                    backgroundImage:
                    `url(${kbc2})`,
                  }}
            ></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BarterMedia
