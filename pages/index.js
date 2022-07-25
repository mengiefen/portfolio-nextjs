import Head from 'next/head';
import About from '../components/About/about';
import Contact from '../components/Contact/contact';
import FrontPage from '../components/FrontPage/front-page';
// import Portfolio from '../components/Portfolio/portfolio';
import Skills from '../components/Skills/skills';
import Footer from '../components/Footer/footer';
import Carousel1 from '../components/Coursel/Carousel1';

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
      {/* <Portfolio /> */}
      <Carousel1 />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
