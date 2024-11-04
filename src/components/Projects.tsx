import { projects } from '../data/index';

export const Projects = () => {
  return (
    <section id="projects" className="flex flex-col justify-center items-center text-white text-3xl">
        <h1 className='text-7xl font-bold text-green-400  shadow-lg'>
          Projects
        </h1>
      <div className="mt-4 flex flex-col md:flex-row gap-6 md:gap-x-24 py-20">
        {projects.projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lg transition duration-200 py-2 block"
          >
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-32 h-32 md:w-48 md:h-48 object-cover shadow-lg transition-transform duration-300 transform hover:scale-110"
            />
            <span className='mt-2 font-bold'>{project.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};
