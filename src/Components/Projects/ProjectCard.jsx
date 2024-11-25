import ReactDOM from 'react-dom'
import { createPortal, createRoot } from 'react-dom/client';
import React, { useState, useEffect } from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
import Popups from '../Popups/WorkZonePopup';

const ProjectCard = ({ title, main }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupParagraph, setPopupParagraph] = useState('');

  // Close popup on pressing 'Escape'
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsPopupOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleButtonClick = () => {
    setPopupParagraph("WorkZone is a Case and Document managing additional Add-On added to MS -365.Workzone is initially a Denmark Government Project running from last 25+ years and serving different services and playing an important role in their technical ecosystem. Now, WorkZone has again been re-engineered with new technologies using React JS, Redux-SAGA, Fluent-UI which previously was in .NET and C#. It’s Add-on feature on MS-365 and Microsoft Products that enables END- USER to use WZ Add-ins. Using Microsoft products like - Office, Word, Teams, Meeting and Mails user can create a Case (contains metadata information about the case user or author). And can then also add different document depending on different conditions (more specific describing case). And as it is closely coupled with MS-365 so we can use different MS-365 products for different uses. (i.e.- Office for creating Case and attaching documents to it then Callender to highlight dates and Email for communication). It is also automated means after a case is created and filed then it automatically sends notifications to recipient.");
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
     <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
    {/* <div className="p-3 md:p-6 flex flex-col w-90 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl"> */}
      <img className="p-4" src={bannerImg} alt="Project banner" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button className="md:flex flex-wrap flex-col md:flex-row items-center"
          onClick={handleButtonClick}>
          More
        </button>
        {isPopupOpen && ReactDOM.createPortal(
          <Popups onClose={handleClosePopup} paragraph={popupParagraph} />,
          document.getElementById('popup-root')
        )}
        {/* <button className="mmd:flex flex-wrap flex-col md:flex-row items-center">
          Source Code
        </button> */}
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<ProjectCard title="Project Title" main="Project description goes here." />);

export default ProjectCard;
