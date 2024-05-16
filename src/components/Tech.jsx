import React from 'react'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from "framer-motion";
import { textVariant } from "../utils/motions";
import { styles } from "../styles";
const Tech = () => {
  return (
    <div className='flex flex-col flex-wrap justify-center'>
        <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center">
      {
      technologies.map((tech, index) => (
        <div className='w-28 h-28 ' key={tech.name}>
        <img src={tech.icon} alt="" className='w-full h-auto filter brightness-125 ' />
        </div>
      ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, 'tech')