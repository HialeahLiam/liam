import type { NextPage } from "next";
import { Staatliches } from "next/font/google";
import Image from "next/image";
const staatliches = Staatliches({ subsets: ["latin"], weight: "400" });

const Home: NextPage = () => {
  return (
    <div className=" min-h-screen p-8 pb-0 relative  flex flex-col">
      <svg viewBox="0 0 85 18" className="absolute z-10 left-0 fill-red-500">
        <text x="-4" y="15" className=" italic font-bold">
          Liam Idrovo
        </text>
      </svg>
      <div className=" grow  bg-orange-100 pb-20">
        <div className="bg-orange-50 pt-[25vw]">
          <div className="  flex flex-col mx-auto w-max items-start text-left ">
            <a
              href=""
              className="text-red-500 hover:scale-125  transition  py-4 duration-75"
            >
              developer
            </a>
            <a
              href=""
              className="text-red-600 hover:scale-125   transition  py-4 duration-100"
            >
              musicmaker
            </a>
            <a
              href=""
              className="text-red-700 hover:scale-125  transition py-4 duration-100"
            >
              polyglot
            </a>
            <a
              href=""
              className="text-red-800 hover:scale-125  transition py-4 duration-100"
            >
              and other things
            </a>
          </div>
        </div>
        <div className="h-48 bg-gradient-to-b  from-orange-50 to-orange-100"></div>
        <section className=" bg-gradient-to-b  from-orange-100 to-sky-50 px-12 ">
          {/* Brew.fm */}
          <h3 className=" text-red-500 mb-4">Projects</h3>
          <div className="flex sm:flex-row flex-col items-center mb-48">
            <div className="flex flex-col  mb-8 flex-1">
              <h4 className={` font-semibold text-4xl text-gray-900 `}>
                Brew.fm
              </h4>
              <p className=" text-gray-900 mb-4 ">
                Visualize your Spotify listening patterns and discover who has
                similar taste to you.
              </p>
              {/* <div className="flex flex-col gap-8 ">
                <p className=" text-gray-900 font-light">
                  Joint effort between <a href="">Bart Proost</a> and I.
                </p>
                <p className=" text-gray-900 font-light">
                  There's something I want to say, but I'm not sure how to say
                  it. But I do know it should be something that sounds like I
                  know what I'm talking about. There's something I want to say,
                  but I'm not sure how to say it. But I do know it should be
                  something that sounds like I know what I'm talking about.
                </p>

                <p className=" text-gray-900 font-light">
                  There's something I want to say, but I'm not sure how to say
                  it. But I do know it should be something that sounds like I
                  know what I'm talking about.
                </p>
              </div> */}
            </div>
            <Image
              src="/brewfm.png"
              alt="brew fm image"
              height={1000}
              width={1000}
              className=" object-contain rounded-lg bg-slate-500 sm:w-2/5 w-full sm:ml-20"
            ></Image>
          </div>
          {/* Podkast */}
          <div className="flex  sm:flex-row flex-col-reverse items-center mb-72">
            {/* <div className="flex"></div> */}
            <div></div>
            <Image
              src="/podkast_capture.png"
              height={1000}
              width={1000}
              alt="podkast capture view"
              className="h-[32vw] object-contain w-fit mr-[8vw]  rounded-lg"
            ></Image>
            <Image
              src="/podkast_library.png"
              height={1000}
              width={1000}
              alt="podkast capture view"
              className="h-[32vw] object-contain w-fit mr-20 relative top-28 rounded-lg"
            ></Image>
            <div className=" text-right flex flex-col mb-8 ">
              <h4
                className={` self-end font-semibold text-4xl text-gray-900 mb-4`}
              >
                Podkast
              </h4>
              <p className=" self-end text-gray-900 mb-4">
                Visualize your Spotify listening patterns and discover who has
                similar taste to you.
              </p>
              {/* <div className="self-end text-right flex flex-col gap-8 ">
                <p className=" text-gray-900 font-light">
                  Joint effort between <a href="">Bart Proost</a> and I.
                </p>
                <p className=" text-gray-900 font-light">
                  There's something I want to say, but I'm not sure how to say
                  it. But I do know it should be something that sounds like I
                  know what I'm talking about. There's something I want to say,
                  but I'm not sure how to say it. But I do know it should be
                  something that sounds like I know what I'm talking about.
                </p>

                <p className=" text-gray-900 font-light">
                  There's something I want to say, but I'm not sure how to say
                  it. But I do know it should be something that sounds like I
                  know what I'm talking about.
                </p>
              </div> */}
            </div>
          </div>
          {/* Spotify Heatmap */}
          <div className="flex items-center pb-48">
            <div className="flex flex-col mb-8 flex-1">
              <h4 className={` font-semibold text-4xl text-gray-900 `}>
                Spotify Heatmap
              </h4>
              <p className=" text-gray-900 mb-4">
                Visualize your Spotify listening patterns and discover who has
                similar taste to you.
              </p>
              {/* <div className="flex flex-col gap-8 ">
                <p className=" text-gray-900 font-light">
                  Joint effort between <a href="">Bart Proost</a> and I.
                </p>
                <p className=" text-gray-900 font-light">
                  There's something I want to say, but I'm not sure how to say
                  it. But I do know it should be something that sounds like I
                  know what I'm talking about. There's something I want to say,
                  but I'm not sure how to say it. But I do know it should be
                  something that sounds like I know what I'm talking about.
                </p>

                <p className=" text-gray-900 font-light">
                  There's something I want to say, but I'm not sure how to say
                  it. But I do know it should be something that sounds like I
                  know what I'm talking about.
                </p>
              </div> */}
            </div>
            <Image
              src="/spotify_heatmap.png"
              alt="brew fm image"
              height={1000}
              width={1000}
              className=" object-contain rounded-lg bg-slate-500 w-2/5 ml-20"
            ></Image>
          </div>
        </section>

        <section className="flex bg-gradient-to-b from-sky-50 to-cyan-50  flex-col  bg-orange-100 px-12 pb-72 ">
          <h3 className=" text-red-500 mb-4">Capgemini</h3>
          <div className="flex flex-col mb-8">
            <h4
              className={` font-semibold italic text-2xl text-gray-900 mb-4`}
            ></h4>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
          </div>
          <div className=" flex flex-col mb-8">
            <h4 className={`font-semibold italic text-2xl text-gray-900 mb-4`}>
              Podkast
            </h4>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
          </div>
          <div className="flex flex-col mb-8">
            <h4 className={`font-semibold italic text-2xl text-gray-900 mb-4`}>
              Spotify Heatmap
            </h4>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
          </div>
        </section>
        <section className="flex bg-gradient-to-b from-cyan-50 to-orange-100  flex-col items-center bg-orange-100 px-12 ">
          <h3 className=" text-red-500 mb-4">Final Section</h3>
          <div className="flex flex-col mb-8">
            <h4 className={`  font-semibold text-4xl text-gray-900 mb-4`}>
              Brew.fm
            </h4>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
          </div>
          <div className=" flex flex-col mb-8">
            <h4 className={`  font-semibold text-4xl text-gray-900 mb-4`}>
              Podkast
            </h4>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
          </div>
          <div className="flex flex-col mb-8">
            <h4 className={`  font-semibold text-4xl text-gray-900 mb-4`}>
              Spotify Heatmap
            </h4>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
            <p className=" text-gray-900 font-light">
              There's something I want to say, but I'm not sure how to say it.
            </p>
          </div>
        </section>
      </div>
      <footer className=" bg-white py-4">footer</footer>
    </div>
  );
};

export default Home;
