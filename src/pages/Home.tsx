import { useState, useEffect } from 'react';
import { Github, Linkedin, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [rotation, setRotation] = useState(0);

  const roles = ['WEB DESIGNER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER'];
  const roleColors = ['text-teal-300', 'text-blue-300', 'text-purple-300'];

  useEffect(() => {
    setIsVisible(true);

    // Rotate roles every 3 seconds
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    // Rotate image every 50ms for smooth animation
    const rotateInterval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);

    return () => {
      clearInterval(roleInterval);
      clearInterval(rotateInterval);
    };
  }, []);

  return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-25">
          {/* Main content container */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Left content - Text and details */}
            <div className={`w-full md:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">Hello...</h1>
              <h2 className="text-2xl md:text-4xl font-bold mb-2">
                I'M <span className="text-pink-400">ISHANI EKANAYAKE</span>
              </h2>
              <div className="h-16 mb-6 relative">
                {roles.map((role, index) => (
                    <h2
                        key={role}
                        className={`text-2xl md:text-2xl font-semibold ${roleColors[index]} transition-all duration-500 absolute ${currentRole === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                    >
                      {role}
                    </h2>
                ))}
              </div>
              <p className="text-lg text-gray-200 mb-8">
                A passionate web developer with a knack for turning ideas into
                interactive, engaging web experiences. With a blend of creativity
                and technical expertise, I specialize in crafting websites that
                not only look stunning but also perform seamlessly.
              </p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg">
                More About Me
              </button>

              {/* Social Media Icons */}
              <div className="flex space-x-6 mt-10">
                <a href="#" className="hover:text-pink-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/ishani.Ekanayaka/" className="hover:text-pink-400 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://github.com/ishaniekanayaka" className="hover:text-pink-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ishani-ekanayaka-78b6312b7/" className="hover:text-pink-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://wa.me/0720106953" className="hover:text-pink-400 transition-colors">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>

            {/* Right content - Animated rotating image */}
            <div className={`w-full md:w-1/3 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="relative w-full aspect-square flex items-center justify-center">
                {/* Rotating border effect */}
                <div
                    className="absolute w-full h-full"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      background: 'linear-gradient(45deg, #ec4899, #8b5cf6)',
                      clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
                    }}
                ></div>

                {/* Inner padding */}
                <div
                    className="absolute w-17/18 h-17/18 bg-white"
                    style={{
                      clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
                    }}
                ></div>

                {/* Image container */}
                <div
                    className="absolute w-15/16 h-15/16 overflow-hidden"
                    style={{
                      clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
                    }}
                >
                  <img
                      src="../../src/image/mb1.jpg"
                      alt="Ishani Ekanayake"
                      className="w-full h-full object-cover"
                  />
                </div>

                {/* Glow effect */}
                <div
                    className="absolute w-full h-full animate-pulse opacity-50"
                    style={{
                      transform: `rotate(${-rotation * 0.5}deg)`,
                      background: 'linear-gradient(135deg, #ec4899, transparent, #8b5cf6)',
                      clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
                      filter: 'blur(8px)',
                    }}
                ></div>
              </div>
            </div>
          </div>

          {/* Stats or brief info */}
          <div className={`mt-16 grid py-1.5 grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            {[
              { title: "Projects Completed", value: "25+" },
              { title: "Years Experience", value: "3+" },
              { title: "Client Satisfaction", value: "100%" }
            ].map((stat, index) => (
                <div key={index} className="bg-indigo-800 bg-opacity-30 rounded-lg p-6 text-center backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-pink-400">{stat.value}</h3>
                  <p className="text-lg">{stat.title}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Home;