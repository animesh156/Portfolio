import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import Snowfall from 'react-snowfall';
import projects from '../projectData';

function Project() {
  const [showFrontend, setShowFrontend] = useState(true);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const newFilteredProjects = projects.filter((val) =>
      showFrontend ? val.type === 'Frontend' : val.type === 'FullStack'
    );
    setFilteredProjects(newFilteredProjects);
  }, [showFrontend]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 4, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section id="project" className="scroll-smooth min-h-screen  p-5">
        <motion.div
          key={showFrontend ? 'frontend' : 'fullstack'}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        >
          <h2 className="md:text-5xl text-2xl font-bold text-sky-900 dark:text-cyan-400 text-center ">
            My Latest Projects
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-5 mt-5 mb-2">
          <button
  onClick={() => setShowFrontend(true)}
  className={`px-6 py-2 font-semibold rounded-md transition-all ${
    showFrontend
      ? 'bg-red-500 text-white shadow-lg ' 
      : 'bg-yellow-300 text-gray-900 shadow-lg'
  }`}
>
  Frontend
</button>
<button
  onClick={() => setShowFrontend(false)}
  className={`px-6 py-2 font-semibold rounded-md transition-all ${
    !showFrontend
      ? 'bg-red-500 text-white shadow-lg'
      : 'bg-yellow-300 text-gray-900 shadow-lg'
  }`}
>
  Full Stack
</button>

          </div>

          {/* Cards Section */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-8"
            key={showFrontend ? 'frontend' : 'fullstack'}
            variants={containerVariants}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                key={project.id}
                className="w-80 bg-slate-50 dark:bg-neutral-900 shadow-lg rounded-xl overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.12 }} 
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
              
                  <img className="rounded-t-xl w-full brightness-75" src={project.cover} alt={project.title} />
                  <div className="p-6 ">
                    <h1 className="mb-2 text-lg font-bold text-sky-500">{project.title}</h1>
                    <p className="mb-3 text-sm  ">{project.desc}</p>
                    <div className="flex gap-3">
                      <a
                        href={project.live}
                        target="_blank"
                        className="inline-flex items-center text-white bg-sky-900 hover:bg-sky-950 font-bold rounded-lg text-sm px-5 py-2.5"
                        rel="noreferrer"
                      >
                        Live
                      </a>
                      <a
                        href={project.code}
                        target="_blank"
                        className="inline-flex items-center text-white bg-gray-700 hover:bg-gray-900 font-bold rounded-lg text-sm px-5 py-2.5"
                        rel="noreferrer"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-700 dark:text-white">No projects available.</p>
            )}
          </motion.div>
        </motion.div>

        {/* Snowfall Effect
        <Snowfall
          color={window.matchMedia('(prefers-color-scheme: dark)').matches ? '#ffeb3b' : '#c9c9c9'}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
          }}
        /> */}
      </section>
    </>
  );
}

export default Project;
