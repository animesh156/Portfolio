import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import bgr from "/assets/homeBg.gif";
import hand from "/assets/hand.gif";
// import Snowfall from "react-snowfall";

function Home() {
  const [textColor, setTextColor] = useState("violet");

  return (
    
      <section
        className="w-auto flex-col  flex justify-center md:flex-row h-screen items-center md:justify-around "
      >
        {/* Left Side Content */}
        <div className="flex flex-col justify-center text-center px-4">
          <div className="lg:text-6xl text-2xl mb-10 dark:text-white">
            <h1 style={{ display: "inline" }}>
              Hi There!{" "}
              <img
                src={hand}
                className="h-16 -ml-4 -mt-2"
                style={{ display: "inline", verticalAlign: "middle" }}
                alt="waving hand"
              />
            </h1>
            <h1 className="uppercase">
              I&apos;m{" "}
              <span className="text-rose-500 font-semibold">
                Animesh Rathore
              </span>
            </h1>
          </div>

          <div style={{ color: textColor }} className="text-wrap md:text-2xl text-lg">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                1000,
                () => setTextColor("aqua"),
                "Open Source Contributor",
                1000,
                () => setTextColor("deeppink"),
                "Problem Solver",
                1000,
                () => setTextColor("yellow"),
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </div>

          <div >
            <a
              href="https://drive.google.com/file/d/1FCOdmrIIF2UhplK9t8OyR07wZspNsWcN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download=""
            >
              <button
               
                className="mt-7 m-auto   bg-green-500 font-medium rounded-lg text-m px-5 py-2.5 text-center me-2 mb-2"
              >
                Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="mt-6  md:mt-0">
          <img
            src={bgr}
            className="h-60 text-black rounded-3xl border-black"
            alt="background graphic"
          />
        </div>

      </section>
   
  );
}

export default Home;
