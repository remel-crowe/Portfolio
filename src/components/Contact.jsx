import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <div className="h-[900px] flex flex-col relative text-center max-w-7xl px-6 md:px-18 justify-evenly mx-auto items-center md:text-left md:flex-row">
        <h2 className="absolute top-16 md:top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-lg md:text-2xl">
          Thanks
        </h2>
        <div className="space-y-4 px-2 md:px-10 text-center mt-12 md:mt-0">
          <h3 className="text-lg md:text-3xl">
            Unfortunately, this is the end of my portfolio
          </h3>
          <h4 className="text-md md:text-xl">
            Or the start of something new 🙌 - Let&#39;s have a&nbsp;
            <span className="text-lg">chat!</span>
          </h4>
          <h3 className="text-md md:text-xl">
            I&apos;m actively looking to join a team of developers who can
            assist in developing my skillset and guiding me to the next level.
            If you feel I may be a good fit for your team, let me know via
            <br></br>
            <a
              className="text-yellow-400 transition duration-300"
              href="mailto:remelscrowe@gmail.com"
            >
              Email&nbsp;
            </a>
            or drop me a message on &nbsp;
            <a
              className="text-yellow-400 transition duration-300"
              href="https://linkedin.com/in/remel-s-crowe"
            >
              LinkedIn
            </a>
          </h3>
        </div>
        <img
          src="https://i.ibb.co/VMSzZtJ/IMG-8071-removebg.png"
          alt="Emoticon representing Remel with a call sign"
          className="object-cover w-[200px] h-[200px] md:w-[500px] md:h-[600px] p-2 md:p-6 m-0"
        />
      </div>
    </>
  );
}

export default Contact;
