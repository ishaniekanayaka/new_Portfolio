import { useState, useEffect } from 'react';
import { Github, Linkedin, Facebook, Instagram, MessageCircle } from 'lucide-react';

type RoleData = {
    title: string;
    colorClass: string;
};

const Home = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [currentRole, setCurrentRole] = useState<number>(0);
    const [rotation, setRotation] = useState<number>(0);

    const roles: RoleData[] = [
        { title: 'WEB DESIGNER', colorClass: 'text-pink-500' },
        { title: 'FRONTEND DEVELOPER', colorClass: 'text-purple-500' },
        { title: 'BACKEND DEVELOPER', colorClass: 'text-fuchsia-400' }
    ];

    useEffect(() => {
        setIsVisible(true);

        const roleInterval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);

        const rotateInterval = setInterval(() => {
            setRotation(prev => (prev + 1) % 360);
        }, 50);

        return () => {
            clearInterval(roleInterval);
            clearInterval(rotateInterval);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-700 text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 py-20">
                {/* Main content container */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Left content - Text and details */}
                    <div className={`w-full md:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                        <h1 className="text-3xl md:text-5xl font-bold mb-2">Hello...</h1>
                        <h2 className="text-2xl md:text-4xl font-bold mb-2">
                            I'M <span className="text-gray-500 font-extrabold">ISHANI EKANAYAKE</span>
                        </h2>
                        <div className="h-16 mb-6 relative">
                            {roles.map((role, index) => (
                                <h2
                                    key={role.title}
                                    className={`text-2xl md:text-3xl font-semibold ${role.colorClass} transition-all duration-500 absolute ${currentRole === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                                >
                                    {role.title}
                                </h2>
                            ))}
                        </div>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            A passionate web developer with a knack for turning ideas into
                            interactive, engaging web experiences. With a blend of creativity
                            and technical expertise, I specialize in crafting websites that
                            not only look stunning but also perform seamlessly.
                        </p>
                        <button className="bg-white text-gray-900 hover:bg-gray-200 font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg">
                            More About Me
                        </button>

                        {/* Social Media Icons */}
                        <div className="flex space-x-6 mt-10">
                            <a href="#" className="text-purple-500 hover:text-pink-300 transition-colors" aria-label="Instagram">
                                <Instagram size={24} />
                            </a>
                            <a href="https://www.facebook.com/ishani.Ekanayaka/" className="text-pink-500 hover:text-white transition-colors" aria-label="Facebook">
                                <Facebook size={24} />
                            </a>
                            <a href="https://github.com/ishaniekanayaka" className="text-blue-300 hover:text-white transition-colors" aria-label="GitHub">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/ishani-ekanayaka-78b6312b7/" className="text-emerald-300 hover:text-white transition-colors" aria-label="LinkedIn">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://wa.me/0720106953" className="text-fuchsia-400 hover:text-white transition-colors" aria-label="WhatsApp">
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
                                    background: 'linear-gradient(45deg, #f3f4f6, #9ca3af, #f3f4f6)',
                                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
                                }}
                            ></div>

                            {/* Inner padding */}
                            <div
                                className="absolute w-17/18 h-17/18 bg-gray-900"
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
                                    className="w-full h-full object-cover grayscale contrast-110"
                                />
                            </div>

                            {/* Glow effect */}
                            <div
                                className="absolute w-full h-full animate-pulse opacity-20"
                                style={{
                                    transform: `rotate(${-rotation * 0.5}deg)`,
                                    background: 'linear-gradient(135deg, #f3f4f6, transparent, #9ca3af)',
                                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
                                    filter: 'blur(8px)',
                                }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Stats or brief info */}
                <div className={`mt-16 flex justify-center items-center transition-all duration-1500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
                        {[
                            { title: "Projects Completed", value: "25+" },
                            { title: "Years Experience", value: "2+" }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="bg-gray-500  bg-opacity-50 border border-gray-700 rounded-lg p-6 text-center backdrop-blur-sm hover:bg-opacity-70 transition-all
                hover:-translate-y-1 hover:shadow-lg"
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                    transform: isVisible ? 'none' : 'translateY(20px)'
                                }}
                            >
                                <h3 className="text-3xl font-bold text-black">{stat.value}</h3>
                                <p className="text-lg text-black">{stat.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;