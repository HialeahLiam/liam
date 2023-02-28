import type { NextPage } from "next";
import { Comfortaa } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const staatliches = Comfortaa({ subsets: ["latin"], weight: "400" });

const Home: NextPage = () => {
  const [bgClass, setBgClass] = useState("");
  const firstBg = "bg-gradient-to-br from-pink-600 to-amber-400 ";
  const secondBg = "bg-gradient-to-bl from-indigo-600 to-red-500";
  const thirdBg = "bg-gradient-to-bl from-yellow-400 to-teal-400";
  const fourthBg = "bg-gradient-to-bl from-teal-400 to-purple-400";

  const containerClass = `min-h-screen flex flex-col transition  ${bgClass}`;
  const timer = useRef();

  useEffect(() => {
    console.log("check!");
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 640) {
      let newClass: string;
      switch (bgClass) {
        case firstBg:
          newClass = secondBg;
          break;
        case secondBg:
          newClass = thirdBg;
          break;
        case thirdBg:
          newClass = fourthBg;
          break;
        case fourthBg:
          newClass = firstBg;
          break;
        default:
          newClass = firstBg;
      }
      setTimeout(() => {
        console.log("new timeout");
        setBgClass(newClass);
      }, 1000);
    }
  });

  function handleLinkHover(link: string) {
    if (window.innerWidth < 640) return;
    console.log("active!");
    switch (link) {
      case "developer":
        setBgClass(firstBg);
        break;
      case "musicmaker":
        setBgClass(secondBg);
        break;
      case "polyglot":
        setBgClass(thirdBg);
        break;
      case "other":
        setBgClass(fourthBg);
        break;

      default:
        setBgClass("");
    }
  }
  return (
    <div className={containerClass}>
      <div className=" grow bg-gradient-to-b from-orange-100/50 to-orange-500/50 flex flex-col">
        <svg viewBox="0 0 120 17" className="z-10 left-0 right-0 fill-red-500 ">
          <text x="0" y="16" className={`${staatliches.className} font-bold`}>
            LIAM IDROVO
          </text>
        </svg>
        <div className="  flex flex-col sm:block mx-auto w-max  p-4 sm:grow-0 my-auto sm:my-0 ">
          <a
            href=""
            className="text-red-500  sm:text-base py-2 -ml-4 sm:ml-0 text-3xl"
            onFocus={() => handleLinkHover("developer")}
            onMouseOver={() => handleLinkHover("developer")}
            onBlur={() => handleLinkHover("")}
            onMouseLeave={() => handleLinkHover("")}
          >
            developer
          </a>
          <a
            href=""
            className="text-red-600 sm:text-base sm:px-1     py-2   text-2xl my-36"
            onFocus={() => handleLinkHover("musicmaker")}
            onMouseOver={() => handleLinkHover("musicmaker")}
            onBlur={() => handleLinkHover("")}
            onMouseLeave={() => handleLinkHover("")}
          >
            musicmaker
          </a>
          {/* <a
            href=""
            className="text-red-700 hover:scale-125  transition  py-2 duration-100"
            onFocus={() => handleLinkHover("polyglot")}
            onMouseOver={() => handleLinkHover("polyglot")}
            onBlur={() => handleLinkHover("")}
            onMouseLeave={() => handleLinkHover("")}
          >
            polyglot
          </a> */}
          <a
            href=""
            className="text-red-800  sm:text-base py-2 ml-6 sm:ml-0 text-1xl"
            onFocus={() => handleLinkHover("other")}
            onMouseOver={() => handleLinkHover("other")}
            onBlur={() => handleLinkHover("")}
            onMouseLeave={() => handleLinkHover("")}
          >
            and other things
          </a>
        </div>
      </div>
      {/* <footer className=" bg-white py-4">footer</footer> */}
    </div>
  );
};

export default Home;
