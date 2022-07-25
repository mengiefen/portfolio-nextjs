import Image from 'next/image';
import Container from './about.styled';
import bgImg from '../../public/picture.png';

import communication from '../../public/communication.svg';
import webdesign from '../../public/webdesign.svg';
import remotework from '../../public/remotework.svg';
import workflows from '../../public/workflows.svg';
import test from '../../public/test.svg';

import Button from '../Buttons/buttons';

const About = () => {
  return (
    <Container id="about">
      <div className="content">
        <figure className="img">
          <Image
            src={bgImg}
            width={1900}
            height={1800}
            alt="picture of me"
            className="img"
          />
        </figure>
        <aside className="desc">
          <h2 className="title">About Me</h2>
          <p className="general-desc">
            I am a Full-stack Developer who enjoys learning new programming
            languages and frameworks. I am the kind of person who likes
            challenging myself and learning from it. I can do full-featured
            front-end websites using HTML, CSS, JavaScript, and React. I&apos;m
            also an electrical engineer who loves working on embedded and power
            electronics & drives.
          </p>

          <p className="general-desc">
            I worked also as an engineering instructor in local college for more
            than 11 years This experiance coupled with my skill in programming
            gave me an opportunity to adapt differnet working enviroment
            responsibly.
          </p>
          {/* <div className="card-list">
              <div className="card">
                <div className="card-detail">
                  <Image
                    src={communication}
                    width={50}
                    height={50}
                    alt="communication icons"
                    className="card-icon"
                  />
                  <h4 className="card-title">GOOD COMMUNICATION</h4>
                </div>
              </div>
              <div className="card">
                <div className="card-detail">
                  <Image
                    src={webdesign}
                    width={50}
                    height={50}
                    alt="communication icons"
                    className="card-icon"
                  />
                  <h4 className="card-title">EXCELLENT PROGRAMMING SKILLS</h4>
                </div>
              </div>
              <div className="card">
                <div className="card-detail">
                  <Image
                    src={test}
                    width={50}
                    height={50}
                    alt="communication icons"
                    className="card-icon"
                  />
                  <h4 className="card-title">TEST DRIVEN DEVELOPEMNT</h4>
                </div>
              </div>
              <div className="card">
                <div className="card-detail">
                  <Image
                    src={workflows}
                    width={50}
                    height={50}
                    alt="communication icons"
                    className="card-icon"
                  />
                  <h4 className="card-title">WORK FLOWS</h4>
                </div>
              </div>
              <div className="card">
                <div className="card-detail">
                  <Image
                    src={remotework}
                    width={50}
                    height={50}
                    alt="communication icons"
                    className="card-icon"
                  />
                  <h4 className="card-title">REMOTE PAIR PROGRAMMING</h4>
                </div>
              </div>
            </div> */}

          <Button
            type="underline"
            text="See my resume"
            className="btn"
            target="_blank"
            link="https://docs.google.com/document/d/1BfcktXwmWIs0BJsUC0Kqtg6KXQvXh23I_-bxO9DQ7Lg/edit?usp=sharing"
          />
        </aside>
      </div>
    </Container>
  );
};
export default About;
