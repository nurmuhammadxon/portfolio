// id import
import { v4 as uuidv4 } from "uuid";
// icons import
import {
  FaPhoneAlt,
  FaTelegramPlane,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import {
  IoMail,
  IoLogoSass,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoFirebase,
} from "react-icons/io5";
import { FcAcceptDatabase, FcPuzzle } from "react-icons/fc";
import { TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
// images import
import todoList from "../assets/TodoList.png";
import thmdb from "../assets/THMDB.png";
import calculator from "../assets/Calculator.png";
import onlineStore from "../assets/onlineStore.png";
import counterReact from "../assets/counter-reactjs.png";
import counterJS from "../assets/counter-js.png";

export const headerNavBar = [
  {
    id: uuidv4(),
    title: "Home",
    link: "/",
  },
  {
    id: uuidv4(),
    title: "Projects",
    link: "/projects",
  },
  {
    id: uuidv4(),
    title: "BLog",
    link: "/blog",
  },
  {
    id: uuidv4(),
    title: "Contact",
    link: "/contact",
  },
];

export const mySkill = [
  {
    id: uuidv4(),
    name: "HTML",
    icon: IoLogoHtml5,
    color: "#E65100",
  },
  {
    id: uuidv4(),
    name: "CSS",
    icon: IoLogoCss3,
    color: "#0277BD",
  },
  {
    id: uuidv4(),
    name: "SCSS",
    icon: IoLogoSass,
    color: "#cc6699",
  },
  {
    id: uuidv4(),
    name: "JavaScript",
    icon: FaJs,
    color: "#f7df1e",
  },
  {
    id: uuidv4(),
    name: "React",
    icon: FaReact,
    color: "#80deea",
  },
  {
    id: uuidv4(),
    name: "Redux",
    icon: TbBrandRedux,
    color: "#764abc",
  },
  {
    id: uuidv4(),
    name: "TailwindCss",
    icon: RiTailwindCssFill,
    color: "#00acc1",
  },
  {
    id: uuidv4(),
    name: "Bootstrap",
    icon: FaBootstrap,
    color: "#7c4dff",
  },
  {
    id: uuidv4(),
    name: "UI Libraries",
    icon: FcPuzzle,
    color: "",
  },
  {
    id: uuidv4(),
    name: "Git",
    icon: FaGitAlt,
    color: "#F4511E",
  },
  {
    id: uuidv4(),
    name: "Firebase",
    icon: IoLogoFirebase,
    color: "#ff8f00",
  },
  {
    id: uuidv4(),
    name: "Axios",
    icon: FcAcceptDatabase,
    color: "",
  },
  {
    id: uuidv4(),
    name: "Vite",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        <path
          fill="#9575cd"
          d="M44.86,9.976L25.023,45.448c-0.41,0.732-1.462,0.737-1.878,0.008L2.915,9.979 C2.462,9.185,3.141,8.223,4.041,8.384l19.859,3.55c0.127,0.023,0.256,0.022,0.383-0.001l19.443-3.544 C44.623,8.225,45.305,9.18,44.86,9.976z"
        ></path>
        <path
          fill="#fbc02d"
          d="M33.574,3.01L19.019,5.862c-0.239,0.047-0.416,0.25-0.431,0.493l-0.895,15.121 c-0.021,0.356,0.306,0.633,0.654,0.552l4.052-0.935c0.379-0.087,0.722,0.246,0.644,0.628l-1.204,5.895 c-0.081,0.397,0.291,0.736,0.679,0.618l2.503-0.76c0.388-0.118,0.761,0.222,0.679,0.62l-1.913,9.26 c-0.12,0.579,0.651,0.895,0.972,0.398l0.215-0.332l11.86-23.669c0.199-0.396-0.144-0.848-0.579-0.764l-4.171,0.805 c-0.392,0.076-0.725-0.289-0.615-0.673l2.722-9.438C34.301,3.299,33.967,2.933,33.574,3.01z"
        ></path>
      </svg>
    ),
    color: "",
  },
  {
    id: uuidv4(),
    name: "Figma",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        <path
          fill="#e64a19"
          d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
        ></path>
        <path
          fill="#7c4dff"
          d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
        ></path>
        <path
          fill="#66bb6a"
          d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
        ></path>
        <path
          fill="#ff7043"
          d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
        ></path>
        <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
      </svg>
    ),
    color: "",
  },
];

export const projectData = [
  {
    id: uuidv4(),
    title: "Todo list",
    des: "React, React Redux va TailwindCss orqali Todo list sahifasi",
    technology: ["React", "Redux", "TailwindCss"],
    link: "https://todo-list-theta-dusky.vercel.app/",
    image: todoList,
  },
  {
    id: uuidv4(),
    title: "Online Store",
    des: "React, TailwindCss va Axios orqali Online do'kon uchun qilingan web sayt. Diplom ishi uchun qilingan lekin olib foydalansa ham bo'ladi",
    technology: ["React", "Axios", "TailwindCss"],
    link: "https://online-store-tau-five.vercel.app/",
    image: onlineStore,
  },
  {
    id: uuidv4(),
    title: "The Movie Data Base",
    des: "React, React Readux, Axios va TailwindCss texnologiya orqali apilar orqali qilinga web sayt",
    technology: ["React", "Redux", "TailwindCss", "Axios"],
    link: "https://thmdb-projcet.vercel.app/",
    image: thmdb,
  },
  {
    id: uuidv4(),
    title: "CalCulator",
    des: "HTML, CSS va JavaScript texnologiyalari orqali qilingan calculator web sayt",
    technology: ["HTML", "CSS", "JavaScript"],
    link: "https://calculator-sigma-flame-97.vercel.app/",
    image: calculator,
  },
  {
    id: uuidv4(),
    title: "Counter Redux-tooklit",
    des: "React.js, CSS, TailwindCss va Redux-Tooklit texnologiyalari orqali qilingan counter web sayt",
    technology: ["React", "CSS", "Redux", "Redux-Tooklit"],
    link: "https://react-counter-three.vercel.app/",
    image: counterReact,
  },
  {
    id: uuidv4(),
    title: "Counter Redux JavaScript",
    des: "HTMl, SCSS, TailwindCss va Redux texnologiyalari orqali qilingan counter web sayt",
    technology: ["HTML", "SCSS", "Redux", "JavaScript"],
    link: "https://react-counter-mht5.vercel.app/",
    image: counterJS,
  },
];

export const contacts = [
  {
    id: uuidv4(),
    title: "+998 (93) 245 20 05",
    icon: <FaPhoneAlt />,
    link: "tel:+998932452005",
  },
  {
    id: uuidv4(),
    title: "n_fozilovich",
    icon: <FaTelegramPlane />,
    link: "https://t.me/n_fozilovich",
  },
  {
    id: uuidv4(),
    title: "muhiddinovnurmuhammadxon1@gmail.com",
    icon: <IoMail />,
    link: "mailto:muhiddinovnurmuhammadxon1@gmail.com",
  },
];
