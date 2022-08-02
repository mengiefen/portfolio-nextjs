import Image from "next/image";
import { ButtonOutline } from "../Buttons/buttons.styled";
import Layout from "../Layout/layout";
import Container from "./front-page.styled";
import bgImg from "../../public/picture.png";
import SocialMedia from "../SocialMedia/SocialMedia";
import Typed from "react-typed";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../../data/particlesConfig.json";

const FrontPage = () => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  return (
    <Layout>
      <Container id="home" whileInView={{ opacity: 0.999 }}>
        <div style={{ zIndex: "-1" }}>
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
            Hello, <span>I&apos;m Mengstu</span>
          </h1>
          <h2 className="sub-heading">
            <Typed
              strings={["Frontend", "Backend", "Fullstack"]}
              typeSpeed={80}
              backSpeed={80}
              backDelay={1000}
              loop
            />
            Developer
          </h2>
          <p className="paragraph">
            I can help you build a product, feature, or website. Look through
            some of my work and experience! If you like what you see and have a
            project you need to be coded, don’t hesitate to contact me.
          </p>
          <ButtonOutline
            href="#contact"
            initial={{ y: 0, x: 20 }}
            whileInView={{ y: 20, x: 0, scale: [0.6, 1, 0.75, 1] }}
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
    </Layout>
  );
};

export default FrontPage;
