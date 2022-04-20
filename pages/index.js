import Head from 'next/head';
import About from '../components/About/about';
import FrontPage from '../components/FrontPage/front-page';
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
    </main>
  );
};

export default Home;
