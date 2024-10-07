import React from 'react';
// import ReactDOM from 'react-dom/client';

const Popups = ({ onClose, paragraph }) => {
  return (
    <div className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <h2 className='bold underline'>WorkZone </h2>
      <p>{paragraph}</p>
      <br></br>
      <h4 className='bold underline italic'>Roles & Responsibilities: </h4>
      <ul>

        <li>
          Contributed to the development of dynamic, responsive web applications using React.js and JavaScript (ES6).
        </li>
        <li>
          Assisted in creating reusable React components, enhancing code modularity and consistency.
        </li>
        <li>
          Worked closely with UI/UX designers to translate design prototypes into fully functional web pages.
        </li>
        <li>
        Implement customizable templates, dynamic form inputs, and real-time previews, enabling users to create personalized and visually resumes.
        </li>
        <li>
        Worked on header modules and input modules. This type of modules using build with React.JS and state management using Redux. 
        </li>
        <li>
        Provide Content Controls for creating and managing cases and documents
        </li>
        <li>
        Providing status report on daily, Weekly basis to the client team.
        </li>
        <li>
        Understanding the business requirements & do relate POCs (if required).
        </li>
        <li>
        Assisting along with team in PI planning. Performing RAT testing.
        </li>

      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Popups;