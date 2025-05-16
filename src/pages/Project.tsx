import { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubLink?: string;
  youtubeLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    tags: ["JavaEE", "Jsp"],
    image: "../../src/image/img_1.png",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    youtubeLink: "https://youtube.com/watch?v=example1"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio built with modern web technologies",
    tags: ["React", "Tailwind CSS", "Vite"],
    image: "../../src/image/img.png",
    githubLink: "https://github.com/yourusername/portfolio-website"
  },
  {
    id: 3,
    title: "Culinary Academy",
    description: "A productivity app for organizing daily tasks",
    tags: ["Hibernate"],
    image: "../../src/image/img_2.png",
    githubLink: "https://github.com/yourusername/task-management-app"
  },
  {
    id: 4,
    title: "MeetUpPro",
    description: "Real-time Online Appointment Platform with Spring",
    tags: ["JavaScript", "Html", "Spring"],
    image: "../../src/image/img_3.png",
    githubLink: "https://github.com/yourusername/weather-dashboard",
    youtubeLink: " https://youtu.be/gSRSuErWX0g "
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
      <section className="py-25 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-12 text-gray-800"
          >
            My Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="bg-white rounded-xl overflow-hidden shadow-md relative"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                          <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                          >
                      {tag}
                    </span>
                      ))}
                    </div>
                  </div>

                  {/* Animated overlay with links */}
                  {hoveredProject === project.id && (
                      <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-4"
                      >
                        {project.githubLink && (
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </motion.a>
                        )}

                        {project.youtubeLink && (
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href={project.youtubeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                              </svg>
                            </motion.a>
                        )}
                      </motion.div>
                  )}
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Projects;