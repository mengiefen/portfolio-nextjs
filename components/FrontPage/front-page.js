import Image from 'next/image';
import Button from '../Buttons/buttons';
import Layout from '../Layout/layout';
import Container from './front-page.styled';
import bgImg from '../../public/picture.png';

const FrontPage = () => {
  return (
    <Layout>
      <Container>
        <aside className="text-area">
          <h1 className="heading">
            Hello, <span>I&apos;m Mengstu</span>
          </h1>
          <h2 className="sub-heading">I&apos;m Full-stack Developer</h2>
          <p className="paragraph">
            I can help you build a product , feature or website. Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don’t hestiate to contact me.
          </p>
          <Button text="Contact me" />
        </aside>
        <figure>
          <span className="overlay"></span>
          <Image
            src={bgImg}
            width={1967}
            height={1821}
            alt="picture of me"
            className="img"
          />
        </figure>
      </Container>
    </Layout>
  );
};

export default FrontPage;
