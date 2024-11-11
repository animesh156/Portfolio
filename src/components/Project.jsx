
import { useState } from 'react'
import Snowfall from 'react-snowfall'
import projects from '../projectData'







function Project() {
  const [showFrontend,setShowFrontend] = useState(true)

  const filteredProjects = projects.filter((val) => 
    showFrontend ? val.type === 'Frontend' : val.type === 'FullStack'
  );

  return (
    <>
     <section id="project" className="scroll-smooth h-screen ">
    <h2 className="text-5xl text-sky-400 text-center mt-3 .prj">
      My Projects
    </h2>
    <div id="tab-container" className="tab-container">

      <div className="container-fluid">
        <div className="text-center col-md-10 col-md-offset-1">
          <input id="tab1" type="radio" name="tabs" defaultChecked="" onClick={() => setShowFrontend(true)}   />
          <label htmlFor="tab1" className="text-white  text-2xl " >
            Frontend
          </label>
          <input id="tab2" type="radio" name="tabs" onClick={() => setShowFrontend(false)}  />
          <label htmlFor="tab2" className="text-white  text-2xl">
            Full Stack
          </label>
       
        
          
        
        </div>
      </div>
    </div>

   <div className='flex flex-row flex-wrap'>

   
  
  {
    filteredProjects.map((project) => (
      <div key={project.id} className="w-72 w hover:scale-105 mt-5 hover:shadow-md hover:shadow-cyan-400   m-auto mb-4  border  rounded-lg shadow bg-black border-cyan-400">
      <a href="#">
        <img className="rounded-t-lg" src={`/assets/${project.cover}`} alt={project.title} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-500">
          {project.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-white">
        {project.desc}
        </p>
        <a
          href={project.live} target='_blank'
          className="inline-flex mr-4 items-center text-black  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
         Live
         
        </a>

        <a
          href={project.code} target='_blank'
          className="inline-flex items-center dark:text-black font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
         Code
         
        </a>
      </div>
    </div>
    ))
  }

</div>

<Snowfall
         color='#ffeb3b'
  style={{
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    
  }}
/>


  </section>
  </>
  )
}

export default Project