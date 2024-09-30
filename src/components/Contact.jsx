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
            You&apos;ve reached the end of my portfolio
          </h3>
          <h4 className="text-md md:text-xl text-lime-400">
            But it could be the start of something great 🙌 - Let&#39;s have
            a&nbsp;
            <span className="text-lg">chat!</span>
          </h4>
          <h3 className="text-md md:text-xl">
            I&apos;m actively looking to join a team of developers where I can
            continue to grow my skillset while also contributing my knowledge
            and enthusiasm to deliver great results. If you think I&apos;d be a
            good fit for your team, let&apos;s connect! You can reach me via
            <a
              className="text-lime-400 transition duration-300 font-bold hover:text-lime-500"
              href="mailto:remelscrowe@gmail.com"
            >
              &nbsp;email&nbsp;
            </a>
            or drop me a message on &nbsp;
            <a
              className="text-lime-400 transition duration-300 font-bold hover:text-lime-500"
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
