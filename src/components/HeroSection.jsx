import React from "react";
import profilePic from "../assets/raviKumarProfile.webp";
import { HERO_CONTENT } from "../constants";

const HeroSection = () => {
  return (
    <div className="flex flex-wrap lg:flex-row-reverse">
      <div className="w-full lg:w-1/2">
        <div className="flex justify-center lg:p-8">
          <img
            src={profilePic}
            alt="Sathvik Chilaka"
            className="border border-stone-900 rounded-3xl"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start mt-10">
          <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
            Sathvik Chilaka
          </h2>
          <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent text-3xl tracking-tight">
            Frontend Developer
          </span>
          <p className="my-2 max-w-lg py-6 text-xl leading-8 tracking-tighter">
            {" "}
            {HERO_CONTENT}{" "}
          </p>
          <a
            href="../../SathvikChilakaResume.pdf"
            rel="noopener noreferrer"
            target="_blank"
            download
            className="bg-white rounded-3xl p-4 text-sm text-stone-800 mb-10"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
