import Image from 'next/image';
import Container from './about.styled';
import bgImg from '../../public/picture.png';
import { motion } from 'framer-motion';

import Button from '../Buttons/buttons';
import { FaChevronRight } from 'react-icons/fa';

const About = () => {
  return (
    <Container id="about">
      <div className="content">
        <motion.figure
          className="img"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          <Image
            src={bgImg}
            width={500}
            height={500}
            alt="picture of me"
            className="img"
          />
        </motion.figure>
        <motion.aside
          className="desc"
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          <h2 className="title">About Me</h2>
          <div className="border-bottom"></div>
          <p className="general-desc">
            I&apos;m a Full-stack Developer who enjoys learning new programming
            languages and frameworks. I am the kind of person who likes
            challenging myself and learning from it. I can do full-featured
            front-end websites using HTML, CSS, JavaScript, React, and Ruby,
            Ruby on Rails. I&apos;m also an electrical engineer who loves
            working on embedded system and power electronics & drives.
          </p>

          <p className="general-desc">
            I&apos;m also an engineering instructor in local college for more
            than 11 years. This experiance coupled with my skill in programming
            gave me an opportunity to adapt differnet working enviroment
            responsiblity.
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
            whileTap={{ scale: 0.8 }}
            link="https://docs.google.com/document/d/1BfcktXwmWIs0BJsUC0Kqtg6KXQvXh23I_-bxO9DQ7Lg/edit?usp=sharing"
          />
        </motion.aside>
      </div>
    </Container>
  );
};
export default About;
