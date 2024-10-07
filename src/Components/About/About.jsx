import React from "react";
import AboutImg from "../../assets/Technology-PNG-Clipart.png"
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
        <img className="h-200 w-200"  src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <p className="text-sm md:text-md leading-tight">
                Built and maintained responsive single-page applications (SPA) using React.js, improving user experience and reducing page load times by 30%.
              </p>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <p className="text-sm md:text-md leading-tight">
                Integrated RESTful APIs and handled asynchronous data flow using Axios and Fetch API.
              </p>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <p className="text-sm md:text-md leading-tight">
                Ensured cross-browser compatibility and responsive design for desktop and mobile users.
              </p>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <p className="text-sm md:text-md leading-tight">
                Utilized React hooks (useState, useEffect, useReducer) to manage component lifecycle and logic efficiently.
              </p>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <p className="text-sm md:text-md leading-tight">
                Conducted unit and integration testing using Jest and React Testing Library, improving codebase reliability.
              </p>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <p className="text-sm md:text-md leading-tight">
                Implemented state management solutions using Redux and React's built-in Context API to streamline data handling across the application.
              </p>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores explicabo deserunt asperiores quasi, vitae blanditiis
                  perferendis
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
