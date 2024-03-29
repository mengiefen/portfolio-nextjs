import Image from "next/image";
import Container from "./about.styled";
import bgImg from "../../public/picture.png";
import { motion } from "framer-motion";

import communication from "../../public/communication.svg";
import webdesign from "../../public/webdesign.svg";
import remotework from "../../public/remotework.svg";
import workflows from "../../public/workflows.svg";
import test from "../../public/test.svg";

import Button from "../Buttons/buttons";
import { FaChevronRight } from "react-icons/fa";

const About = () => {
  return (
    <Container id="about">
      <div className="content">
        <motion.figure
          className="img"
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Image src={bgImg} width={1900} height={1800} alt="picture of me" className="img" />
        </motion.figure>
        <motion.aside
          className="desc"
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <h2 className="title">About Me</h2>
          <p className="general-desc">
            I am a Full-stack Developer who enjoys learning new programming languages and frameworks. I am the
            kind of person who likes challenging myself and learning from it. I can do full-featured front-end
            websites using HTML, CSS, JavaScript, and React. I&apos;m also an electrical engineer who loves
            working on embedded and power electronics & drives.
          </p>

          <p className="general-desc">
            I worked also as an engineering instructor in local college for more than 11 years This experiance
            coupled with my skill in programming gave me an opportunity to adapt differnet working enviroment
            responsibly.
          </p>

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
