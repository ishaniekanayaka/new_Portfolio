import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Github, ExternalLink, Heart, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, MessageCircle, BookOpen, GraduationCap } from 'lucide-react';

// Import your images - adjust paths as needed
import profileImage from '../image/img.png';
import htmlIcon from '../image/img.png';
import cssIcon from '../image/img.png';
import javaIcon from '../image/img.png';
import mysqlIcon from '../image/img.png';
import figmaIcon from '../image/img.png';
import jsIcon from '../image/img.png';
import assignmentPlaceholder from '../image/img.png';
import collage1 from '../image/img.png';
import collage2 from '../image/img.png';
import gallery1 from '../image/img.png';
import gallery2 from '../image/img.png';
import gallery3 from '../image/img.png';
import gallery4 from '../image/img.png';
import gallery5 from '../image/img.png';
import gallery6 from '../image/img.png';
import gallery7 from '../image/img.png';
import gallery8 from '../image/img.png';
import gallery9 from '../image/img.png';


const About = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Sample data - replace with your actual data
  

  const education = [
    { 
      id: 1, 
      icon: <GraduationCap size={24} />, 
      institution: "Institute of Software Engineering", 
      period: "2023 Join", 
      description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula." 
    },
    { 
      id: 2, 
      icon: <BookOpen size={24} />, 
      institution: "R / Amb / National School", 
      period: "2019 - 2022", 
      description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula." 
    },
    { 
      id: 3, 
      icon: <BookOpen size={24} />, 
      institution: "H / warapitiya National School", 
      period: "2007 - 2018", 
      description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula." 
    },
  ];

  const skills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "Java", icon: javaIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "JavaScript", icon: jsIcon },
  ];

  const galleryImages = [
    collage2, collage1, gallery1, gallery2, gallery3, 
    gallery4, gallery5, gallery6, gallery7, gallery8, gallery9
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white overflow-hidden relative">
      {/* Animated background elements matching home page */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* About Me Section */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-2/5">
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative rings around image */}
                <div className="absolute -inset-4 rounded-full border-4 border-purple-500 animate-spin-slow opacity-60"></div>
                <div className="absolute -inset-2 rounded-full border-2 border-pink-500 animate-spin-reverse opacity-40"></div>
                
                {/* Image container */}
                <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img 
                    src={profileImage} 
                    alt="Ishani Ekanayake" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Gradient overlay for professional effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-pink-900/20 pointer-events-none"></div>
                </div>

                {/* Experience badge */}
                <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-xl">
                    YEARS OF EXPERIENCE <span className="ml-2 bg-white text-purple-600 px-2 py-1 rounded-full">1+</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-3/5">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                ABOUT <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ME</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Hi, I'm Ishani Ekanayake, a 22-year-old Software Engineering undergraduate at IJSE from Sri Lanka.
                I am passionate about coding and technology, with a keen interest in creating innovative software solutions that make a meaningful impact.
                Driven by curiosity and a desire to learn, I thrive on collaborating with others and tackling challenging projects.
                I'm excited to connect with like-minded individuals and explore opportunities to apply my skills in dynamic and impactful ways.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a href="../Assests/document/Ishani%20CV.pdf" download>
                  <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl flex items-center">
                    Download CV
                    <Download className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
                  </button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            EDU<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">CATION</span>
          </motion.h1>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 shadow-xl">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                        {edu.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{edu.institution}</h3>
                      <p className="text-gray-300 mb-2">{edu.period}</p>
                      <p className="text-gray-400">{edu.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-gray-900"></div>
                  </div>
                  
                  {/* Time */}
                  <div className="w-5/12">
                    <h4 className={`text-lg font-medium ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}>{edu.period}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            MY <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SKILLS</span>
          </motion.h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 text-center hover:bg-gray-800/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-4 group-hover:scale-110 transition-transform">
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                </div>
                <p className="text-lg font-medium group-hover:text-white transition-colors">{skill.name}</p>
                
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* Gallery Section */}
        <section className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            GA<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">LLE</span>RY
          </motion.h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setActiveImage(image)}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 shadow-xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Call me</h3>
              <p className="text-gray-300">076 - 7888979</p>
              <p className="text-gray-300">072 - 0106953</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
              <p className="text-gray-300">
                <a href="mailto:ishaniekanayaka27@gmail.com" className="hover:text-white transition-colors">
                  ishaniekanayaka27@gmail.com
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Address</h3>
              <p className="text-gray-300">Walasmulla, Matara district</p>
              <p className="text-gray-300">Sri Lanka</p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-8 max-w-2xl mx-auto"
          >
            <p className="text-gray-300 mb-4">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-500/20">
              <Heart size={20} className="text-pink-400" />
            </div>
          </motion.div>

          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="text-gray-300 hover:text-pink-300 transition-all transform hover:scale-110"
              aria-label="Instagram"
            >
              <div className="p-3 rounded-full border border-purple-500 hover:border-pink-300 hover:bg-purple-900/30 transition-all">
                <Instagram size={24} />
              </div>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.facebook.com/ishani.Ekanayaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-300 transition-all transform hover:scale-110"
              aria-label="Facebook"
            >
              <div className="p-3 rounded-full border border-purple-500 hover:border-pink-300 hover:bg-purple-900/30 transition-all">
                <Facebook size={24} />
              </div>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/ishaniekanayaka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-300 transition-all transform hover:scale-110"
              aria-label="GitHub"
            >
              <div className="p-3 rounded-full border border-purple-500 hover:border-pink-300 hover:bg-purple-900/30 transition-all">
                <Github size={24} />
              </div>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/ishani-ekanayaka-78b6312b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-300 transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <div className="p-3 rounded-full border border-purple-500 hover:border-pink-300 hover:bg-purple-900/30 transition-all">
                <Linkedin size={24} />
              </div>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://wa.me/0720106953"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-300 transition-all transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <div className="p-3 rounded-full border border-purple-500 hover:border-pink-300 hover:bg-purple-900/30 transition-all">
                <MessageCircle size={24} />
              </div>
            </motion.a>
          </div>

          <div className="text-center text-gray-400">
            <p>&copy; All right reserved.</p>
            <p>Design By : Ishani Ekanayake</p>
          </div>
        </footer>
      </div>

      {/* Image Modal */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setActiveImage(null)}>
          <div className="max-w-4xl max-h-full">
            <img src={activeImage} alt="Enlarged view" className="w-full h-auto object-contain" />
          </div>
          <button 
            className="absolute top-4 right-4 text-white bg-gray-800/50 rounded-full p-2 hover:bg-gray-700/50 transition-colors"
            onClick={() => setActiveImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default About;