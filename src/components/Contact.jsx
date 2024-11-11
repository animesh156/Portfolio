import bye from "/assets/bye.gif";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import Snowfall from 'react-snowfall'

function Contact() {
  return (
    <div>
      <h1 className="text-rose-500 text-center text-4xl md:text-6xl font-bold mt-5 py-4 mb-12">
          Connect with me
        </h1>
      <div className="max-w-screen-xl px-4 m-auto overflow-hidden sm:px-6 lg:px-8">
      
        <div className="flex justify-center mt-12 space-x-6 mb-10">
          <a href="https://github.com/animesh156" target="_blank" className="">
            <FaGithub className="text-fuchsia-500" size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/animesh95/"
            target="_blank"
            className=""
          >
            <FaLinkedinIn className="text-sky-500" size={24} />
          </a>
          <a
            href="https://twitter.com/Animesh47166828"
            target="_blank"
            className=""
          >
            <FaXTwitter size={24} className="text-white" />
          </a>
          <a
            href="https://discordapp.com/users/anni215405"
            target="_blank"
            className=""
          >
            <FaDiscord size={24} className="text-sky-700" />
          </a>
        </div>

        <div className="flex justify-center mt-12">
          <img
            src={bye}
            className="h-[200px] w-auto rounded-lg"
            alt="bye-gif"
          />
        </div>
        <p className="mt-16 mb-2 text-base font-bold leading-6 text-center text-emerald-400">
          © 2024 Animesh, Inc. All rights reserved.
        </p>
      </div>
      
      <Snowfall
         color='#e91e63'
  style={{
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    
  }}
/>
    </div>
  );
}

export default Contact;
