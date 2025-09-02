import { useState, useEffect, useRef } from 'react';
import { Download, GraduationCap, BookOpen, Calendar, MapPin, Phone, Mail, Heart, ExternalLink } from 'lucide-react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [skillsVisible, setSkillsVisible] = useState(false);
    const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

    useEffect(() => {
        setIsVisible(true);
        
        const timer = setTimeout(() => {
            setSkillsVisible(true);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    // All skills from your documents
    const programmingLanguages = [
        { name: 'Java', icon: '☕' },
        { name: 'Python', icon: '🐍' },
        { name: 'JavaScript', icon: '📱' },
        { name: 'TypeScript', icon: '🔷' }
    ];

    const frontendSkills = [
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'React', icon: '⚛️' },
        { name: 'Redux', icon: '🔄' },
        { name: 'Tailwind CSS', icon: '💨' },
        { name: 'Bootstrap', icon: '🅱️' },
        { name: 'jQuery', icon: '📜' }
    ];

    const mobileSkills = [
        { name: 'React Native', icon: '📱' },
        { name: 'Expo', icon: '🚀' }
    ];

    const backendSkills = [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express', icon: '🚂' },
        { name: 'Spring', icon: '🍃' },
        { name: 'Spring Boot', icon: '⚡' },
        { name: 'Hibernate', icon: '💤' }
    ];

    const databaseSkills = [
        { name: 'MongoDB', icon: '🍃' },
        { name: 'MySQL', icon: '🗄️' },
        { name: 'PostgreSQL', icon: '🐘' }
    ];

    const devopsTools = [
        { name: 'AWS', icon: '☁️' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Git', icon: '📝' },
        { name: 'Postman', icon: '📮' },
        { name: 'Vite', icon: '⚡' }
    ];

    const ideTools = [
        { name: 'IntelliJ IDEA', icon: '💡' },
        { name: 'VS Code', icon: '💻' },
        { name: 'WebStorm', icon: '🌊' },
        { name: 'Android Studio', icon: '📱' },
        { name: 'Figma', icon: '🎯' },
        { name: 'Canva', icon: '🎨' }
    ];

    const education = [
        {
            institution: "Institute of Software Engineering",
            period: "2023 - Present",
            description: "Currently pursuing Software Engineering with focus on full-stack development, learning cutting-edge technologies and best practices in software development.",
            icon: <GraduationCap size={24} />,
            gradient: "from-purple-500 to-pink-500"
        },
        {
            institution: "R/Amb/National School",
            period: "2019 - 2022",
            description: "Completed advanced level education with strong foundation in mathematics and science, developing analytical thinking and problem-solving skills.",
            icon: <BookOpen size={24} />,
            gradient: "from-pink-500 to-red-500"
        },
        {
            institution: "H/Warapitiya National School",
            period: "2007 - 2018",
            description: "Primary and secondary education where I first discovered my passion for technology and logical thinking through mathematics and science subjects.",
            icon: <BookOpen size={24} />,
            gradient: "from-blue-500 to-purple-500"
        }
    ];

    // Gallery images data
    const galleryImages = [
        { src: '/images/collage2.png', alt: 'Project Collage 1' },
        { src: '/images/collage1.png', alt: 'Project Collage 2' },
        { src: '/images/1.jpg', alt: 'Gallery Image 1' },
        { src: '/images/2.jpg', alt: 'Gallery Image 2' },
        { src: '/images/3.jpg', alt: 'Gallery Image 3' },
        { src: '/images/4.jpg', alt: 'Gallery Image 4' },
        { src: '/images/5.jpg', alt: 'Gallery Image 5' },
        { src: '/images/6.jpg', alt: 'Gallery Image 6' },
        { src: '/images/7.jpg', alt: 'Gallery Image 7' },
        { src: '/images/8.jpg', alt: 'Gallery Image 8' },
        { src: '/images/9.jpg', alt: 'Gallery Image 9' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
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
                {/* Header Section */}
                <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        ABOUT <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ME</span>
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </div>

                {/* About Content */}
                <div className={`flex flex-col lg:flex-row items-center gap-16 mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    <div className="lg:w-1/3">
                        <div className="relative w-80 h-80 mx-auto">
                            <div className="absolute -inset-4 rounded-full border-4 border-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow opacity-60"></div>
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                                <div className="w-full h-full bg-gradient-to-br from-purple-900/80 to-pink-900/80 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                                            <span className="text-4xl font-bold text-white">IE</span>
                                        </div>
                                        <p className="text-gray-300">Ishani Ekanayake</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                                1+ YEARS EXPERIENCE
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Software Engineering Student & Developer
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Hi, I'm Ishani Ekanayake, a 22-year-old Software Engineering undergraduate at IJSE from Sri Lanka. 
                                I am passionate about coding and technology, with a keen interest in creating innovative software 
                                solutions that make a meaningful impact.
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Driven by curiosity and a desire to learn, I thrive on collaborating with others and tackling 
                                challenging projects. I'm excited to connect with like-minded individuals and explore opportunities 
                                to apply my skills in dynamic and impactful ways.
                            </p>
                            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl flex items-center">
                                <Download className="mr-2 group-hover:animate-bounce" size={20} />
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>

                {/* Education Section */}
                <div className={`mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        EDU<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">CATION</span>
                    </h2>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>

                        <div className="space-y-16">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >
                                    {/* Timeline dot */}
                                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${edu.gradient} border-4 border-gray-900 z-10`}></div>

                                    {/* Content card */}
                                    <div className={`w-5/12 bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`p-3 rounded-full bg-gradient-to-r ${edu.gradient} group-hover:scale-110 transition-transform`}>
                                                {edu.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                                                <p className="text-purple-300 font-semibold flex items-center">
                                                    <Calendar size={16} className="mr-1" />
                                                    {edu.period}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-gray-300">{edu.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className={`mb-20 transition-all duration-1000 transform ${skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        MY <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SKILLS</span>
                    </h2>

                    <div className="space-y-16">
                        <SkillCategory title="Programming Languages" skills={programmingLanguages} delay={0} />
                        <SkillCategory title="Frontend Development" skills={frontendSkills} delay={200} />
                        <SkillCategory title="Mobile Development" skills={mobileSkills} delay={400} />
                        <SkillCategory title="Backend Development" skills={backendSkills} delay={600} />
                        <SkillCategory title="Database" skills={databaseSkills} delay={800} />
                        <SkillCategory title="DevOps & Tools" skills={devopsTools} delay={1000} />
                        <SkillCategory title="IDEs & Design Tools" skills={ideTools} delay={1200} />
                    </div>
                </div>

                {/* Gallery Section */}
                <div className={`mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        GA<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">LLERY</span>
                    </h2>

                    <div className="gallery-wrapper">
                        <PerspectiveGallery images={galleryImages} onImageClick={setActiveImage} />
                    </div>
                </div>

                {/* Contact Section */}
                <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            <div className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Call Me</h3>
                                <p className="text-gray-300">076-7888979</p>
                                <p className="text-gray-300">072-0106953</p>
                            </div>

                            <div className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                                <a href="mailto:ishaniekanayaka27@gmail.com" className="text-purple-300 hover:text-pink-300 transition-colors">
                                    ishaniekanayaka27@gmail.com
                                </a>
                            </div>

                            <div className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                                <p className="text-gray-300">Walasmulla, Matara District</p>
                                <p className="text-gray-300">Sri Lanka</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-lg text-gray-300 mb-4 max-w-3xl mx-auto">
                                Feel free to get in touch with me. I am always open to discussing new projects, 
                                creative ideas or opportunities to be part of your vision.
                            </p>
                            <div className="flex justify-center">
                                <Heart className="text-red-500 animate-pulse" size={24} />
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center border-t border-gray-800 pt-8">
                        <p className="text-gray-400 mb-2">&copy; All rights reserved.</p>
                        <p className="text-gray-500">Design By: Ishani Ekanayake</p>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {activeImage && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setActiveImage(null)}>
                    <div className="max-w-4xl max-h-full">
                        <img src={activeImage.src} alt={activeImage.alt} className="w-full h-auto object-contain" />
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
                .gallery-wrapper {
                    font-family: 'Montserrat', sans-serif;
                    background-color: transparent;
                    z-index: 1000;
                    box-sizing: border-box;
                }

                :root {
                    --index: calc(1vw + 1vh);
                    --transition: cubic-bezier(.1, .7, 0, 1);
                }

                .gallery h1{
                    font-size: 48px;
                    text-align: center;
                    justify-content: center;
                    color: white;
                }

                .gallery span{
                    color: goldenrod;
                }

                .items {
                    display: flex;
                    gap: 0.4rem;
                    perspective: calc(var(--index) * 35);
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .item {
                    width: calc(var(--index) * 4);
                    height: calc(var(--index) * 15);
                    background-color: #222;
                    background-size: cover;
                    background-position: center;
                    cursor: pointer;
                    filter: grayscale(1) brightness(.5);
                    transition: transform 1.25s var(--transition), filter 3s var(--transition), width 1.25s var(--transition);
                    will-change: transform, filter, rotateY, width;
                    position: relative;
                    overflow: hidden;
                    border-radius: 8px;
                }

                .item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 1s ease;
                }

                .item:hover img {
                    transform: scale(1.1);
                }

                .item::before,
                .item::after {
                    content: '';
                    position: absolute;
                    height: 100%;
                    width: 20px;
                    right: calc(var(--index) * -1);
                }

                .item::after {
                    left: calc(var(--index) * -1);
                }

                .items .item:hover {
                    filter: inherit;
                    transform: translateZ(calc(var(--index) * 10));
                }

                /* Right */
                .items .item:hover + * {
                    filter: inherit;
                    transform: translateZ(calc(var(--index) * 8.5)) rotateY(35deg);
                    z-index: -1;
                }

                .items .item:hover + * + * {
                    filter: inherit;
                    transform: translateZ(calc(var(--index) * 5.6)) rotateY(40deg);
                    z-index: -2;
                }

                .items .item:hover + * + * + * {
                    filter: inherit;
                    transform: translateZ(calc(var(--index) * 2.5)) rotateY(30deg);
                    z-index: -3;
                }

                .items .item:hover + * + * + * + * {
                    filter: inherit;
                    transform: translateZ(calc(var(--index) * .6)) rotateY(15deg);
                    z-index: -4;
                }

                /* Left */
                .items .item:has( + :hover) {
                    filter: inherit;
                    transform: translateZ(calc(var(--index) * 8.5)) rotateY(-35deg);
                }

                .items .item:has( + * + :hover) {
                    filter: inherit;
                    transform: translateZ(calc(var(--index) * 5.6)) rotateY(-40deg);
                }

                .items .item:has( + * + * + :hover) {
                    filter: inherit;
                    transform: translateZ(calc(var(--index) * 2.5)) rotateY(-30deg);
                }

                .items .item:has( + * + * + * + :hover) {
                    filter: inherit;
                    transform: translateZ(calc(var(--index) * .6)) rotateY(-15deg);
                }

                .items .item:active,
                .items .item:focus {
                    width: 28vw;
                    filter: inherit;
                    z-index: 100;
                    transform: translateZ(calc(var(--index) * 10));
                    margin: 0 .45vw;
                }

                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
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

    function SkillCategory({ title, skills, delay = 0 }: { title: string; skills: { name: string; icon: React.ReactNode }[]; delay?: number }) {
        return (
            <div className={`mb-12 transition-all duration-1000 transform ${skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${delay}ms` }}>
                <h3 className="text-2xl font-bold mb-6 text-center">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{title}</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="group bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-xl p-4 text-center hover:bg-gray-800/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            style={{ transitionDelay: `${delay + index * 50}ms` }}
                        >
                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

// Perspective Gallery Component
type PerspectiveGalleryProps = {
    images: { src: string; alt: string }[];
    onImageClick: (image: { src: string; alt: string }) => void;
};

const PerspectiveGallery = ({ images, onImageClick }: PerspectiveGalleryProps) => {
    return (
        <div className="wrapper" style={{ height: '60vh', marginTop: '-50px' }}>
            <div className="items">
                {images.map((image, index) => (
                    <div 
                        key={index}
                        className="item"
                        onClick={() => onImageClick(image)}
                    >
                        <div className="w-full h-full bg-gradient-to-br from-purple-900/60 to-pink-900/60 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <span className="text-2xl">🖼️</span>
                                </div>
                                <p className="text-gray-300 text-sm">Image {index + 1}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;