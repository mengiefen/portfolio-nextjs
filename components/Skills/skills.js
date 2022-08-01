import Container from './skills.styled';
import Image from 'next/image';
import logos from '../../data/skillLogo';
import ProfessionalSkills from './ProfessionalSkills';

const Skills = () => {
  return (
    <Container
      id="skills"
      initial={{ opacity: 0.9 }}
      whileInView={{ opacity: 1 }}
    >
      <h2 className="skill-title">What I DO</h2>
      <div className="border-bottom"></div>
      <div className="skill-list">
        <div className="languages">
          {logos.map((logo) => (
            <div className="icon-holder" key={logo.id}>
              <Image
                src={logo.img}
                width={25}
                height={25}
                alt={logo.alt}
              ></Image>
            </div>
          ))}
        </div>
        <ProfessionalSkills />
        <div className="languages-1">
          {logos.map((logo) => (
            <div className="icon-holder-1" key={logo.id}>
              <Image
                src={logo.img}
                width={20}
                height={20}
                alt={logo.alt}
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
