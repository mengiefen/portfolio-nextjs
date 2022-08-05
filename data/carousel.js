import covid19 from '../public/coursel/covid-19.png';
import portfolio1 from '../public/coursel/portfolio-mockup1.png';
import tourHunter from '../public/coursel/tour-hunter.png';
import leaderBoard from '../public/coursel/leaderboard.png';
import math from '../public/coursel/math.png';
import todoList from '../public/coursel/todolist.png';
import awesomeBook from '../public/coursel/awesomeBook.png';
import shopping from '../public/coursel/cm-shopping.png';
import cmShopping from '../public/coursel/cm-shopping.png';
import bamenServices from '../public/coursel/bamen-services.png';
import bookStore from '../public/coursel/bookStore.png';
import spaceTravel from '../public/coursel/space-travel.png';
import easyBank from '../public/coursel/easy-bank.png';
// utilityApp, blogApp, bookStore, tourHunter, todoList, awesomeBook, spaceTravel, capstone1, capstone2,

const slideData = [
  {
    id: 1,
    img: portfolio1,
    title: 'Portfolio',
    desc: 'A simple portfolio website that is built with HTML, CSS, and JavaScript.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https:/mengiefen.github.io/personal-portfolio/',
    sourceLink: 'https:/github.com/mengiefen/personal-portfolio',
    badge: '#1FB57B',
    textColor: '#011936FF',
  },

  {
    id: 2,
    img: covid19,
    title: 'Covid Info',
    desc: 'An SPA website built with React and Redux. In this application, the user is able to see covid data.',
    techs: ['React', 'Redux', 'styled-component', 'REST API'],
    liveLink: 'https:/mengiefen.github.io/covid19-info-center/',
    sourceLink: 'https:/github.com/mengiefen/covid19-info-center',
    badge: '#F9DC5CFF',
    textColor: '#011936FF',
  },

  {
    id: 3,
    img: tourHunter,
    title: 'Tour Hunter',
    desc: 'The Tour Hunter is full-feature website which gives users to select options for tours around the world to reserve and the admins to add and delete tours.',
    techs: ['Ruby on Rails', 'React/Redux', 'PostgrSQL', 'TailwindCSS'],
    liveLink: 'https:/tourhunterapp.herokuapp.com/',
    sourceLink: 'https:/github.com/mengiefen/tour-hunter',
    badge: '#F37878',
    textColor: '#011936FF',
  },

  {
    id: 4,
    img: leaderBoard,
    title: 'LeaderBoard',
    desc: 'Leaderboard App is built with webpack and ES6 features, notably modules. This appp uses the Leaderboard API service to store user scores.',
    techs: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    liveLink: 'https:/mengiefen.github.io/leaderboard-list-app/',
    sourceLink: 'https:/github.com/mengiefen/leaderboard-list-app',
    badge: '#1FB57B',
    textColor: '#011936FF',
  },

  {
    id: 5,
    img: math,
    title: 'MathMagic',
    desc: '  An SPA app that allows users to make simple calculations and generate random motivation quotes.',
    techs: ['JavaScript', 'REACT', 'CSS', 'REST API'],
    liveLink: ' https:/menge-math.herokuapp.com/',
    sourceLink: 'https:/github.com/mengiefen/MathMagician-React ',
    badge: '#F9DC5CFF',
    textColor: '#011936FF',
  },

  {
    id: 6,
    img: todoList,
    title: 'TodoList',
    desc: " A simple but useful responsive  website that can be used to manage users' todos.",
    techs: ['JavaScript', 'HTML', 'CSS'],
    liveLink: 'https://mengiefen.github.io/todo-list/',
    sourceLink: 'https://github.com/mengiefen/todo-list',
    badge: '#F37878',
    textColor: '#011936FF',
  },

  {
    id: 7,
    img: awesomeBook,
    title: 'Awesome Book',
    desc: ' A simple book listing website that allows users to add/remove books from the list.',
    techs: ['JavaScript', 'HTML', 'CSS'],
    liveLink: 'https://mengiefen.github.io/awesome-books-es6/',
    sourceLink: 'https://github.com/mengiefen/awesome-books-es6',
    badge: '#1FB57B',
    textColor: '#011936FF',
  },

  {
    id: 8,
    img: cmShopping,
    title: 'CM Shopping',
    desc: ' The CM Shopping Website consumes DummyJSON and Involvement APIs. The website lists different shopping items and allows users to like and leave a comment.',
    techs: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    liveLink: 'https:/crclothier.github.io/JavaScript-Capstone/',
    sourceLink: 'https:/github.com/CRClothier/JavaScript-Capstone',
    badge: '#F9DC5CFF',
    textColor: '#011936FF',
  },

  {
    id: 9,
    img: bamenServices,
    title: 'BaMen Services',
    desc: "In this project, the 'BaMen Service' responsive website is built with HTML and CSS and Vanilla JavaScript",
    techs: ['JavaScript', 'HTML', 'SASS', 'CSS'],
    liveLink: 'https:/mengiefen.github.io/microverse-capstone-01/',
    sourceLink: 'https:/github.com/mengiefen/microverse-capstone-01',
    badge: '#F37878',
    textColor: '#011936FF',
  },

  {
    id: 10,
    img: bookStore,
    title: 'Book Store',
    desc: 'This application allows the user to display a list of books, add new book , and remove a selected book.',
    techs: ['REACT', 'CSS'],
    liveLink: 'https:/mengiefen.github.io/book-store-react-redux/',
    sourceLink: 'https:/github.com/mengiefen/book-store-react-redux',
    badge: '#1FB57B',
    textColor: '#011936FF',
  },

  {
    id: 11,
    img: spaceTravel,
    title: 'Space Travel',
    desc: 'This is app is inteded to be a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    techs: ['REACT', 'SASS', 'React-Bootstrap', 'Redux'],
    liveLink: '  https:/mengiefen.github.io/space-travel/',
    sourceLink: ' https:/github.com/mengiefen/space-travel',
    badge: '#F9DC5CFF',
    textColor: '#011936FF',
  },

  {
    id: 12,
    img: easyBank,
    title: 'Easy Bank',
    desc: 'EasyBank responsive landing page built as an exercise in FrontEndMentor.',
    techs: ['HTML', 'SASS', 'JavaScript'],
    liveLink: 'https:/mengiefen.github.io/easybank-landing-page/',
    sourceLink: 'https:/github.com/mengiefen/easybank-landing-page',
    badge: '#F37878',
    textColor: '#011936FF',
  },
];

export default slideData;
