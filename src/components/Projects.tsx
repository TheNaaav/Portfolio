import { projects } from '../data/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const Projects = () => {
  return (
    <section id="projects" className="py-32 ">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Rubrik & Beskrivning */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Mina <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Projekt</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Ett urval av projekt jag har byggt och arbetat med.
          </p>
        </div>

        {/* Grid-layout för projektkorten */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-green-400/30 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)] hover:-translate-y-2"
            >
              {/* Bild-behållare (Aspect Ratio som Lovable) */}
              <div className="aspect-video overflow-hidden bg-white/5 flex items-center justify-center relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay-effekt vid hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              </div>

              {/* Innehåll under bilden */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                    {project.name}
                  </h3>
                  <FontAwesomeIcon 
                     icon={faExternalLinkAlt as IconProp}
                    className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-colors" 
                  />
                </div>

                <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-[10px] px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10 group-hover:border-green-400/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
