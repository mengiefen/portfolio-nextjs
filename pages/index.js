import Head from 'next/head';
import About from '../components/About/about';
import Coursel from '../components/Coursel/coursel';
import Contact from '../components/Contact/contact';
import FrontPage from '../components/FrontPage/front-page';
import Portfolio from '../components/Portfolio/portfolio';
import Skills from '../components/Skills/skills';

const Home = () => {
  return (
    <main>
      <Head>
        <title>Portfolio-Mengstu F.</title>
        <link rel="icon" href="./favicon.ico"></link>
      </Head>
      <FrontPage />
      <About />
      <Skills />
      <Portfolio />
      <Contact />    
    </main>
  );
};

export default Home;
