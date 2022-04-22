import Container from './skills.styled';
import Image from 'next/image';
import JAVASCRIPT from '../../public/icons/js.png';
import CSS from '../../public/icons/css.png';
import HTML from '../../public/icons/html.png';
import REACT from '../../public/icons/react.png';
import SASS from '../../public/icons/js.png';
import BOOTSTRAP from '../../public/icons/bootstrap.png';
import PYTHON from '../../public/icons/python.png';

const Skills = () => {
  return (
    <Container id="skills">
      <div className="skill-list">
        <h2 className="skill-title">What I Can do</h2>
        
        <div className="languages">
          <Image src={HTML} width={50} height={50} alt="js logo" />
          <Image src={CSS} width={50} height={50} alt="js logo" />
          <Image src={JAVASCRIPT} width={50} height={50} alt="js logo" />
          <Image src={BOOTSTRAP} width={50} height={50} alt="js logo" />
          <Image src={REACT} width={50} height={50} alt="js logo" />
          <Image src={PYTHON} width={50} height={50} alt="js logo" />
          <Image src={SASS} width={50} height={50} alt="js logo" />
        </div>
      </div>
    </Container>
  );
};

export default Skills;
