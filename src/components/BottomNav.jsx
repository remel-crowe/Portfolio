import React, { useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineHome,
} from "react-icons/ai";

import { BsDiscord } from "react-icons/bs";

const Nav = () => {
  function showDiscord() {
    alert("CRW#8116");
  }
  return (
    <nav
      className="
        flex     
        max-w-content 
        py-[0.7rem] 
        px-[1.7rem] 
        fixed  
        bottom-3 
        mx-auto 
        inset-x-0 
        gap-[0.8rem]
        rounded-full"
    >
      <a
        href="#projectSection"
        className="bg-none p-1 rounded-full  hover:-translate-y-1 hover:shadow-md"
      >
        <AiFillGithub className="hover:text-black" />
      </a>
      <a
        href="https://www.linkedin.com/in/remel-s-crowe/"
        className="bg-transparent p-1 rounded-full  hover:-translate-y-1 hover:shadow-md"
      >
        <AiFillLinkedin className="hover:text-blue-600" />
      </a>
      <a
        href="https://twitter.com/r5crw"
        className="bg-transparent p-1 rounded-full hover:-translate-y-1 hover:shadow-md"
      >
        <AiFillTwitterCircle className="hover:text-cyan-500" />
      </a>
      <a
        href="#"
        className="bg-transparent p-1 rounded-full  hover:-translate-y-1 hover:shadow-md"
        onClick={showDiscord}
      >
        <BsDiscord className="hover:text-purple-800" />
      </a>
    </nav>
  );
};

export default Nav;
