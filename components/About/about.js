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
    <>
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
            <h2 className="title">
              Hi. I’m Mingstu, nice to meet you. Please take a look around!
            </h2>
            <p className="general-desc">
              I’am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
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

            <Button type="underline" text="TEST" className="btn" />
          </aside>
        </div>
      </Container>
    </>
  );
};

export default About;
