import { useState, useEffect } from 'react';
import { Github, Linkedin, Facebook, Instagram, MessageCircle, ChevronRight, Code, Palette, Server } from 'lucide-react';

import profileImage from '../image/me2-removebg-preview.png'; // Adjust path as needed
import { useNavigate } from 'react-router-dom';


type RoleData = {
    title: string;
    colorClass: string;
    icon: React.ReactNode;
};

const Home = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [currentRole, setCurrentRole] = useState<number>(0);

    const roles: RoleData[] = [
        { 
            title: 'WEB DESIGNER', 
            colorClass: 'text-pink-500',
            icon: <Palette className="inline-block mr-2" size={20} />
        },
        { 
            title: 'FRONTEND DEVELOPER', 
            colorClass: 'text-purple-500',
            icon: <Code className="inline-block mr-2" size={20} />
        },
        { 
            title: 'BACKEND DEVELOPER', 
            colorClass: 'text-fuchsia-400',
            icon: <Server className="inline-block mr-2" size={20} />
        }
    ];

    useEffect(() => {
        setIsVisible(true);

        const roleInterval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);

        return () => {
            clearInterval(roleInterval);
        };
    }, []);

    const navigate = useNavigate();

     const handleAboutClick = () => {
        navigate("/about"); // navigates to about.tsx
    };

    const handleProjectsClick = () => {
        // Add your navigation logic here
        console.log('Navigate to projects page');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white overflow-hidden relative">
            {/* Animated background elements */}
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
                {/* Main content container */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left content - Text and details */}
                    <div className={`w-full lg:w-3/5 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                        <div className="relative">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Hello...
                            </h1>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                I'M <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold">ISHANI EKANAYAKE</span>
                            </h2>
                            
                            <div className="h-20 mb-8 relative">
                                {roles.map((role, index) => (
                                    <div
                                        key={role.title}
                                        className={`text-2xl md:text-4xl font-semibold ${role.colorClass} transition-all duration-500 absolute flex items-center ${currentRole === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                                    >
                                        {role.icon}
                                        {role.title}
                                    </div>
                                ))}
                            </div>

                            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                                A passionate full-stack developer with expertise in modern web technologies. 
                                I transform complex ideas into elegant, user-friendly digital solutions that 
                                drive business growth and create exceptional user experiences.
                            </p>

                            {/* Action buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <button 
                                    onClick={handleAboutClick}
                                    className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
                                >
                                    More About Me
                                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                </button>
                                <button 
                                    onClick={handleProjectsClick}
                                    className="bg-transparent border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105"
                                >
                                    View My Work
                                </button>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex space-x-6">
                                <a href="#" className="group text-purple-400 hover:text-pink-300 transition-all transform hover:scale-110" aria-label="Instagram">
                                    <div className="p-3 rounded-full border border-purple-400 group-hover:border-pink-300 group-hover:shadow-lg transition-all">
                                        <Instagram size={24} />
                                    </div>
                                </a>
                                <a href="https://www.facebook.com/ishani.Ekanayaka/" className="group text-pink-400 hover:text-white transition-all transform hover:scale-110" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                    <div className="p-3 rounded-full border border-pink-400 group-hover:border-white group-hover:shadow-lg transition-all">
                                        <Facebook size={24} />
                                    </div>
                                </a>
                                <a href="https://github.com/ishaniekanayaka" className="group text-blue-400 hover:text-white transition-all transform hover:scale-110" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                    <div className="p-3 rounded-full border border-blue-400 group-hover:border-white group-hover:shadow-lg transition-all">
                                        <Github size={24} />
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/ishani-ekanayaka-78b6312b7/" className="group text-emerald-400 hover:text-white transition-all transform hover:scale-110" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                    <div className="p-3 rounded-full border border-emerald-400 group-hover:border-white group-hover:shadow-lg transition-all">
                                        <Linkedin size={24} />
                                    </div>
                                </a>
                                <a href="https://wa.me/0720106953" className="group text-fuchsia-400 hover:text-white transition-all transform hover:scale-110" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                                    <div className="p-3 rounded-full border border-fuchsia-400 group-hover:border-white group-hover:shadow-lg transition-all">
                                        <MessageCircle size={24} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right content - Your Image */}
                    <div className={`w-full lg:w-2/5 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                        <div className="relative w-full max-w-lg mx-auto">
                            {/* Decorative rings around image */}
                            <div className="absolute -inset-4 rounded-full border-4 border-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow opacity-60"></div>
                            <div className="absolute -inset-2 rounded-full border-2 border-gradient-to-r from-pink-500 to-blue-500 animate-spin-reverse opacity-40"></div>
                            
                            {/* Image container */}
                            <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                                {/* Your imported image */}
                                <img 
                                    src={profileImage} 
                                    alt="Ishani Ekanayake - Full Stack Developer" 
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                        // Fallback if image doesn't load
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent) {
                                            parent.innerHTML = `
                                                <div class="w-full h-full bg-gradient-to-br from-purple-900/80 to-pink-900/80 flex items-center justify-center">
                                                    <div class="text-center">
                                                        <div class="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                                                            <span class="text-3xl font-bold text-white">IE</span>
                                                        </div>
                                                        <p class="text-gray-300 text-sm">Image Loading...</p>
                                                    </div>
                                                </div>
                                            `;
                                        }
                                    }}
                                />
                                
                                {/* Gradient overlay for professional effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-pink-900/20 pointer-events-none"></div>
                            </div>

                            {/* Floating tech icons around image */}
                            <div className="absolute inset-0">
                                {[
                                    { icon: '⚛️', position: 'top-4 left-4', delay: '0s' },
                                    { icon: '🟨', position: 'top-4 right-4', delay: '1s' },
                                    { icon: '🟢', position: 'bottom-4 left-4', delay: '2s' },
                                    { icon: '🔷', position: 'bottom-4 right-4', delay: '0.5s' }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`absolute ${item.position} text-2xl animate-bounce opacity-70 bg-gray-900/50 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm`}
                                        style={{ animationDelay: item.delay }}
                                    >
                                        {item.icon}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Stats section */}
                <div className={`mt-20 transition-all duration-1500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { title: "Projects Completed", value: "25+", icon: <Code size={24} />, gradient: "from-purple-500 to-pink-500" },
                            { title: "Years Experience", value: "2+", icon: <Palette size={24} />, gradient: "from-pink-500 to-red-500" },
                            { title: "Technologies Mastered", value: "15+", icon: <Server size={24} />, gradient: "from-blue-500 to-purple-500" }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="group relative bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 text-center hover:bg-gray-800/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                style={{
                                    transitionDelay: `${index * 150}ms`,
                                }}
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                                    <div className="text-white">
                                        {stat.icon}
                                    </div>
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                                <p className="text-lg text-gray-300 group-hover:text-white transition-colors">{stat.title}</p>
                                
                                {/* Subtle glow effect on hover */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action section */}
                <div className={`mt-20 text-center transition-all duration-2000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-200">
                        Ready to bring your ideas to life?
                    </h3>
                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                        Let's collaborate and create something amazing together. From concept to deployment, 
                        I'll help you build digital experiences that make an impact.
                    </p>
                    <button 
                        onClick={handleAboutClick}
                        className="group bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl flex items-center mx-auto"
                    >
                        Discover My Journey
                        <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                    </button>
                </div>
            </div>

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

export default Home;