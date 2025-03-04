import { motion } from 'framer-motion';
import techData from '../../techData';


function About() {
  // Define common animation settings
  const animationSettings = {
    initial: { x: -200, opacity: 0 }, // Start off-screen to the left and invisible
    animate: { x: 0, opacity: 1 },   // Move into view and become visible
    transition: { type: 'spring', stiffness: 50 }, // Spring animation
  };

  return (
    <>
      <section id="about" className="scroll-smooth dark:text-white px-6">
        {/* Animated "About Me" heading */}
        <motion.h2
          className="text-pink-400 text-5xl mt-6 py-5 mb-3 font-bold text-center"
          {...animationSettings}
        >
          About Me
        </motion.h2>

        {/* Animated about me paragraph */}
        <motion.div
          className=" w-auto m-auto py-4 text-pretty mt-4 px-8 rounded-2xl"
          {...animationSettings}
          transition={{ ...animationSettings.transition, delay: 0.2 }} // Add delay for staggered effect
        >
          <p className="abt text-sm lg:text-2xl md:text-lg text-wrap font-bold">
          Hey there! 👋 I’m Animesh Rathore, a passionate and dedicated final-year Computer Science Engineering (CSE) student. My journey in tech revolves around continuous learning, problem-solving, and creating impactful solutions with the MERN stack. I thrive on crafting clean, efficient, and scalable code that aligns with industry best practices</p>

          <br></br>
<p className='abt text-sm lg:text-2xl md:text-lg text-wrap font-bold'>
With a strong foundation in programming and a deep love for development, I’ve honed my skills in technologies like React JS, Node.js, MongoDB, and Express.js. Whether it&apos;s front-end design, back-end logic, or full-stack solutions, I enjoy building projects that solve real-world challenges.
          </p>
        </motion.div>

        {/* Animated "My Tech Stack" heading */}
        <motion.h2
          className="text-pink-400 text-5xl mt-4 mb-5 text-center font-bold"
          {...animationSettings}
          transition={{ ...animationSettings.transition, delay: 0.4 }} // Add further delay
        >
          My Tech Stack
        </motion.h2>

        {/* Animated tech stack cards */}
        <div className="flex flex-row justify-center  gap-8 flex-wrap text-sky-600 mt-6 stack py-9">
          {techData.map((tech, index) => (
            <motion.div
              key={tech.label}
              className="flex flex-col border-2 border-green-600 h-32 rounded-lg items-center w-32 justify-center"
              {...animationSettings}
              transition={{
                ...animationSettings.transition,
                delay: 0.6 + index * 0.1, // Stagger each card animation
              }}
            >
              <img width={64} height={64} src={tech.src} alt={tech.label} />
              <p>{tech.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
