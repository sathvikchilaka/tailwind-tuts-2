import { BiLogoPostgresql } from "react-icons/bi";
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "motion/react";

const TechnologiesSection = () => {
  const iconVariants = (duration) => {
    return {
      initial: { y: -15 },
      animate: {
        y: [15, -15],
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    };
  };

  return (
    <div className="pb-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className=""
        >
          {" "}
          <SiMongodb className="px-4 w-28 h-28 text-green-500 text-7xl" />{" "}
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className=""
        >
          {" "}
          <FaReact className="px-4 w-28 h-28 text-cyan-400 text-7xl" />{" "}
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className=""
        >
          {" "}
          <TbBrandNextjs className="px-4 w-28 h-28 text-white text-7xl" />{" "}
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className=""
        >
          {" "}
          <BiLogoPostgresql className="px-4 w-28 h-28 text-7xl text-sky-700" />{" "}
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className=""
        >
          {" "}
          <FaNodeJs className="px-4 w-28 h-28 text-7xl text-green-500 " />{" "}
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className=""
        >
          {" "}
          <FaAngular className="px-4 w-28 h-28 text-7xl text-red-600"/>{" "}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechnologiesSection;
