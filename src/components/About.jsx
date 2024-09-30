

function About() {
  return (
    <div >
          <section
    id="about"
    className="scroll-smooth mb-50 bg-black text-white px-6 "
  >
    <h2 className="text-pink-400 text-5xl mt-2 mb-3 text-center">About Me</h2>
    <div className="cont w-auto  m-auto md:max-w-2xl  py-4   text-pretty mt-4  px-8  rounded-2xl">
      <p className="abt text-2xl text-wrap font-bold text-md">
      Hey there! I&apos;m <span className="text-red-500">Animesh Rathore</span>, a final year CSE student. I&apos;m fast learner with the passion of problem solving and MERN stack development. 
I&apos;m passionate about writing clean code & efficient code following best coding standards. I&apos;m eager to contribute my skills in MERN stack development.
      </p>
    </div>


 

   
    {/* Tech Stack */}
    <h2 className="text-pink-400 text-5xl mt-4 mb-5 text-center">My Tech Stack</h2>
    <div className="flex flex-row justify-center gap-8 flex-wrap text-green-500 mt-6 stack mb-16">
      <div className="flex flex-col border-2 border-slate-500 shadow-md hover:shadow-pink-500 w-32 h-32 rounded-lg items-center justify-center">
        <img
          width={64}
          height={64}
          src="https://img.icons8.com/nolan/64/c-plus-plus-logo.png"
          alt="c-plus-plus-logo"
        />
        <p>C++</p>
      </div>
      <div className="flex flex-col border-2 border-slate-500 shadow-md hover:shadow-pink-500 h-32 rounded-lg items-center w-32 justify-center">
        <img
          width={64}
          height={64}
          src="https://img.icons8.com/plasticine/100/html-5.png"
          alt="html-5"
        />
        <p>HTML</p>
      </div>
      <div className="flex flex-col border-2 border-slate-500 shadow-md hover:shadow-pink-500 h-32 rounded-lg items-center w-32 justify-center">
        <img
          width={64}
          height={64}
          src="https://img.icons8.com/plasticine/100/css3.png"
          alt="css3"
        />
        <p>CSS</p>
      </div>
      <div className="flex flex-col border-2 border-slate-500 shadow-md hover:shadow-pink-500 h-32 rounded-lg items-center w-32 justify-center">
        <img
          width={64}
          height={64}
          src="https://img.icons8.com/dusk/64/javascript-logo.png"
          alt="javascript-logo"
        />
        <p>JavaScript</p>
      </div>
      <div className="flex flex-col border-2 border-slate-500 shadow-md hover:shadow-pink-500 h-32 rounded-lg items-center w-32 justify-center">
        <img
          width={64}
          height={64}
          src="https://img.icons8.com/plasticine/100/react.png"
          alt="react"
        />
        <p>React JS</p>
      </div>
      <div className="flex flex-col border-2 border-slate-500 shadow-md hover:shadow-pink-500 h-32 rounded-lg items-center w-32 justify-center align-center">
        <img
          width={64}
          height={64}
          src="https://img.icons8.com/nolan/64/node-js.png"
          alt="node-js"
        />
        <p>Node JS</p>
      </div>
      <div className="border-2 border-slate-500 flex flex-col shadow-md hover:shadow-pink-500 h-32 rounded-lg items-center w-32 justify-center">
        <img
          width={64}
          height={64}
          src="https://img.icons8.com/nolan/64/express-js.png"
          alt="express-js"
        />
        <p>Express JS</p>
      </div>
      <div className="flex flex-col border-2 shadow-md hover:shadow-pink-500 border-slate-500 h-32 rounded-lg items-center w-32 justify-center">
        <img
          width={64}
          height={64}
          src="https://img.icons8.com/nolan/64/mongo-db.png"
          alt="mongo-db"
        />
        <p>Mongo DB</p>
      </div>
      <div className="flex flex-col border-2 shadow-md hover:shadow-pink-500 border-slate-500 h-32 rounded-lg items-center w-32 justify-center">
        <img
          width={64}
          height={64}
          src="https://img.icons8.com/nolan/64/tailwind_css.png"
          alt="tailwind_css"
        />
        <p>Tailwind CSS</p>
      </div>
      <div className="flex flex-col border-2 shadow-md hover:shadow-pink-500 border-slate-500 h-32 rounded-lg items-center w-32 justify-center">
        <img
          width={64}
          height={64}
          src="https://img.icons8.com/nolan/64/bootstrap.png"
          alt="bootstrap"
        />
        <p>Bootstrap</p>
      </div>
      <div className="flex flex-col border-2 shadow-md hover:shadow-pink-500 border-slate-500 h-32 rounded-lg items-center w-32 justify-center">
        <img
          width={64}
          height={64}
          src="https://img.icons8.com/dusk/64/postman-api.png"
          alt="postman-api"
        />
        <p>Postman</p>
      </div>
      <div className="flex flex-col border-2 shadow-md hover:shadow-pink-500 border-slate-500 h-32 rounded-lg items-center w-32 justify-center">
        <img
          width={64}
          height={64}
          src="https://img.icons8.com/nolan/64/git.png"
          alt="git"
        />
        <p>Git</p>
      </div>
      <div className="flex flex-col border-2 shadow-md hover:shadow-pink-500 border-slate-500 h-32 rounded-lg items-center w-32 justify-center">
        <img
          width={64}
          height={64}
          src="https://img.icons8.com/color/48/c-programming.png"
          alt="c-programming"
        />
        <p>C</p>
      </div>
      <div className="flex flex-col border-2 shadow-md hover:shadow-pink-500 border-slate-500 h-32 rounded-lg items-center w-32 justify-center">
        <img
          width={64}
          height={64}
          src="https://img.icons8.com/nolan/64/github.png"
          alt="github"
        />
        <p>Github</p>
      </div>
      <div className="flex flex-col shadow-md hover:shadow-pink-500 border-2 border-slate-500 h-32 rounded-lg items-center w-32 justify-center">
        <img
          width={60}
          height={60}
          src="https://img.icons8.com/external-soft-fill-juicy-fish/60/external-saas-bugs-and-errors-soft-fill-soft-fill-juicy-fish.png"
          alt="external-saas-bugs-and-errors-soft-fill-soft-fill-juicy-fish"
        />
        <p>SaaS</p>
      </div>
      <div className="flex flex-col border-2 border-slate-500 shadow-md hover:shadow-pink-500 h-32 rounded-lg items-center w-32 justify-center">
        <img width={64} height={64} src="./assets/vite.svg" alt="postman-api" />
        <p>Vite</p>
      </div>
    </div>
  </section>
    </div>
  )
}

export default About