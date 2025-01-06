import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import bgr from "/assets/homeBg.gif";
import hand from "/assets/hand.gif";
import Snowfall from "react-snowfall";

function Home() {
  const [textColor, setTextColor] = useState("red");

  return (
    
      <section
        className="w-auto flex-col flex justify-center md:flex-row h-screen items-center md:justify-evenly "
      >
        {/* Left Side Content */}
        <div className="flex flex-col justify-center text-center px-4">
          <div className="text-2xl md:text-6xl mb-10 text-white">
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

          <div style={{ color: textColor }} className="text-wrap text-2xl">
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

          <div style={{ color: textColor }}>
            <a
              href="https://drive.google.com/file/d/1KpfUnu6yjl48nQW_S1B19etxPOirqc49/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download=""
            >
              <button
                type="button"
                className="mt-7 m-auto ease-in duration-300 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-m px-5 py-2.5 text-center me-2 mb-2"
              >
                Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="mt-6 md:mt-0">
          <img
            src={bgr}
            className="h-60 text-black rounded-3xl border-black"
            alt="background graphic"
          />
        </div>

        {/* Snowfall Effect */}
        <Snowfall
          color="#2196f3"
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
        />
      </section>
   
  );
}

export default Home;
