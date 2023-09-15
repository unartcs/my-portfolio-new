import React, { useState } from "react";
import ProjectData from "../data/ProjectList";

function Projects() {
  const [projData, setProjData] = useState(ProjectData);
  return (
    <div className="projects-wrapper flex items-center flex-col relative  bg-[#100F15] text-white ">
      <div className="projects-wrapper-header items-center relative w-[100%] text-center flex justify-center">
        <h1 className="text-3xl  bg-[#100F15] p-5 z-[5] text-center">
          Projects
        </h1>
        <hr className="w-[90%] absolute z-[2] opacity-50 h-px bg-red-400 border-0"></hr>
      </div>
      <div className="projects-wrapper-content flex w-full items-center justify-center py-16">
        <div className="projects-grid grid grid-cols-2 gap-16">
          {projData.map((item) => {
            return (
              <div className="project-item flex gap-5 w-full h-[100%]">
                <div className="project-image overflow-hidden rounded-xl w-[400px]">
                  <a href={item.url}>
                    <img
                      className="w-[100%] h-[100%] object-cover"
                      src={`${process.env.PUBLIC_URL}/images/${item.image}`}
                      alt={item.name}
                    />
                  </a>
                </div>
                <div className="project-info flex flex-col gap-10 h-[100%] justify-between">
                  <div className="project-text flex gap-2 flex-col">
                    <a href={item.url} className="text-2xl text-red-500">
                      {item.name}
                    </a>
                    <p className="w-min-[5rem] w-max-[20rem] w-[15vw]">
                      {item.description}
                    </p>
                  </div>
                  <div className="project-tech flex gap-2 flex-wrap">
                    {item.tech.map((tech) => {
                      return (
                        <h2 className="py-[0.2rem] px-1 bg-slate-900 rounded-lg">
                          {tech}
                        </h2>
                      );
                    })}
                  </div>
                  <div className="project-links flex gap-2">
                    <a
                      href={item.url}
                      className="text-xl py-[0.1rem] px-2 bg-white text-black hover:bg-slate-500"
                    >
                      Demo
                    </a>
                    {item.source_url && (
                      <a
                        href={item.source_url}
                        className="text-xl py-[0.1rem] px-2 bg-white text-black hover:bg-slate-500"
                      >
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
