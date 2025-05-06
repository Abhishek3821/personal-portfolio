// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "AXIS College , Kanpur",
    date: "Sept 2022 - July 2024",
    grade: "7.86 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from AXIS College , Kanpur. During my time at Axis, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as  Algorithms, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Axis College has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    school: "P.P.N Pg College ,kanpur",
    date: "Sept 2019 - Aug 2022",
    grade: "6.4 CGPA",
    desc: "I completed my Bachelor's degree in Computer Science (B.C.A) from P.P.N College, Kanpur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Web Development and Database Management Systems, My time at Ppn College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Computer Application ",
  },
  {
    id: 2,
    school: "Dayanand Dinanath Education Centre , Kanpur",
    date: "Apr 2018 - March 2019",
    desc: "I completed my class 12 education from DDEC Kanpur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Ace Global Logistics",
    description:
      "Ace Global Logistic is a professional logistics and freight forwarding company offering comprehensive shipping solutions, including air, sea, and land transportation. Their services cover customs clearance, warehousing, and supply chain management, ensuring efficient and timely delivery for businesses worldwide",
    image: githubdetLogo,
    tags: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "API",
      "Express",
      "Node.js",
    ],
    webapp: "https://www.acegloballogistic.com/",
  },
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and experience in web development. It highlights my technical expertise, creative work, and passion for building responsive, user-friendly digital solutions.",
    image: csprepLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript", "Emailjs"],
    webapp: "https://personal-portfolio-sigma-livid.vercel.app/",
  },
  {
    id: 2,
    title: "Calculator",
    description:
      "A calculator is a device or software used to perform mathematical operations like addition, subtraction, multiplication, and division.",
    image: movierecLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    webapp: "https://calculator-through-reactjs.vercel.app/",
  },
  {
    id: 3,
    title: "Email Validator NPM Package",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
];
