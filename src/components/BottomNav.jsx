import React, { useState, useEffect } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

/*
 * If you find this code useful in your project, please consider giving credit
 * by mentioning the author 'Remel Crowe' and linking back to the original repository:
 * [https://github.com/remel-crowe/Portfolio]
 */

const Nav = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const isScrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsBottom(isScrolledToBottom);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function showDiscord() {
    alert("CRW#8116");
  }

  return (
    <nav
      className={`
        flex     
        max-w-content 
        py-[0.7rem] 
        px-[1.7rem] 
        fixed  
        bottom-3 
        mx-auto 
        inset-x-0 
        gap-[0.8rem]
        rounded-full
        ${isBottom ? "scale-125" : ""}`}
    >
      <a
        href="https://github.com/remel-crowe"
        className={`bg-none p-1 rounded-full hover:-translate-y-1 hover:shadow-md ${
          isBottom ? "text-black" : ""
        }`}
      >
        <AiFillGithub
          className={`hover:text-black ${isBottom ? "text-black" : ""}`}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/remel-s-crowe/"
        className={`bg-transparent p-1 rounded-full hover:-translate-y-1 hover:shadow-md ${
          isBottom ? "text-blue-600" : ""
        }`}
      >
        <AiFillLinkedin
          className={`hover:text-blue-600 ${isBottom ? "text-blue-600" : ""}`}
        />
      </a>
      <a
        href="https://twitter.com/r5crw"
        className={`bg-transparent p-1 rounded-full hover:-translate-y-1 hover:shadow-md ${
          isBottom ? "text-cyan-500" : ""
        }`}
      >
        <AiFillTwitterCircle
          className={`hover:text-cyan-500 ${isBottom ? "text-cyan-500" : ""}`}
        />
      </a>
      <a
        href="#"
        className={`bg-transparent p-1 rounded-full hover:-translate-y-1 hover:shadow-md ${
          isBottom ? "text-purple-800" : ""
        }`}
        onClick={showDiscord}
      >
        <BsDiscord
          className={`hover:text-purple-800 ${
            isBottom ? "text-purple-800" : ""
          }`}
        />
      </a>
    </nav>
  );
};

export default Nav;
