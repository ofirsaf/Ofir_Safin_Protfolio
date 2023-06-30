import {
  faLinkedin,
  faInstagram,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "devicon/devicon.min.css"; // for devicon
import logo from "../assets/Ofir_Logo.png";
import resc4youAdmin from "../assets/Resc4YouAdmin.png";
import resc4you from "../assets/Resc4You.png";
import Calculater from "../assets/Calculater.png";
const navbarData = [
  { id: 1, name: "About", link: "/", iconId: "linkedin" },
  { id: 2, name: "Projects", link: "/projects", iconId: "instagram" },
  { id: 3, name: "Contact", link: "/contact", iconId: "facebook" },
];

const iconData = [
  {
    id: "linkedin",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/%D7%90%D7%95%D7%A4%D7%99%D7%A8-%D7%A1%D7%A4%D7%99%D7%9F-industry-and-management/",
    color: "#0077B5",
  },
  {
    id: "gitHub",
    icon: faGithub,
    link: "https://github.com/ofirsaf",
    color: "#000000",
  },
  {
    id: "instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/ofir_safin/?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
    color: "#E1306C",
  },
  {
    id: "whatsapp",
    icon: faWhatsapp,
    link: "https://wa.me/972526466685",
    color: "#25D366",
  },
];
const AboutData = {
  title: "About",
  text: `Hi, I'm Ofir Safin, a new Industrial Engineering graduate with a focus on Information Systems. I have a passion for full-stack development, data analysis, and automation. This self-built portfolio shows my commitment to the field. Eager to tackle tech industry challenges, please explore my work to see my skills in action`,
};

const RandomFacts = [
  {
    id: 1,
    title: "I'm a big fan of Maccabi Tel Aviv and Liverpool",
  },
  {
    id: 2,
    title: "I have a dog named Lusi",
  },
  {
    id: 3,
    title: "I have one brother and one sister",
  },
  {
    id: 4,
    title: "I love to play soccer and tennis",
  },
  {
    id: 5,
    title: "I love to travel",
  },
  {
    id: 6,
    title: "Hamburger is my favorite food",
  },
  {
    id: 7,
    title: "Coffee is my favorite drink",
  },
  {
    id: 8,
    title: "I love to watch movies and TV shows",
  },
];

const skillsData = [
  { name: "JavaScript", icon: <i className="devicon-javascript-plain"></i> },
  { name: "React.js", icon: <i className="devicon-react-original"></i> },
  { name: "Node.js", icon: <i className="devicon-nodejs-plain"></i> },
  {
    name: "MongoDB",
    icon: <i className="devicon-mongodb-plain-wordmark"></i>,
  },
  {
    name: "ASP.NET",
    icon: <i className="devicon-dot-net-plain-wordmark"></i>,
  },
  { name: "GitHub", icon: <FontAwesomeIcon icon={faGithub} /> },
  { name: "C#", icon: <i className="devicon-csharp-plain"></i> },
  { name: "SQL", icon: <i className="devicon-mysql-plain"></i> },
  { name: "HTML", icon: <i className="devicon-html5-plain-wordmark"></i> },
  { name: "CSS", icon: <i className="devicon-css3-plain-wordmark"></i> },
  { name: "C++", icon: <i className="devicon-cplusplus-line-wordmark"></i> },
  // add as many skills as you want
];

const educationData = [
  {
    id: 1,
    title:
      "As an Industrial Engineering and Management gradute at Ruppin Academic Center",
  },
  {
    id: 2,
    title: "Specialized in Information Systems",
  },
  {
    id: 3,
    title: "Recipient of Dean's List Honors for 2020-2021 year",
  },
  {
    id: 4,
    title: "Recipient of Dean's List Honors for 2021-2022 year",
  },
  {
    id: 5,
    title: "GPA of 91.5",
  },
  {
    id: 6,
    title:
      "Grades: client-side development- 97, server-side development- 99, Database management- 99, analysis and design of information systems- 91",
  },
  {
    id: 7,
    title:
      "won first place in a social project focused on finding technological solutions for the challenges faced by the elderly",
  },
];
const projectText = {
  title: "Projects",
  text: `Here are some projects I've worked hard on in my spare time. I'm proud of them and I encourage you to check them out - they're worth your time`,
};
const projectData = [
  {
    id: 1,
    title: "Portfolio Website",
    text: `This portfolio website, crafted entirely using my full-stack development skills, is a testament to my commitment to this field. As I step into the tech industry, I look forward to leveraging my expertise to tackle new challenges and leave my mark. So, go ahead and explore my portfolio to witness my passion for full-stack development in action`,
    image: logo,
    link: "https://github.com/ofirsaf/Ofir_Safin_Protfolio.git",
    technologies: ["JavaScript", "React"],
  },
  {
    id: 2,
    title: "Resc4You Admin",
    text: `In this project, I built a website for the admin of the Resc4You website.
    The admin can manage the requests and users,
     in addition the admin have a dashboard with statistics about the website.`,
    image: resc4youAdmin,
    link: "https://github.com/rupcgroup49/resc4you_admin.git",
    technologies: ["JavaScript", "React", "ASP.NET", "Sql Server", "Firebase"],
  },
  {
    id: 3,
    title: "Resc4You",
    text: `The project has 2 users: citizens and volunteer.
     Citizens submit help requests via POST, and a smart 
     algorithm matches them with available volunteers based on specialization 
     and location. Real-time communication and push 
     notifications are used to update status and alert 
     volunteers of new requests`,
    image: resc4you,
    link: "https://github.com/rupcgroup49/Resc4You_Frontend",
    technologies: [
      "JavaScript",
      "React Native",
      "ASP.NET",
      "Sql Server",
      "Firebase",
    ],
  },
  {
    id: 4,
    title: "Calculater",
    text: `This is a calculater app that I built using React.js. 
    The app is responsive and can be used on any device`,
    image: Calculater,
    link: "https://github.com/ofirsaf/my_calculater_app.git",
    technologies: ["JavaScript", "React"],
  },
];
export {
  navbarData,
  iconData,
  AboutData,
  RandomFacts,
  skillsData,
  educationData,
  projectText,
  projectData,
};
