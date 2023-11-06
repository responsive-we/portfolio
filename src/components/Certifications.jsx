import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motions";

const CertificationCard = ({ certificate }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ backgroundColor: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={certificate.date}
      iconStyle={{background: certificate.iconBg}}
      icon={<div className="w-full h-full flex justify-center items-center rounded-full border-2 border-primary ">
        <img src={certificate.icon} alt={certificate.company_name} className="w-[60%] h-[60%] object-contain" />
      </div>}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{certificate.title}</h3>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2 ">
        <img src={certificate.img} alt={certificate.name} className="cursor-pointer" onClick={()=>{
          window.open(certificate.link, "_blank")
        }} />
      </ul>
    </VerticalTimelineElement>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have done so Far</p>
        <h2 className={`${styles.sectionHeadText}`}>Courses Completed.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {certificates.map((certificate, index) => (
            <CertificationCard key={index} certificate={certificate} />
          ))}
        </VerticalTimeline>
        <h3 className={`${styles.sectionHeadText} text-center violet-gradient-text`}>View more of my Certifications on my <span onClick={()=>window.open("https://www.linkedin.com/in/mohammad-ayan-184624258/","_blank")} className=" cursor-pointer hover:underline hover:decoration-purple-800 ">Linkedin.</span></h3>
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
