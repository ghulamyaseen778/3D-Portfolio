import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  // tesla,
  shopify,
  carrent,
  // jobit,
  // tripguide,
  threejs,
  Deskskills,
  Bids101,
  Palm,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Enginner",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Front End Developer",
    companyName: "Native Brains",
    icon: starbucks,
    iconBg: "#383E56",
    date: "JAN 2023 - FEB 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Developer",
    companyName: "Cubic (Remote)",
    icon: shopify,
    iconBg: "#383E56",
    date: "AUG 2023 - DEC 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Desk Work Solution",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "SSP 2023 - Present",
    points: [
      "Led the development and optimization of cross-platform mobile applications using React Native, ensuring smooth user experiences and high-performance features.",
      "Designed and implemented end-to-end solutions, utilizing Node.js for backend services, React.js for frontend interfaces, and Firebase for real-time database management.",
      "Developed responsive and user-friendly interfaces, leveraging modern front-end technologies and frameworks to deliver optimal experiences on both web and mobile platforms.",
      "Collaborated closely with cross-functional teams using Agile methodologies, contributing to sprint planning, code reviews, and project deployments to meet client requirements and deadlines.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Boat User App",
    description:
      "The boat ride-sharing app offers a convenient platform connecting passengers with boat owners for shared rides across water bodies.",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
    category:"mobile_application",
    liveLink:""
  },
  {
    name: "Deskskills Website",
    description:
      "DeskSkills.com is an online learning platform designed to enhance professional skills across various industries. Offering a range of courses in fields like business, technology.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Antd",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: Deskskills,
    sourceCodeLink: "https://github.com/",
    category:"website",
    liveLink:"https://deskskills.com"
  },
  {
    name: "101 Bids Website",
    description:
      "101Bids is a specialized platform offering comprehensive training for mastering the art of bidding and winning contracts. Aimed at freelancers, entrepreneurs, and business. ",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Antd",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: Bids101,
    sourceCodeLink: "https://github.com/",
    category:"website",
    liveLink:"https://101bids.deskskills.com"
  },
  {
    name: "Palm Mobile App",
    description:
      "101Bids is a specialized platform offering comprehensive training for mastering the art of bidding and winning contracts.",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: Palm,
    sourceCodeLink: "https://github.com/",
    category:"mobile_application",
    liveLink:""
  },
  
];

export { services, technologies, experiences, testimonials, projects };
