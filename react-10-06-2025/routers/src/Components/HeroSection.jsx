import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#020202] flex flex-col justify-center items-center text-white px-6 pt-28">
      {/* Big heading */}
      <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-light leading-[1.2] text-center max-w-4xl">
        We only{" "}
        <span className="text-[#3ef0c9] font-semibold">teach</span>{" "}
        what we are really really{" "}
        <em className="italic font-light text-white">good</em> at.
      </h1>

      {/* Sub text */}
      <p className="text-gray-400 max-w-md text-center mt-6 text-base md:text-lg leading-relaxed">
        Get ready to accelerate your{" "}
        <span className="text-[#3ef0c9]">career</span> with customized courses
        and leave your mark in the tech industry.
      </p>

      {/* Button */}
      <button className="mt-10 bg-[#3ef0c9] hover:bg-[#2ed4af] text-black px-8 py-3 rounded-md text-lg font-semibold transition duration-300">
        Check Courses – Make an Impact
      </button>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-12 mt-20 text-gray-300">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">25k+</h2>
          <p className="text-sm mt-1">Students taught</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">20+</h2>
          <p className="text-sm mt-1">Instructors</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">587K+</h2>
          <p className="text-sm mt-1">YouTube Subs.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
