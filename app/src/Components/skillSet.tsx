import skills from '../Assets/skills';
import { createElement } from 'react';

export default function SkillSet() {
  const numberOfSkills = skills.length;
  return (
    <div className='relative grid grid-cols-3 grid-rows-3 gap-3 place-items-center bg-red-500'>
      {skills.map((skill) => (
        <div className='flex bg-blue-500 w-full place-content-center '>
          {createElement(skill.icon.type, { className: 'w-16 h-16' })}
        </div>
      ))}
    </div>
  );
}
