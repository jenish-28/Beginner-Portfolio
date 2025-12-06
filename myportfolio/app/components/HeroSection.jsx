"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  // Function to handle the CV download action
  const handleDownloadCV = () => {
    // <<< IMPORTANT: REPLACE THIS WITH YOUR ACTUAL CV FILE URL
    const cvUrl =
      "https://drive.google.com/file/d/13paKuZtgwBAhlTtuH7wkzbQ0ad_VAHpK/view?usp=drive_link";

    // This creates a temporary anchor element to trigger the download
    const link = document.createElement("a");
    link.href = cvUrl;

    // This ensures the browser downloads the file instead of navigating to it.
    link.setAttribute("download", "Jenish_Proffesional_CV.pdf");

    // Append to the body, click it, and then remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl  lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              Hello, I'm Jenish Patel
            </span>
            <br />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I’m a Full-Stack Developer passionate about AI. I build scalable
            apps with Python, FastAPI, React, Next.js, SQL, and MongoDB.
          </p>
          <div>
            {/* <button className='px-2 py-2 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-400 text-black'>Hire Me</button> */}
            <button
              onClick={handleDownloadCV}
              className="px-2 py-2 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border mt-3 "
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5  ">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
            <Image
              src="/image/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
