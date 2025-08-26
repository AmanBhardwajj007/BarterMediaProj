import React from "react";
import "remixicon/fonts/remixicon.css";

const Mainpage = () => {
  return (
    <div
      id="serviceSec"
      className="w-screen min-h-screen bg-[#090a21] flex justify-center items-center px-4 py-10"
    >
      <div className="w-[80%] max-w-7xl flex flex-col lg:flex-row justify-between items-center text-white gap-10">
        
        <div className="w-full lg:w-1/3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Barter Media Services
          </h1>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mt-4">
            The rewriting of business rules in the past few decades has forced
            businesses to evolve and innovate.
          </p>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mt-3">
            Barterclan envisions to facilitate this evolution by helping
            businesses maximize the benefits of their spending on media by
            providing these solutions in barter.
          </p>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#062644] rounded-lg p-6 hover:scale-105 duration-300 ease-in-out">
            <i className="ri-tv-line text-3xl"></i>
            <h3 className="pt-2 text-lg font-medium">Television</h3>
            <p className="text-sm mt-1 leading-relaxed">
              Pan India Barter 2 Barter, exchange of media into products. Spend
              less and create buzz in terms of Media Promotion & Branding. We
              provide Branding & Promotions in Barter.
            </p>
          </div>

          <div className="bg-[#062644] rounded-lg p-6 hover:scale-105 duration-300 ease-in-out">
            <i className="ri-file-list-3-line text-3xl"></i>
            <h3 className="pt-2 text-lg font-medium">All News Channels</h3>
            <p className="text-sm mt-1 leading-relaxed">
              Pan India Barter 2 Barter, exchange of media into products. Spend
              less and create buzz in terms of Media Promotion & Branding. We
              provide Branding & Promotions in Barter.
            </p>
          </div>

          <div className="bg-[#062644] rounded-lg p-6 hover:scale-105 duration-300 ease-in-out">
            <i className="ri-clapperboard-ai-fill text-3xl"></i>
            <h3 className="pt-2 text-lg font-medium">
              All Entertainment Channels
            </h3>
            <p className="text-sm mt-1 leading-relaxed">
              Pan India Barter 2 Barter, exchange of media into products. Spend
              less and create buzz in terms of Media Promotion & Branding. We
              provide Branding & Promotions in Barter.
            </p>
          </div>

          <div className="bg-[#062644] rounded-lg p-6 hover:scale-105 duration-300 ease-in-out">
            <i className="ri-movie-2-line text-3xl"></i>
            <h3 className="pt-2 text-lg font-medium">
              All Movie / Music / Sports Channels
            </h3>
            <p className="text-sm mt-1 leading-relaxed">
              Pan India Barter 2 Barter, exchange of media into products. Spend
              less and create buzz in terms of Media Promotion & Branding. We
              provide Branding & Promotions in Barter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
