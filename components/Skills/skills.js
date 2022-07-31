import Container from './skills.styled';
import Image from 'next/image';
import logos from '../../data/skillLogo';

const Skills = () => {
  return (
    <Container
      id="skills"
      initial={{ opacity: 0.9 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="skill-list">
        <h2 className="skill-title">SKILLS</h2>

        <div className="languages">
          {logos.map((logo) => (
            <div className="icon-holder" key={logo.id}>
              <Image
                src={logo.img}
                width={50}
                height={50}
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
