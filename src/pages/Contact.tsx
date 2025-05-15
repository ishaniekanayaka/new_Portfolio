
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio built with modern web technologies",
    tags: ["React", "Tailwind CSS", "Vite"],
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app for organizing daily tasks",
    tags: ["React", "Firebase", "Redux"],
  },
];
const Contact = () => {
  return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">My Projects</h1>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                      ))}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Contact;