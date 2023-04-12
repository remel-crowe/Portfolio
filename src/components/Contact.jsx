import React from "react";

function Contact() {
  return (
    <div className="h-screen">
      <div className="font-poppins text-md text-stone-300">
        <h2 className="">You've reached the end of my site...</h2>
        <h1>
          Or the start of something new 🙌 - Lets have a{" "}
          <span className="">chat!</span>
        </h1>
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
  );
}

export default Contact;
