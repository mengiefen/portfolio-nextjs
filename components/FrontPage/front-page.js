import Image from 'next/image';
import { ButtonOutline } from '../Buttons/buttons.styled';
import Container from './front-page.styled';
import bgImg from '../../public/picture-1.png';
import SocialMedia from '../SocialMedia/SocialMedia';
import Typed from 'react-typed';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from '../../data/particlesConfig.json';
import FlashMessage from '../FlashMessages/FlashMessage';
const FrontPage = () => {
  const message =
    "Thanks for visiting my portfolio. I'm a passionate developer looking for new opportunities. Feel free to contact me.";
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Container id="home">
      <FlashMessage message={message} duration={100000} />

      <div style={{ zIndex: '-1' }}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          height="100vh"
          width="100vw"
          options={particlesConfig}
        />
      </div>

      <SocialMedia />
      <aside className="text-area">
        <h1 className="heading">
          <span className="greeting">
            Hi <span className="wave">👋</span>
          </span>

          <span className="my-name"> I&apos;m Mengstu</span>
        </h1>
        <h2 className="sub-heading">
          <Typed
            strings={['Frontend', 'Backend', 'Fullstack']}
            typeSpeed={80}
            backSpeed={80}
            backDelay={1000}
            loop
          />
          Developer
        </h2>
        <p className="paragraph">
          I can help you build a product, feature, or website. Look through some
          of my work and experience! If you like what you see and have a project
          you need to be coded, don’t hesitate to contact me.
        </p>
        <ButtonOutline
          href="#contact"
          whileInView={{ scale: [0.6, 1, 0.75, 1] }}
          transition={{ times: [0, 0.1, 0.9, 1] }}
        >
          Contact me
        </ButtonOutline>
      </aside>
      <figure>
        <span className="overlay"></span>
        <Image
          src={bgImg}
          width={1900}
          height={1800}
          alt="picture of me"
          className="img"
        />
      </figure>
    </Container>
  );
};

export default FrontPage;
