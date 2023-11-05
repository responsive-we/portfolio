import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motions";
import {SectionWrapper} from '../hoc/'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] shadow-card rounded-[20px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] px-12 min-h-[280px] flex justify-evenly items-center flex-col"
         >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] text-center font-bold">{title}</h3>
         </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  const aboutConstant =
    "Welcome to my portfolio! I'm a skilled Full Stack Developer experienced in React.js, Express, Node.js, MongoDB, HTML, CSS, and JavaScript. With a history of successful projects in e-commerce, chat applications, and more.I warmly invite you to explore my work and consider me for your next project. If you have a vision in mind, let's collaborate to bring it to life. Your ideas, combined with my skills and dedication, can result in remarkable outcomes. Let's embark on this creative journey together!";
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {aboutConstant}
      </motion.p>
      <div className="mt-5 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard index={index} key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About , "about");
