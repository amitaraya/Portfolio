import React from 'react';
import { IoArrowForward } from "react-icons/io5";

const WorkZonePopup = ({ onClose, paragraph }) => {
  return (
    <div className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <h2 className='bold underline'>WorkZone </h2>
      <p>{paragraph}</p>
      <br></br>
      <h4 className='bold underline italic'>Roles & Responsibilities: </h4>
      <ul>
        <li>
        <IoArrowForward size={30} className="mt-1" />Contributed to the development of dynamic, responsive web applications using React.js and JavaScript (ES6).
        </li>
        <li>
        <IoArrowForward size={30} className="mt-1" />Assisted in creating reusable React components, enhancing code modularity and consistency.
        </li>
        <li>
        <IoArrowForward size={30} className="mt-1" />Worked closely with UI/UX designers to translate design prototypes into fully functional web pages.
        </li>
        <li>
        <IoArrowForward size={30} className="mt-1" />Implement customizable templates, dynamic form inputs, and real-time previews, enabling users to create personalized and visually resumes.
        </li>
        <li>
        <IoArrowForward size={30} className="mt-1" />Worked on header modules and input modules. This type of modules using build with React.JS and state management using Redux. 
        </li>
        <li>
        <IoArrowForward size={30} className="mt-1" />Provide Content Controls for creating and managing cases and documents
        </li>
        <li>
        <IoArrowForward size={30} className="mt-1" />Providing status report on daily, Weekly basis to the client team.
        </li>
        <li>
        <IoArrowForward size={30} className="mt-1" />Understanding the business requirements & do relate POCs (if required).
        </li>
        <li>
        <IoArrowForward size={30} className="mt-1" />Assisting along with team in PI planning. Performing RAT testing.
        </li>
      </ul>
      <br />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default WorkZonePopup;