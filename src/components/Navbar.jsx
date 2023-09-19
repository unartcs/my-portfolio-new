import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navbar-wrapper bg-none fixed w-[100%] flex justify-between top-0 z-10  bg-[#201d2a] py-2 px-5 bg-opacity-40 rounded-lg">
      {/* <div className='navbar-wrapper bg-none fixed w-[90%] flex justify-between top-12 z-10 '> */}

      <ul className="navbar-menu flex gap-10 text-xl text-white [&>li]:hover:cursor-pointer ">
        <li className="hover:text-red-500">About</li>
        <li className="hover:text-red-500">Projects</li>
        <li className="hover:text-red-500">Contact</li>
      </ul>
      <ul className="navbar-socials flex text-xl gap-5 text-white [&>li]:hover:cursor-pointer z-10">
        <li className="hover:text-red-500">
          <BsGithub size={24} />
        </li>
        <li className="hover:text-red-500">
          <BsLinkedin size={24} />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
