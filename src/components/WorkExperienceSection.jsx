import { EXPERIENCES } from "../constants";
import { motion } from "motion/react";

const WorkExperienceSection = () => {
  const experienceSpanVariant = (side) => {
    return {
      initial: { opacity: 0, x: side === "left" ? -100 : 100 },
      whileInView: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 },
      },
      viewport: { once: true },
    };
  };

  return (
    <div className="pb-4">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div className="">
        {EXPERIENCES.map((exp, key) => {
          const leftVariant = experienceSpanVariant("left");
          const rightVariant = experienceSpanVariant("right");
          return (
            <div key={key} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                variants={leftVariant}
                initial="initial"
                whileInView="whileInView"
                viewport={leftVariant.viewport}
                className="w-full lg:w-1/4"
              >
                <span className="mb-2 text-sm">{exp.year}</span>
              </motion.div>
              <motion.div
                variants={rightVariant}
                initial="initial"
                whileInView="whileInView"
                viewport={rightVariant.viewport}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h3 className="mb-2 font-semibold">
                  {exp.role} -{" "}
                  <span className="text-sm text-stone-500">{exp.company}</span>
                </h3>
                <p className="mb-4 text-stone-400">{exp.description}</p>
                {exp.technologies.map((tech, key) => (
                  <span
                    className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperienceSection;
