import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motions";
import { social_media_handles } from "../constants";
import {AiOutlineGithub,AiOutlineLinkedin,AiOutlineInstagram} from 'react-icons/ai'
const Social_media_handleCard = ({
  index,
  text,
  link,
  company,
  user_name,
}) => {
  const loadIcons = () => {
    const classVar="cursor-pointer"
    if(company === 'Github'){
      return <AiOutlineGithub size={30} className={classVar} onClick={()=>window.open(link,"_blank")}/>
    }
    else if(company === 'Linkedin'){
      return <AiOutlineLinkedin size={30} className={classVar}  onClick={()=>window.open(link,"_blank")} />
    }
    else if(company === 'Instagram'){
      return <AiOutlineInstagram size={30} className={classVar}  onClick={()=>window.open(link,"_blank")}/>
    }
  }
  return (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="
   bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">&#34;</p>
    <div className="mt-1">
      <p className="text-white leading-wider text-[18px]">{text}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">&#64;</span>
            {user_name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            on {company}
          </p>
        </div>
        {loadIcons()}
      </div>
    </div>
  </motion.div>
)}
const Social_media_handles = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Connect With Me</p>
          <h2 className={`${styles.sectionHeadText}`}>Social Media handles.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {social_media_handles.map((social_media_handle, index) => (
          <Social_media_handleCard key={social_media_handle.user_name} index={index} {...social_media_handle} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Social_media_handles, "social_media_handles");
