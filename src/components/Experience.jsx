import React from "react";

function Experience() {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center">
      <h1 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        &lt;Places I've Worked! /&gt;
      </h1>
      <div
        id="heh"
        className="grid grid-flow-col grid-cols-2 align-middle justify-center px-7"
      >
        <div></div>
        <div className="flex flex-col gap-3"></div>
      </div>
    </div>
  );
}

export default Experience;
