import { skills } from '../data/index';
const Skills = () => {
  
  return (
    <section id="skills" className="flex flex-col justify-center items-center text-white text-3xl py-10">
      <h1 className='text-3xl md:text-5xl font-bold text-green-400 text-center mb-6'>
        Skills
      </h1>
      <div className="mt-4 flex flex-wrap justify-center gap-6 md:gap-x-24 py-5">
        {skills.map((skill, index) => (
          <div key={index} className="flex-shrink-0 w-40 p-4  text-center">
            <h2 className="text-lg md:text-xl">{skill}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
