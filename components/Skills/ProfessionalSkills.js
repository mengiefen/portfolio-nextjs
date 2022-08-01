import React from 'react';
import Image from 'next/image';
import Container from './skills.styled';
import { professionalSkill } from '../../data/skillLogo';
import Skills from './skills';

const ProfessionalSkills = () => {
  return (
    <div className="prof-skill-set">
      {professionalSkill.map((skill) => (
        <div className="prof-skills" key={skill.id}>
          <div className="skill-icon-holder">
            <Image
              src={skill.img}
              width={50}
              height={50}
              alt={skill.alt}
              style={{ color: 'red' }}
            ></Image>
          </div>
          <p className="skill-desc">{skill.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalSkills;
