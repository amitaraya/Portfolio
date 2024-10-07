import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="WorkZone"
          main="WorkZone is a Case and Document managing additional Add-On added to MS -365.Workzone is initially a Denmark Government Project running from last 25+ years and serving different services and playing an important role in their technical ecosystem. Now, WorkZone has again been re-engineered with new technologies using React JS, Redux-SAGA, Fluent-UI which previously was in .NET and C#. "
        />
        {/* <ProjectCard
          title="Youtue Clone"
          main="this is a bloggin website created in next js and used some component library used some component library"
        />
        <ProjectCard
          title="Netflix Clone"
          main="WorkZone is a Case and Document managing additional Add-On added to MS -365.Workzone is initially a Denmark Government Project running from last 25+ years and serving different services and playing an important role in their technical ecosystem. Now, WorkZone has again been re-engineered with new technologies using React JS, Redux-SAGA, Fluent-UI which previously was in .NET and C#. "
        /> */}
      </div>
    </div>
  );
};

export default Projects;
