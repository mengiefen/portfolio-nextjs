import Container from "./skills.styled";
import Image from "next/image";
import JAVASCRIPT from "../../public/icons/js.svg";
import CSS from "../../public/icons/css.svg";
import HTML from "../../public/icons/html.svg";
import REACT from "../../public/icons/react.svg";
import SASS from "../../public/icons/sass.svg";
import BOOTSTRAP from "../../public/icons/bootstrap.svg";
import PYTHON from "../../public/icons/python.svg";
import RUBY from "../../public/icons/ruby.svg";
import DJANGO from "../../public/icons/dj.svg";
import RAILS from "../../public/icons/rails.svg";
import NEXTJS from "../../public/icons/nextjs.svg";

const Skills = () => {
  return (
    <Container id="skills">
      <div className="skill-list">
        <h2 className="skill-title">SKILLS</h2>

        <div className="languages">
          <div className="icon-holder">
            <Image
              src={JAVASCRIPT}
              width={50}
              height={50}
              alt="js logo"
            ></Image>
          </div>
          <div className="icon-holder">
            <Image src={HTML} width={50} height={50} alt="html logo" />
          </div>
          <div className="icon-holder">
            <Image src={CSS} width={50} height={50} alt="css logo" />
          </div>
          <div className="icon-holder">
            <Image src={SASS} width={50} height={50} alt="SASS logo" />
          </div>

          <div className="icon-holder">
            <Image
              src={BOOTSTRAP}
              width={50}
              height={50}
              alt="Bootstrap logo"
            />
          </div>
          <div className="icon-holder">
            <Image src={REACT} width={50} height={50} alt="React logo" />
          </div>
          <div className="icon-holder">
            <Image src={NEXTJS} width={50} height={50} alt="Nextjs logo" />
          </div>
          <div className="icon-holder">
            <Image src={PYTHON} width={50} height={50} alt="Python logo" />
          </div>

          <div className="icon-holder">
            <Image src={RUBY} width={50} height={50} alt="Ruby logo" />
          </div>
          <div className="icon-holder">
            <Image src={RAILS} width={50} height={50} alt="Rails logo" />
          </div>
          <div className="icon-holder">
            <Image src={DJANGO} width={50} height={50} alt="Django logo" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
