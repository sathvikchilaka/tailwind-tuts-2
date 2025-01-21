import { FaArrowDown, FaDownload } from "react-icons/fa";
import profilePic from "../assets/sathvikchilaka_pf.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "motion/react";
import { FiDownload } from "react-icons/fi";

const HeroSection = () => {

  const childVariant = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const containerVariant = {
    intial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.7,
      },
    },
  };

  return (
    <div className="flex flex-wrap lg:flex-row-reverse">
      <div className="w-full lg:w-1/2">
        <div className="flex justify-center lg:p-8">
          <motion.img
            src={profilePic}
            alt="Sathvik Chilaka"
            className="border border-stone-900 rounded-3xl"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <motion.div
          variants={containerVariant}
          animate='animate'
          initial="initial"
          className="flex flex-col items-center lg:items-start mt-10"
        >
          <motion.h2
            variants={childVariant}
            className="pb-2 text-4xl tracking-tighter lg:text-8xl"
          >
            Sathvik Chilaka
          </motion.h2>
          <motion.span
            variants={childVariant}
            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent text-3xl tracking-tight"
          >
            Frontend Developer
          </motion.span>
          <motion.p
            variants={childVariant}
            className="my-2 max-w-lg py-6 text-xl leading-8 tracking-tighter"
          >
            {" "}
            {HERO_CONTENT}{" "}
          </motion.p>
          <motion.a
            variants={childVariant}
            href="../../SathvikChilakaResume.pdf"
            rel="noopener noreferrer"
            target="_blank"
            download
            className="inline-flex items-center justify-center bg-white text-stone-800 rounded-lg py-2 px-4 text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Download Resume
            <FiDownload className="text-stone-800 ml-2" strokeWidth={3} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
