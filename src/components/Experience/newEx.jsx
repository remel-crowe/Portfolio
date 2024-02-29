import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const first = useRef(null);
  return (
    <li
      ref={first}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between"
    >
      {/* <LiIcon reference={first} className="hidden" /> */}
      <div>
        <h3 className="capitalize font-bold text-xl md:text-2xl mb-1">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-yellow-400">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-yellow-400/80">
          {time} | {address}
        </span>
        <p className="font-medium w-full mt-2">{work}</p>
      </div>
    </li>
  );
};

export default Details;
