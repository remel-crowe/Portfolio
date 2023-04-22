import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <div className="h-screen flex flex-col relative text-center max-w-7xl px-18 justify-evenly mx-auto items-center md:text-left md:flex-row">
        <h1 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Thanks
        </h1>
        <div>
          <h4>
            Or the start of something new 🙌 - Lets have a{" "}
            <span className="">chat!</span>
          </h4>
          <h3>
            I'm looking to join a team of developers who can assist me in
            developing my skillset and take me to the next level. If you feel I
            may be a good fit for your team, let me know via
            <a
              className=" hover:text-cyan-500 transition duration-300"
              href="mailto:remelscrowe@gmail.com"
            >
              email 📧,
            </a>
            or drop me a
            <a
              className="hover:text-cyan-500 transition duration-300"
              href="https://telegram.me/remcrw"
            >
              Message📲
            </a>
            on Telegram.
          </h3>
        </div>
      </div>
    </>
  );
}

export default Contact;
