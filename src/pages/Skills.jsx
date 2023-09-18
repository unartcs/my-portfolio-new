import React from "react";

function Skills() {
  return (
    <div className="skills-wrapper h-[100vh]">
      <div className="skills-wrapper-grid">
        <div className="tech-stack">
          <i className="devicon-html5-plain colored icon"></i>
          <i className="devicon-css3-plain colored icon"></i>
          <i className="devicon-javascript-plain colored icon"></i>
          <i className="devicon-tailwindcss-plain colored icon"></i>
          <i className="devicon-react-plain colored icon"></i>
          <i className="devicon-mongodb-plain colored icon"></i>
          <i className="devicon-jest-plain colored icon"></i>
          <i className="devicon-git-plain colored icon"></i>
          <i className="devicon-webpack-plain colored icon"></i>
          <i className="devicon-npm-plain colored icon"></i>
        </div>
        <div className="language-stack">
          <span>Hebrew - Native</span>
          <span>English - Fluent</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
