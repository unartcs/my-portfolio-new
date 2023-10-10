import React from "react";
import { HashLink } from "react-router-hash-link";
import { Element } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar-wrapper bg-[#191629]/[0.5] p-4 rounded-3xl px-10 fixed bottom-10">
      <Element name="navbar">
        <ul className="navbar-menu flex gap-16 text-xl text-white [&>li]:hover:cursor-pointer ">
          <HashLink to="/#" spy={true} smooth={true} duration={500}>
            <li className="navbar-item flex flex-col text-xs items-center justify-center relative group">
              <span className="absolute bottom-12 bg-[#191629]/[0.5] px-2 p-1 rounded-xl invisible  group-hover:visible font-sans">
                Home
              </span>
              <span className="absolute bottom-10 w-1  bg-[#191629]/[0.5] h-2 invisible  group-hover:visible">
                {" "}
              </span>
              <svg
                class="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
            </li>
          </HashLink>
          <HashLink to="/#about" spy={true} smooth={true} duration={500}>
          <li className="navbar-item flex flex-col text-xs items-center justify-center relative group">
            <span className="absolute bottom-12 bg-[#191629]/[0.5] px-2 p-1 rounded-xl invisible  group-hover:visible font-sans">
                About
              </span>
              <span className="absolute bottom-10 w-1  bg-[#191629]/[0.5] h-2 invisible  group-hover:visible">
                {" "}
              </span>
              <svg
                class="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
              </svg>
            </li>
          </HashLink>
          <HashLink to="/#projects" spy={true} smooth={true} duration={500}>
          <li className="navbar-item flex flex-col text-xs items-center justify-center relative group">
            <span className="absolute bottom-12 bg-[#191629]/[0.5] px-2 p-1 rounded-xl invisible  group-hover:visible font-sans">
                Projects
              </span>
              <span className="absolute bottom-10 w-1  bg-[#191629]/[0.5] h-2 invisible  group-hover:visible">
                {" "}
              </span>
              <svg
                class="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5"
                />
              </svg>
            </li>
          </HashLink>
          <HashLink to="/#contact" spy={true} smooth={true} duration={500}>
          <li className="navbar-item flex flex-col text-xs items-center justify-center relative group">
            <span className="absolute bottom-12 bg-[#191629]/[0.5] px-2 p-1 rounded-xl invisible  group-hover:visible font-sans">
                Contact
              </span>
              <span className="absolute bottom-10 w-1  bg-[#191629]/[0.5] h-2 invisible  group-hover:visible">
                {" "}
              </span>
              <svg
                class="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              </svg>
            </li>
          </HashLink>
        </ul>
      </Element>
    </div>
  );
}

export default Navbar;
