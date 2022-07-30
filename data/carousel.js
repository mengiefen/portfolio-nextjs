import desktop from "../public/coursel/desktop.png";
// import bookStore from '../public/coursel/book-store.png';
import covid19 from "../public/coursel/covid-19.png";
import covidA from "../public/coursel/covid-a.png";
import portfolio from "../public/coursel/portfolio-mockup.png";
import portfolio1 from "../public/coursel/portfolio-mockup1.png";
import tourHunter from "../public/coursel/tour-hunter.png";
// utilityApp, blogApp, bookStore, tourHunter, todoList, awesomeBook, spaceTravel, capstone1, capstone2,

const slideData = [
  {
    id: 1,
    img: portfolio,
    title: "Portfolio",
    desc: "A simple portfolio website that is built with HTML, CSS, and JavaScript.",
    techs: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://mengiefen.github.io/personal-portfolio/",
    sourceLink: "https://github.com/mengiefen/personal-portfolio",
  },

  {
    id: 2,
    img: covid19,
    title: "Covid Info",
    desc: "A SPA website built with React and Redux. In this application, the user is able to see covid data.",
    techs: ["React", "Redux", "styled-component", "REST API"],
    liveLink: "https://mengiefen.github.io/covid19-info-center/",
    sourceLink: "https://github.com/mengiefen/covid19-info-center",
  },
  {
    id: 2,
    img: tourHunter,
    title: "Tour Hunter",
    desc: "The Tour Hunter is full-feature website which gives users to select options for tours around the world to reserve and the admins to add and delete tours.",
    techs: ["Ruby on Rails", "React/Redux", "PostgrSQL", "TailwindCSS"],
    liveLink: "https://tourhunterapp.herokuapp.com/",
    sourceLink: "https://github.com/mengiefen/tour-hunter",
  },
];

export default slideData;
