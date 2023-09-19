import React from "react";

function About() {
  return (
    <div className="about-wrapper flex-col flex h-[100%]  gap-20 [&>*]:font-ananada bg-[#100F15] relative justify-center items-center">
      <div className="about-wrapper-header absolute w-[100%] text-center flex justify-center items-center top-0 ">
        <h1 className="text-3xl  bg-[#100F15] p-5 z-[5] text-center text-white">
          About
        </h1>
        <hr className="w-[50%] absolute z-[2] opacity-50 h-px bg-red-400 border-0"></hr>
      </div>
      <div className="about-wrapper-content flex flex-col items-center gap-20 justify-center mx-[5%]">
        <div className="about-content flex justify-center gap-5">
          <div className="img-wrapper rounded-lg overflow-hidden">
          <img
              className="w-[200px] h-[350px] object-cover  border-white border-2 rounded-xl"
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
              alt="Profile"
            ></img>
          </div>
          <div className="about-header [&>*]:font-ananada text-white flex flex-col z-[6] justify-between w-[50%]">
            <div className="about-text w-full [&>p]:w-[100%] flex flex-col gap-2 leading-6">
              <p>Hello there! I'm Daniel, a self-taught front-end developer with a relentless passion for crafting captivating web experiences.</p>
              <p>With over a year of experience, I have honed my skills to become proficient in creating dynamic and user-friendly interfaces, with a primary focus on React.</p>
              <p>My main focus is React but am open to expand my knowledge and set of skills.</p>
              <p>My journey into the world of web development began as a personal curiosity, but it quickly transformed into a full-fledged passion.I find immense satisfaction in bringing designs to life, enhancing user interactions, and solving complex problems through code.</p>
              <p>If you're seeking a passionate front-end developer who's ready to contribute, learn, and grow, I'd love to chat. Together, we can create web experiences that leave a lasting impression.</p>
            </div>  

            <div className="language-stack flex gap-5">
              <span className="py-2 px-2 bg-white text-black rounded-md">Hebrew</span>
              <span className="p-2 bg-white text-black rounded-md">English</span>
            </div>
          </div>
        </div>
        <div className="skills-wrapper mt-auto">
          <div className="tech-stack flex text-[50px] gap-10 flex-wrap justify-center items-center">
            <div className="flex [&>*>*]:font-ananada [&>i>p]:text-xl gap-10  justify-center items-center">
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
            </div>
            <div className="flex  [&>*>*]:font-ananada [&>i>p]:text-xl gap-10  justify-center items-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
