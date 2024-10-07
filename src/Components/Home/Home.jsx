import React from "react";
import avatarImg from "../../assets/2-2-technology-png-clipart-thumb.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          Software Developer with proficiency using React.js dedicated to build user-friendly web applications. With experience in JavaScript (ES6+), HTML, CSS3 and modern frontend technologies. Proven track record of delivering high-quality, responsive and scalable solutions. Writing a clean, maintainable code, optimizing performance and learning latest advancements in web development, consistently delivering impactful results in Frontend development with 3.5 years of experience.
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        {/* <img className="h-200 w-200" src={avatarImg} alt="" /> */}
      </div>
    </div>
  );
};

export default Home;
