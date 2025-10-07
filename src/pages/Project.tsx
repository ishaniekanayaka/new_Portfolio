import { useState, useEffect } from 'react';
import { Github, ExternalLink, Play, Code, Palette, Server,  Globe, Smartphone,  Eye } from 'lucide-react';

// Import images
import bookNestImg from './../image/bookClub.png';
import smsImg from './../image/sms.png';
import personalWebsiteImg from './../image/portfolio.png';
import posImg from './../image/pos.png';
import meetUpProImg from './../image/meetUppro.png';
import ecommerceImg from './../image/e-commerce.png';
import chatAppImg from './../image/chatApp.png';
import culinaryImg from './../image/culinary.png';
import bookVerseImg from './../image/bookVerse.png';
import petCareImg from './../image/petCareApp.jpg';
import lendlyImg from './../image/loanApp.jpg';
import calculatorImg from './../image/calculator.png';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  githubLink?: string;
  youtubeLink?: string;
  liveLink?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  featured?: boolean;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    // Backend
    {
      id: 1,
      title: "BookNest",
      description: "Book management platform with Spring Boot, MySQL, Hibernate",
      longDescription: "A backend system for managing books, users, and library operations. Built with Spring Boot, MySQL, Hibernate, JWT for authentication, and Cloudinary for image storage.",
      tags: ["Spring Boot", "MySQL", "Hibernate", "JWT", "Cloudinary"],
      image: bookNestImg,
      githubLink: "https://github.com/ishaniekanayaka/BookNest_Backend",
      category: "backend",
      featured: true
    },
    {
      id: 2,
      title: "SMS",
      description: "Student Management System backend using NodeJS and MongoDB",
      longDescription: "A backend service for managing students, courses, enrollments, and payments. Built with NodeJS, ExpressJS, and MongoDB.",
      tags: ["NodeJS", "ExpressJS", "MongoDB"],
      image: smsImg,
      githubLink: "https://github.com/ishaniekanayaka/sms_BACKEND.git",
      category: "backend"
    },

    // Frontend
    {
      id: 3,
      title: "Personal Website",
      description: "ReactJS portfolio website",
      longDescription: "A personal website showcasing projects, skills, and contact information. Built with ReactJS for dynamic rendering and smooth animations.",
      tags: ["ReactJS", "Tailwind CSS", "JavaScript"],
      image: personalWebsiteImg,
      githubLink: "https://github.com/ishaniekanayaka/new_Portfolio",
      liveLink: "https://new-portfolio-i2kp.vercel.app/",
      category: "frontend"
    },
    {
      id: 4,
      title: "POS",
      description: "Point of Sale system frontend with Bootstrap",
      longDescription: "A user-friendly POS system interface built with HTML, CSS, JavaScript, and Bootstrap.",
      tags: ["HTML", "CSS", "JS", "Bootstrap"],
      image: posImg,
      githubLink: "https://github.com/ishaniekanayaka/BootStrap_POS",
      category: "frontend"
    },
    {
      id: 12,
      title: "Calculator",
      description: "Simple calculator built with HTML, CSS, and JavaScript",
      longDescription: "A fully functional web-based calculator using HTML, CSS, and JavaScript. Supports basic arithmetic operations and a clean, responsive UI.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: calculatorImg,
      githubLink: "https://github.com/ishaniekanayaka/Calculator_Assignment-10",
      category: "frontend"
    },

    // Fullstack
    {
      id: 5,
      title: "MeetUpPro",
      description: "Online appointment and meeting platform",
      longDescription: "A full-stack web application for real-time scheduling, video meetings, and notifications. Backend built with Spring Boot and frontend with HTML, CSS, JS.",
      tags: ["Spring Boot", "MySQL", "Hibernate", "JavaScript", "HTML", "CSS"],
      image: meetUpProImg,
      githubLink: "https://github.com/ishaniekanayaka/Online_Appointment_PlatForm",
      liveLink: "https://youtu.be/gSRSuErWX0g",
      category: "fullstack",
      featured: true
    },
    {
      id: 6,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with modern payment integration",
      longDescription: "A comprehensive e-commerce platform built with Java EE (JSP, Servlets) and MySQL. Features include product management, shopping cart, user authentication, and secure payment processing. Frontend uses HTML, CSS, Bootstrap, and JavaScript. Version control via Git.",
      tags: ["Java EE", "JSP", "Servlets", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript", "Git"],
      image: ecommerceImg,
      githubLink: "https://github.com/ishaniekanayaka/E_Commerce_WebApplication",
      liveLink: "https://youtu.be/FUHsiNYjnjE",
      category: "fullstack"
    },
    {
      id: 7,
      title: "Chat Application",
      description: "Real-time chat with JavaFX and Sockets",
      longDescription: "A desktop chat application built using Java and JavaFX. Supports real-time messaging using Socket programming.",
      tags: ["Java", "JavaFX", "Socket"],
      image: chatAppImg,
      githubLink: "https://github.com/ishaniekanayaka/Live_Chat_Room.git",
      category: "fullstack"
    },
    {
      id: 8,
      title: "Culinary",
      description: "Culinary management system with Java and Hibernate",
      longDescription: "A backend-focused system for managing culinary courses, students, and instructors. Built with Java, Hibernate, and MySQL.",
      tags: ["Java", "Hibernate", "MySQL"],
      image: culinaryImg,
      githubLink: "https://github.com/ishaniekanayaka/Final",
      category: "fullstack"
    },
    {
      id: 9,
      title: "BookVerse",
      description: "MERN Stack application with ReactJS frontend",
      longDescription: "A book management and review platform built with MongoDB, ExpressJS, ReactJS, and NodeJS.",
      tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      image: bookVerseImg,
      githubLink: "https://github.com/ishaniekanayaka/Book-Club-Backend",
      liveLink: "https://www.linkedin.com/feed/update/urn:li:activity:7363508198370082817/",
      category: "fullstack"
    },

    // Mobile
    {
      id: 10,
      title: "Pet Care Tracker",
      description: "React Native mobile app for pet care management",
      longDescription: "A mobile app to track pet care routines, vaccinations, and appointments. Built with React Native, Expo, and Firebase.",
      tags: ["React Native", "Expo", "Firebase"],
      image: petCareImg,
      githubLink: "https://github.com/ishaniekanayaka/pet-care-tracker",
      liveLink: "https://youtu.be/hIrTED1YnL8",
      category: "mobile"
    },
    {
      id: 11,
      title: "Lendly",
      description: "Mobile loan application system with React Native",
      longDescription: "A mobile-based loan application platform allowing users to apply for loans and bank managers to manage applications securely. Built with React Native, Expo, and Firebase.",
      tags: ["React Native", "Expo", "Firebase"],
      image: lendlyImg,
      githubLink: "https://github.com/ishaniekanayaka/Lendly-Loan-App",
      category: "mobile"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Globe size={20} /> },
    { id: 'frontend', label: 'Frontend', icon: <Palette size={20} /> },
    { id: 'backend', label: 'Backend', icon: <Server size={20} /> },
    { id: 'fullstack', label: 'Full Stack', icon: <Code size={20} /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone size={20} /> }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => setIsVisible(true), []);

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        <div className="relative">
          <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-t-2xl" />
          <button onClick={onClose} className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors">✕</button>
        </div>
        <div className="p-8">
          <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.longDescription}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full">{tag}</span>)}
          </div>
          <div className="flex gap-4 flex-wrap">
            {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-colors"><Github size={20} />View Code</a>}
            {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full transition-all"><ExternalLink size={20} />Live Demo</a>}
            {project.youtubeLink && <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors"><Play size={20} />Watch Demo</a>}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-float" style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, animationDelay: `${Math.random()*3}s`, animationDuration: `${3+Math.random()*4}s` }} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Discover my journey through code, creativity, and innovation. Each project represents a unique challenge solved with passion and technical expertise.</p>
        </div>

        {/* Categories */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {categories.map((category, index) => (
            <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`group flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory===category.id?'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg':'bg-gray-800/60 border border-gray-600 text-gray-300 hover:bg-gray-700/60 hover:border-purple-400'}`} style={{ transitionDelay: `${index*100}ms` }}>
              <span className={`transition-colors ${selectedCategory===category.id?'text-white':'text-purple-400 group-hover:text-pink-400'}`}>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project,index)=>(
            <div key={project.id} className={`group relative bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl transform ${isVisible?'translate-y-0 opacity-100':'translate-y-10 opacity-0'}`} style={{ transitionDelay:`${index*150}ms`}} onMouseEnter={()=>setHoveredProject(project.id)} onMouseLeave={()=>setHoveredProject(null)}>
              {project.featured && <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">⭐ Featured</div>}
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full p-2">
                  {project.category==='frontend' && <Palette size={16} className="text-pink-400"/>}
                  {project.category==='backend' && <Server size={16} className="text-green-400"/>}
                  {project.category==='fullstack' && <Code size={16} className="text-purple-400"/>}
                  {project.category==='mobile' && <Smartphone size={16} className="text-blue-400"/>}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${hoveredProject===project.id?'opacity-100':'opacity-0'}`}>
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-900/80 hover:bg-gray-800 text-white p-2 rounded-full transition-colors" onClick={e=>e.stopPropagation()}><Github size={16}/></a>}
                    {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-purple-600/80 hover:bg-purple-700 text-white p-2 rounded-full transition-colors" onClick={e=>e.stopPropagation()}><ExternalLink size={16}/></a>}
                    {project.youtubeLink && <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer" className="bg-red-600/80 hover:bg-red-700 text-white p-2 rounded-full transition-colors" onClick={e=>e.stopPropagation()}><Play size={16}/></a>}
                    <button onClick={()=>setSelectedProject(project)} className="bg-blue-600/80 hover:bg-blue-700 text-white p-2 rounded-full transition-colors ml-auto"><Eye size={16}/></button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={()=>setSelectedProject(null)}/>}

    </div>
  );
};

export default Projects;
