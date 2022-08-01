import Image from 'next/image';
import { ButtonOutline } from '../Buttons/buttons.styled';
import Layout from '../Layout/layout';
import Container from './front-page.styled';
import bgImg from '../../public/picture.png';
import SocialMedia from '../SocialMedia/SocialMedia';

const FrontPage = () => {
  return (
    <Layout>
      <Container id="home">
        <SocialMedia />
        <aside className="text-area">
          <h1 className="heading">
            Hello, <span>I&apos;m Mengstu</span>
          </h1>
          <h2 className="sub-heading">
            <span>Fullstack</span> Developer
          </h2>
          <p className="paragraph">
            I can help you build a product , feature or website. Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don’t hestiate to contact me.
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
