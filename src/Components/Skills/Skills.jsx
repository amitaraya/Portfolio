import React from "react";

const Skills = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Technical Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <p className="text-white"><b>Frontend Development:-</b> React Native, React.js, Next.js, JavaScript (ES6+), TypeScript</p>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <p className="text-white"><b>State Management:-</b> Redux, Context API</p>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <p className="text-white"><b>Mobile Development:-</b>  Android, iOS, Native Modules</p>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <p className="text-white"><b>UI Frameworks:-</b> Material Design, TailwindCSS, Styled Components</p>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <p className="text-white"><b>API Integration:-</b> RESTful APIs, GraphQL, Axios, Firebase</p>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <p className="text-white"><b>Tooling:-</b> Git, Jest, React Native Debugger, Expo, Xcode, Android Studio</p>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <p className="text-white"><b>Other:-</b> Agile/Scrum, Unit Testing, CI/CD Pipelines</p>
          </span>

        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
