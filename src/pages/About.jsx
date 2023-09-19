import React from "react";

function About() {
  return (
    <div className="about-wrapper flex flex-col h-[100%] items-center gap-20 [&>*]:font-ananada bg-[#100F15]">
      <div className="about-wrapper-header items-center relative w-[100%] text-center flex justify-center">
        <h1 className="text-3xl  bg-[#100F15] p-5 z-[5] text-center text-white">About</h1>
        <hr className="w-[90%] absolute z-[2] opacity-50 h-px bg-red-400 border-0"></hr>
      </div>

      <div className="about-content flex gap-5 mt-auto">
        <div className="img-wrapper w-[300px] h-[400px] rounded-lg overflow-hidden border-white border-2">
          <img
            className="w-[400px] object-cover"
            src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
            alt="Profile"
          ></img>
        </div>
        <div className="about-header [&>*]:font-ananada text-white">
          <p>bla bla bla bla bla bla bla bla bla bla bla bla </p>
          <p>bla bla bla bla bla bla bla bla bla bla bla bla </p>
          <p>bla bla bla bla bla bla bla bla bla bla bla bla </p>
        </div>
      </div>
      <div className="skills-wrapper mt-auto">
        <div className="tech-stack flex text-[50px] gap-20 [&>*>*]:font-ananada [&>i>p]:text-2xl flex-wrap">
          <i className="devicon-html5-plain colored icon text-center">
            <p className="font-ananada">HTML</p>
          </i>
          <i className="devicon-css3-plain colored icon text-center">
            <p>CSS</p>
          </i>
          <i className="devicon-javascript-plain colored icon text-center">
            <p>JavaScript</p>
          </i>
          <i className="devicon-tailwindcss-plain colored icon text-center">
            <p>Tailwind</p>
          </i>
          <i className="devicon-react-plain colored icon text-center">
            <p>React</p>
          </i>
          <i className="devicon-mongodb-plain colored icon text-center">
            <p>Mongodb</p>
          </i>
          <i className="devicon-jest-plain colored icon text-center">
            <p>Jest</p>
          </i>
          <i className="devicon-git-plain colored icon text-center">
            <p>Git</p>
          </i>
          <i className="devicon-webpack-plain colored icon text-center">
            <p>Webpack</p>
          </i>
          <i class="devicon-npm-original-wordmark colored text-center">
            <p>NPM</p>
          </i>
        </div>
        <div className="language-stack">
          <span>Hebrew - Native</span>
          <span>English - Fluent</span>
        </div>
      </div>
    </div>
  );
}

export default About;
