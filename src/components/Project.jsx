import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Snowfall from 'react-snowfall';
import projects from '../projectData';

function Project() {
  const [showFrontend, setShowFrontend] = useState(true);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Filter projects based on the selected tab (Frontend or Full Stack)
  useEffect(() => {
    const newFilteredProjects = projects.filter((val) =>
      showFrontend ? val.type === 'Frontend' : val.type === 'FullStack'
    );
    setFilteredProjects(newFilteredProjects);
  }, [showFrontend]); // Re-filter projects only when showFrontend changes

  // Animation Variants for the container (Staggered)
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

  // Animation for each card item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 4, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section id="project" className="scroll-smooth h-screen mt-5">
        <motion.div
          key={showFrontend ? 'frontend' : 'fullstack'} // Key ensures animation triggers on tab change
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        >
          <h2 className="text-5xl font-bold text-sky-400 text-center mt-3">
            My Latest Projects
          </h2>

          {/* Tabs with Active State Styling */}
          <div id="tab-container" className="tab-container">
            <div className="container-fluid">
              <div className="text-center col-md-10 col-md-offset-1">
                <input
                  id="tab1"
                  type="radio"
                  name="tabs"
                  checked={showFrontend} // Make sure the state is reflected in the input
                  onChange={() => setShowFrontend(true)} // Update state when Frontend tab is clicked
                />
                <label
                  htmlFor="tab1"
                  className={`text-2xl ${showFrontend ? 'text-red-500' : 'text-white'}`} // Apply active class
                >
                  Frontend
                </label>
                <input
                  id="tab2"
                  type="radio"
                  name="tabs"
                  checked={!showFrontend} // Make sure the state is reflected in the input
                  onChange={() => setShowFrontend(false)} // Update state when Full Stack tab is clicked
                />
                <label
                  htmlFor="tab2"
                  className={`text-2xl ${!showFrontend ? 'text-red-500' : 'text-white'}`} // Apply active class
                >
                  Full Stack
                </label>
              </div>
            </div>
          </div>

          {/* Cards Animation */}
          <motion.div
            className="flex flex-row flex-wrap"
            key={showFrontend ? 'frontend' : 'fullstack'} // Ensures re-animation on tab switch
            variants={containerVariants}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="w-52 md:w-72  flex-wrap hover:scale-105 mt-5 hover:shadow-md hover:shadow-cyan-400 m-auto mb-4 border rounded-lg shadow bg-neutral-900 border-cyan-400"
                  variants={itemVariants}
                >
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src={`/assets/${project.cover}`}
                      alt={project.title}
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-sky-600">
                        {project.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal md:text-base text-xs text-white text-wrap">{project.desc}</p>
                    <a
                      href={project.live}
                      target="_blank"
                      className="inline-flex mr-4 items-center text-black bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      className="inline-flex items-center dark:text-black font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-white">No projects available.</p>
            )}
          </motion.div>
        </motion.div>

        <Snowfall
          color="#ffeb3b"
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
          }}
        />
      </section>
    </>
  );
}

export default Project;
