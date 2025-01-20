import { PROJECTS } from "../constants";
import { motion } from "motion/react";

const ProjectsSection = () => {
  const projectsVariants = () => {
    return {
      initial: { opacity: 0 },
      whileInView: {
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
    };
  };

  return (
    <div className="pb-4">
      <motion.h2
      initial = {{ opacity: 0, y: -50 }}
      whileInView = {{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="my-20 text-center text-4xl">Projects</motion.h2>
      <div className="flex flex-col items-center lg:justify-start lg:items-start lg:flex-wrap lg:flex-row gap-y-8">
        {PROJECTS.map((project, key) => (
          <motion.div
            className="w-full lg:w-1/4 flex items-center gap-y-4 flex-col p-4"
            key={key}
          >
            <img
              src={project.image}
              alt={project.title}
              width={250}
              height={250}
              className="rounded border border-stone-900"
            />
            <motion.div
              variants={projectsVariants()}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.2 }}
              className="flex w-full flex-col items-center gap-y-4 "
            >
              <h3 className="font-semibold text-2xl">{project.title}</h3>
              <span className="text-stone-400 text-center w-3/4">
                {" "}
                {project.description}{" "}
              </span>
              <div className="w-full max-w-xl lg:w-3/4 flex flex-wrap justify-center gap-2">
                {project.technologies.map((tech, key) => (
                  <span
                    className="rounded tracking-tighter bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
