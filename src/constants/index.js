import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  ibm,
  threejs,
  kharido,
  monkey_news,
  chata_chat,
  node_course,
  react_course,
  github_course,
  html_css_js_course,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id:"social_media_handles",
    title:"Connect with me"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Transcriber",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const certificates = [
  {
    title: "Developing Back-End Apps with Node.js and Express",
    icon: ibm,
    iconBg: "#ffffff",
    date: "October 2023",
    img: node_course,
    link: "https://www.coursera.org/account/accomplishments/certificate/2G9Q8F3WT8XY",
  },
  {
    title: "Developing Front-End Apps with React",
    company_name: "Tesla",
    icon: ibm,
    iconBg: "#ffffff",
    date: "May 2023",
    img: react_course,
    link: "https://www.coursera.org/account/accomplishments/certificate/AJF2UYX2Z4X7",
  },
  {
    title: "Getting Started with Git and GitHub",
    company_name: "Shopify",
    icon: ibm,
    iconBg: "#ffffff",
    date: "January 2023",
    img: github_course,
    link: "https://www.coursera.org/account/accomplishments/certificate/VQNCNA68TF2U",
  },
  {
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    company_name: "Meta",
    icon: ibm,
    iconBg: "#ffffff",
    date: "January 2023",
    img: html_css_js_course,
    link: "https://www.coursera.org/account/accomplishments/certificate/RCNA46LGRFXZ",
  },
];

const social_media_handles = [
  {
    text: "This is my Linekdin profile. You can check it out to know more about me. And if you want to connect with me, you can send me a request.",
    user_name: "Mohammad Ayan",
    link: "https://www.linkedin.com/in/mohammad-ayan-184624258/",
    company: "Linkedin",
  },
  {
    text: "This is my github repository. You can find my all public projects here. Don't forget to follow me and star my repositories.",
    user_name: "responsive-we",
    link: "https://github.com/responsive-we",
    company: "Github",
  },
  {
    text: "I post about new tecnologies and other geeky stuffs on instgram as a hobby. Want to be updated with the latest technologies? Follow me.",
    user_name: "saral_tech",
    link: "https://www.instagram.com/saral_tech/",
    company: "Instagram",
  },
];

const projects = [
  {
    name: "E-commerce (Kharido)",
    description:
      "This E-commerce website is built with Next.js, Stripe, and Sanity.io. It is a fully functional e-commerce website with a shopping cart, checkout, and payment processing capabilities and a very handy CMS for managing products and orders.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
    ],
    image: kharido,
    source_code_link: "https://github.com/responsive-we/ecommerce",
    production_link: "https://ecommerce-seven-self.vercel.app/",
  },
  {
    name: "Realtime Chat Application",
    description:
      "A realtime chat application built with Node.js, Express, and Socket.io. It allows users to chat anonymously .After reloading the chat window, the chat history is deleted from the server and remains history-less",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "socketio",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chata_chat,
    source_code_link:
      "https://github.com/responsive-we/Realtime-chat-application",
  },
  {
    name: "Monkey News",
    description:
      "A news app built with React.js and NewsAPI. It allows users to browse the latest news from around the world. It helps users to stay updated with the latest news in the hustle of today's world. It also provides you with different categories of news like sports, entertainment, tech, health etc.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "newsapi",
        color: "green-text-gradient",
      },
      {
        name: "fetchapi",
        color: "pink-text-gradient",
      },
    ],
    image: monkey_news,
    source_code_link: "https://github.com/responsive-we/monkey-news",
  },
];

export { services, technologies, certificates, social_media_handles, projects };
