import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import { Element } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar-wrapper bg-none fixed w-[100%] flex justify-between top-0 z-10  bg-[#201d2a] py-2 px-5 bg-opacity-40 rounded-lg" >
      <Element name="navbar">
        <ul className="navbar-menu flex gap-10 text-xl text-white [&>li]:hover:cursor-pointer ">
          <HashLink to="/#about" spy={true} smooth={true} duration={500}>
            <li className="hover:text-red-500">About</li>
          </HashLink>
          <HashLink to="/#projects" spy={true} smooth={true} duration={500}>
            <li className="hover:text-red-500">Projects</li>
          </HashLink>
          <HashLink to="/#contact" spy={true} smooth={true} duration={500}>
            <li className="hover:text-red-500">Contact</li>
          </HashLink>
        </ul>
      </Element>
      <ul className="navbar-socials flex text-xl gap-5 text-white [&>li]:hover:cursor-pointer z-10" >
        <a
          href="https://github.com/unartcs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="hover:text-red-500">
            <BsGithub size={24} />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-cohen-dc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="hover:text-red-500">
            <BsLinkedin size={24} />
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
