import { useState, useEffect } from "react";

const Circles = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle scroll and update the current project index
  const handleScroll = () => {
    const container = document.querySelector(".scrolling-container");
    if (container) {
      const scrollPosition = container.scrollLeft;
      const projectWidth = container.clientWidth; // Width of each project card
      const newIndex = Math.round(scrollPosition / projectWidth);
      setCurrentIndex(newIndex);
    }
  };

  // Add a scroll event listener to track scroll position
  useEffect(() => {
    const container = document.querySelector(".scrolling-container");
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div className="flex relative md:top-[400px]">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${
            index === currentIndex ? "bg-yellow-400" : "bg-gray-400"
          } mr-2`}
        ></div>
      ))}
    </div>
  );
};

export default Circles;
