import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <div className="h-screen flex flex-col relative text-center max-w-7xl px-6 md:px-18 justify-evenly mx-auto items-center md:text-left md:flex-row">
        <h1 className="absolute top-16 md:top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-lg md:text-2xl">
          Thanks
        </h1>
        <div className="space-y-4 px-2 md:px-10 text-center mt-12 md:mt-0">
          <h3 className="text-lg md:text-3xl">
            Unfortunately, this is the end of my portfolio
          </h3>
          <h4 className="text-md md:text-xl">
            Or the start of something new 🙌 - Let&#39;s have a&nbsp;
            <span className="text-lg">chat!</span>
          </h4>
          <h3 className="text-md md:text-xl">
            I&apos;m looking to join a team of developers who can assist me in
            developing my skillset and take me to the next level. If you feel I
            may be a good fit for your team, let me know via<br></br>
            <a
              className="hover:text-cyan-500 transition duration-300"
              href="mailto:remelscrowe@gmail.com"
            >
              Email 📧&nbsp;
            </a>
            or drop me a&nbsp;
            <a
              className="hover:text-cyan-500 transition duration-300"
              href="https://telegram.me/remcrw"
            >
              Message📲
            </a>
            on Telegram.
          </h3>
        </div>
        <img
          src="https://i.ibb.co/8x8N5Xt/20230424-191033000-i-OS-removebg.png"
          alt="20230424-191033000-i-OS-removebg"
          className="object-cover w-[200px] h-[200px] md:w-[500px] md:h-[600px] p-2 md:p-6 m-0"
        />
      </div>
    </>
  );
}

export default Contact;
