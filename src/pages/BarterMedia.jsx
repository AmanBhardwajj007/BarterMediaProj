import React from 'react'

const BarterMedia = () => {
  return (
    <div className="w-screen h-auto flex flex-col items-center">
      
      <div className="relative w-screen h-auto md:h-[110vh] lg:h-[95vh] flex justify-center bg-[url('./news.jpg')] overflow-hidden bg-cover bg-center">
        <div className="absolute inset-0 bg-white/50"></div>

        <div className="w-[90%] h-auto lg:h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between pt-6 z-20">
          
          <div className="w-full md:w-[38%] h-auto md:h-[70vh] mb-6 md:mb-0 flex flex-col justify-center backdrop-blur-2xl p-6 rounded-lg">
            <h2 className="text-white text-xl md:text-3xl font-bold mb-5">
              Best advertising in Top news channels
            </h2>
            <p className="text-white text-base md:text-[17px] leading-relaxed">
              Reach millions with impact! Advertising on top news channels builds unmatched credibility,
              grabs attention instantly, and ensures your brand stays in the spotlight where trust and
              influence matter most. Be seen where leaders, decision-makers, and trendsetters watch daily!
            </p>
          </div>

          <div className="w-full md:w-[55%] flex flex-col justify-center items-center gap-6">
            <div className="w-full h-[200px] md:w-[40vw] md:h-[38vh] rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapydomCWPRUWoiht_VS1DJgChwDdX63VJTw&s')] bg-cover bg-center"></div>
            <div className="w-full h-[200px] md:w-[40vw] md:h-[38vh] rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] bg-[url('https://i.pinimg.com/736x/a8/06/91/a80691fc761bd313477e3f50254f2a63.jpg')] bg-cover bg-center"></div>
          </div>
        </div>
      </div>

      <div className="relative w-screen h-auto md:h-[110vh] lg:h-[95vh] flex justify-center bg-[url('./sing.jpg')] overflow-hidden bg-cover bg-center">
        <div className="absolute inset-0 bg-white/50"></div>

        <div className="w-[90%] h-auto lg:h-[90vh] flex flex-col md:flex-row items-center justify-between pt-6 z-20">
         
          <div className="w-full md:w-[55%] flex flex-col justify-center items-center gap-6">
            <div className="w-full h-[200px] md:w-[40vw] md:h-[38vh] rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] bg-[url('https://xstreamcp-assets-msp.streamready.in/assets/SONYLIV_VOD/SERIES/6485c05282488153bfe42a52/images/LANDSCAPE_169/1740472398393_IndianIdol2024-25_10_Landscape_Thumb.jpg')] bg-cover bg-center"></div>
            <div className="w-full h-[200px] md:w-[40vw] md:h-[38vh] rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] bg-[url('https://i.imgur.com/g0SjmKq.png')] bg-cover bg-center"></div>
          </div>

          
          <div className="w-full md:w-[38%] h-auto md:h-[70vh] mt-6 md:mt-0 flex flex-col justify-center backdrop-blur-2xl p-6 rounded-lg">
            <h2 className="text-white text-xl md:text-3xl font-bold mb-5">Best advertising in Indian Idol</h2>
            <p className="text-white text-base md:text-[17px] leading-relaxed">
              Advertising in Indian Idol connects your brand with millions of passionate viewers, creating unforgettable impact. 
              It’s more than promotion—it’s inspiration, emotion, and visibility on India’s biggest stage. Be seen, be remembered!
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-screen h-auto md:h-[110vh] lg:h-[95vh] flex justify-center bg-[url('./kbc.jpg')] overflow-hidden bg-cover bg-center">
        <div className="absolute inset-0 bg-white/50"></div>

        <div className="w-[90%] h-auto lg:h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between pt-6 z-20">
          
          <div className="w-full md:w-[38%] h-auto md:h-[70vh] mb-6 md:mb-0 flex flex-col justify-center backdrop-blur-2xl p-6 rounded-lg">
            <h2 className="text-white text-xl md:text-3xl font-bold mb-5">Best advertising in Kaun Banega Crorepati</h2>
            <p className="text-white text-base md:text-[17px] leading-relaxed">
              Advertising in Kaun Banega Crorepati is not just promotion—it’s inspiration. 
              Your brand becomes part of a journey where dreams meet opportunity, reaching millions with hope, trust, and motivation to aim higher.
            </p>
          </div>

          
          <div className="w-full md:w-[55%] flex flex-col justify-center items-center gap-6">
            <div className="w-full h-[200px] md:w-[40vw] md:h-[38vh] rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] bg-[url('https://images.livemint.com/img/2022/07/20/1600x900/Kaun-Banega-Crorepati-1_1657603983822_1658342663499_1658342663499.webp')] bg-cover bg-center"></div>
            <div className="w-full h-[200px] md:w-[40vw] md:h-[38vh] rounded-tl-[30px] md:rounded-tl-[50px] rounded-br-[30px] md:rounded-br-[50px] bg-[url('https://www.koimoi.com/wp-content/new-galleries/2022/09/big-b-reminisces-about-his-childhood-days-with-tales-of-cricket-01.jpg')] bg-cover bg-center"></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BarterMedia
