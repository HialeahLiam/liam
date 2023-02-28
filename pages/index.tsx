import type { NextPage } from "next";
import { Staatliches } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
const staatliches = Staatliches({ subsets: ["latin"], weight: "400" });

const Home: NextPage = () => {
  const [bgClass, setBgClass] = useState("");
  const firstBg = "bg-gradient-to-br from-pink-400 to-amber-400";
  const secondBg = "bg-gradient-to-bl from-indigo-600 to-amber-500";
  const thirdBg = "bg-gradient-to-bl from-yellow-400 to-teal-400";
  const fourthBg = "bg-gradient-to-bl from-teal-400 to-purple-400";

  const containerClass = `min-h-screen flex flex-col sm:p-8 p-4  ${bgClass}`;

  function handleLinkHover(link: string) {
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
      <svg viewBox="0 0 85 18" className="absolute z-10 left-0 fill-red-500">
        <text x="-4" y="15" className=" italic font-bold">
          Liam Idrovo
        </text>
      </svg>
      <div className=" grow bg-gradient-to-b from-orange-100/50 to-orange-400/50 flex">
        <div className="sm:text-base text-3xl flex flex-col mx-auto w-max sm:items-start items-end text-left sm:mt-[25vw] mt-[40vw] sm:justify-center justify-end p-4 sm:grow-0 grow">
          <a
            href=""
            className="text-red-500 hover:scale-125  transition   py-2  duration-75 "
            onFocus={() => handleLinkHover("developer")}
            onMouseOver={() => handleLinkHover("developer")}
            onBlur={() => handleLinkHover("")}
            onMouseLeave={() => handleLinkHover("")}
          >
            developer
          </a>
          <a
            href=""
            className="text-red-600 hover:scale-125   transition   py-2 duration-100"
            onFocus={() => handleLinkHover("musicmaker")}
            onMouseOver={() => handleLinkHover("musicmaker")}
            onBlur={() => handleLinkHover("")}
            onMouseLeave={() => handleLinkHover("")}
          >
            musicmaker
          </a>
          <a
            href=""
            className="text-red-700 hover:scale-125  transition  py-2 duration-100"
            onFocus={() => handleLinkHover("polyglot")}
            onMouseOver={() => handleLinkHover("polyglot")}
            onBlur={() => handleLinkHover("")}
            onMouseLeave={() => handleLinkHover("")}
          >
            polyglot
          </a>
          <a
            href=""
            className="text-red-800 hover:scale-125  transition  py-2 duration-100"
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
