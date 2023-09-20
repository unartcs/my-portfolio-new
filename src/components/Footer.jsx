import React from "react";
import { HashLink } from "react-router-hash-link";
import { Element } from "react-scroll";

function Footer() {
  return (
    <div className="footer-wrapper flex items-center justify-center  bg-[#121118] py-8 text-white relative flex-col gap-2 mt-auto">
      <HashLink to="/#navbar" spy={true} smooth={true} duration={500} className='flex justify-center items-center'>
        <button className="absolute bottom-[80%] z-[10] bg-white text-black p-1">
          Back to top
        </button>
      </HashLink>

      <span>© 2023 Daniel Cohen.</span>
    </div>
  );
}

export default Footer;
