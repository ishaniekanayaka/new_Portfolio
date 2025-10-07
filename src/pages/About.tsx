import { useState, useEffect } from 'react';
import { Download, GraduationCap, BookOpen, Calendar, MapPin, Phone, Mail, Heart, Code, Palette, Database, Smartphone, Cloud, Zap } from 'lucide-react';
// Import your profile image
import profileImage from './../image/me.png'; // Update path as needed
import CV from './../assets/cv/ISHA EKANAYAKA.pdf';

// Import gallery images
import collage1 from './../image/gallery/collage1.png';
import collage2 from './../image/gallery/collage2.png';
import img1 from './../image/gallery/1.jpg';
import img2 from './../image/gallery/2.jpg';
import img3 from './../image/gallery/3.jpg';
import img4 from './../image/gallery/4.jpg';
import img5 from './../image/gallery/5.jpg';
import img6 from './../image/gallery/6.jpg';
import img7 from './../image/gallery/7.jpg';
import img8 from './../image/gallery/8.jpg';
import img9 from './../image/gallery/9.jpg';


const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [skillsVisible, setSkillsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        setIsVisible(true);
        
        const timer = setTimeout(() => {
            setSkillsVisible(true);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    // Updated skills with Firebase and React Native
    const skills = [
        {
            name: "Java",
            icon: "☕",
            category: "Backend",
            color: "from-red-500 to-orange-500"
        },
        {
            name: "Python",
            icon: "🐍",
            category: "Backend",
            color: "from-yellow-500 to-blue-500"
        },
        {
            name: "JavaScript",
            icon: "💛",
            category: "Frontend",
            color: "from-yellow-400 to-yellow-600"
        },
        {
            name: "TypeScript",
            icon: "🔷",
            category: "Frontend",
            color: "from-blue-600 to-blue-400"
        },
        {
            name: "HTML5",
            icon: "🌐",
            category: "Frontend",
            color: "from-orange-600 to-red-500"
        },
        {
            name: "CSS3",
            icon: "🎨",
            category: "Frontend",
            color: "from-blue-500 to-purple-500"
        },
        {
            name: "React",
            icon: "⚛️",
            category: "Frontend",
            color: "from-cyan-400 to-blue-500"
        },
        {
            name: "React Native",
            icon: "📱",
            category: "Mobile",
            color: "from-blue-400 to-purple-500"
        },
        {
            name: "Redux",
            icon: "🔄",
            category: "Frontend",
            color: "from-purple-600 to-pink-600"
        },
        {
            name: "Tailwind CSS",
            icon: "💨",
            category: "Frontend",
            color: "from-cyan-500 to-blue-600"
        },
        {
            name: "Bootstrap",
            icon: "🅱️",
            category: "Frontend",
            color: "from-purple-700 to-indigo-600"
        },
        {
            name: "Node.js",
            icon: "🟢",
            category: "Backend",
            color: "from-green-500 to-green-700"
        },
        {
            name: "Express",
            icon: "🚂",
            category: "Backend",
            color: "from-gray-600 to-gray-800"
        },
        {
            name: "Spring Boot",
            icon: "🍃",
            category: "Backend",
            color: "from-green-600 to-emerald-500"
        },
        {
            name: "MongoDB",
            icon: "🍃",
            category: "Database",
            color: "from-green-600 to-green-400"
        },
        {
            name: "MySQL",
            icon: "🗄️",
            category: "Database",
            color: "from-blue-600 to-blue-400"
        },
        {
            name: "PostgreSQL",
            icon: "🐘",
            category: "Database",
            color: "from-blue-700 to-indigo-600"
        },
        {
            name: "Firebase",
            icon: "🔥",
            category: "Database",
            color: "from-yellow-500 to-orange-500"
        },
        {
            name: "Figma",
            icon: "🎯",
            category: "Design",
            color: "from-purple-500 to-pink-500"
        },
        {
            name: "Canva",
            icon: "🎨",
            category: "Design",
            color: "from-cyan-400 to-blue-500"
        },
        {
            name: "AWS",
            icon: "☁️",
            category: "DevOps",
            color: "from-orange-400 to-yellow-500"
        },
        {
            name: "Docker",
            icon: "🐳",
            category: "DevOps",
            color: "from-blue-500 to-cyan-500"
        },
        {
            name: "Git",
            icon: "📝",
            category: "DevOps",
            color: "from-red-500 to-orange-600"
        }
    ];

    // Group skills by category
    const skillCategories = [
        { name: "Frontend Development", icon: <Code size={24} />, color: "from-cyan-500 to-blue-500" },
        { name: "Backend Development", icon: <Zap size={24} />, color: "from-green-500 to-emerald-500" },
        { name: "Mobile Development", icon: <Smartphone size={24} />, color: "from-purple-500 to-pink-500" },
        { name: "Database", icon: <Database size={24} />, color: "from-blue-600 to-indigo-600" },
        { name: "Design", icon: <Palette size={24} />, color: "from-pink-500 to-rose-500" },
        { name: "DevOps", icon: <Cloud size={24} />, color: "from-orange-500 to-amber-500" }
    ];

    const galleryImages = [
        { url: collage2, alt: 'Project 1' },
        { url: collage1, alt: 'Project 2' },
        { url: img1, alt: 'Project 3' },
        { url: img2, alt: 'Project 4' },
        { url: img3, alt: 'Project 5' },
        { url: img4, alt: 'Project 6' },
        { url: img5, alt: 'Project 7' },
        { url: img6, alt: 'Project 8' },
        { url: img7, alt: 'Project 9' },
        { url: img8, alt: 'Project 10' },
        { url: img9, alt: 'Project 11' }
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white relative pt-20">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
                {/* Header Section */}
                <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                    <h1 className="text-4xl md:text-7xl font-bold mt-[-90px] mb-4 md:mb-6">
                        ABOUT <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ME</span>
                    </h1>
                    <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </div>

                {/* About Content with Image - Mobile Responsive */}
                <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-12 md:mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    {/* Professional Image Section */}
                    <div className="w-full lg:w-1/3">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                            {/* Animated gradient border */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl opacity-75 blur-lg animate-pulse"></div>
                            
                            {/* Image container with professional styling */}
                            <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-gray-800 to-gray-900">
                                {/* Profile Image */}
                                <img 
                                    src={profileImage} 
                                    alt="Ishani Ekanayake" 
                                    className="w-full h-full object-cover object-center"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                        if (fallback) fallback.style.display = 'flex';
                                    }}
                                />
                                
                                {/* Fallback */}
                                <div className="w-full h-full bg-gradient-to-br from-purple-900/80 to-pink-900/80 flex items-center justify-center" style={{display: 'none'}}>
                                    <div className="text-center">
                                        <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                                            <span className="text-3xl md:text-4xl font-bold text-white">IE</span>
                                        </div>
                                        <p className="text-gray-300 font-medium text-sm md:text-base">Ishani Ekanayake</p>
                                    </div>
                                </div>

                                {/* Professional overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent pointer-events-none"></div>
                            </div>
                            
                            {/* Experience badge */}
                            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold animate-bounce shadow-lg z-10">
                                2+ YEARS
                            </div>

                            {/* Decorative corner elements */}
                            <div className="absolute -bottom-2 -left-2 w-16 h-16 border-l-4 border-b-4 border-purple-500 rounded-bl-3xl opacity-50"></div>
                            <div className="absolute -top-2 -right-2 w-16 h-16 border-r-4 border-t-4 border-pink-500 rounded-tr-3xl opacity-50"></div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-2/3">
                        <div className="space-y-4 md:space-y-6">
                            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Software Engineering Student & Full-Stack Developer
                            </h2>
                            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
                                Hi, I'm Ishani Ekanayake, a 22-year-old Software Engineering undergraduate at IJSE from Sri Lanka. 
                                I am passionate about coding and technology, with a keen interest in creating innovative software 
                                solutions that make a meaningful impact.
                            </p>
                            
                            {/* <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-xl flex items-center text-sm md:text-base">
                                <Download className="mr-2 group-hover:animate-bounce" size={18} />
                                Download CV
                            </button> */}
                            <button
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = CV;
                                    link.download = 'IshaniCV.pdf'; // The downloaded file name
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}
                                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-xl flex items-center text-sm md:text-base"
                                >
                                <Download className="mr-2 group-hover:animate-bounce" size={18} />
                                Download CV
                            </button>


                        </div>
                    </div>
                </div>

                {/* Education Section - Mobile Responsive */}
                <div className={`mb-12 md:mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16">
                        EDU<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">CATION</span>
                    </h2>

                    {/* Mobile: Vertical Cards, Desktop: Timeline */}
                    <div className="block md:hidden space-y-6">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-5 hover:bg-gray-800/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <div className={`p-2.5 rounded-full bg-gradient-to-r ${edu.gradient} flex-shrink-0`}>
                                        {edu.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white mb-1">{edu.institution}</h3>
                                        <p className="text-purple-300 text-sm font-semibold flex items-center">
                                            <Calendar size={14} className="mr-1" />
                                            {edu.period}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Desktop: Timeline View */}
                    <div className="hidden md:block relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>

                        <div className="space-y-16">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >
                                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${edu.gradient} border-4 border-gray-900 z-10 animate-pulse`}></div>

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

                {/* Skills Section - Mobile Responsive */}
                <div className={`mb-12 md:mb-20 transition-all duration-1000 transform ${skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16">
                        MY <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SKILLS</span>
                    </h2>

                    <div className="space-y-8 md:space-y-12">
                        {skillCategories.map((category, catIndex) => {
                            const categorySkills = skills.filter(skill => skill.category === category.name.split(' ')[0]);
                            if (categorySkills.length === 0) return null;

                            return (
                                <div 
                                    key={category.name}
                                    className="transition-all duration-700 transform"
                                    style={{ 
                                        transitionDelay: `${catIndex * 200}ms`,
                                        opacity: skillsVisible ? 1 : 0,
                                        transform: skillsVisible ? 'translateY(0)' : 'translateY(50px)'
                                    }}
                                >
                                    <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                                        <div className={`p-2 md:p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                                            {category.icon}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                            {category.name}
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
                                        {categorySkills.map((skill, index) => (
                                            <div
                                                key={skill.name}
                                                className="group relative bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-gray-800/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                                                style={{ 
                                                    transitionDelay: `${catIndex * 200 + index * 50}ms`,
                                                    animation: skillsVisible ? `skillPop 0.6s ease-out ${catIndex * 0.2 + index * 0.05}s both` : 'none'
                                                }}
                                            >
                                                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                                
                                                <div className="relative z-10">
                                                    <div className="text-3xl md:text-4xl mb-2 md:mb-3 group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12">
                                                        {skill.icon}
                                                    </div>
                                                    <h4 className="text-xs md:text-sm font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                                                        {skill.name}
                                                    </h4>
                                                </div>

                                                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                 {/* Gallery Section */}
                <div className={`mb-12 md:mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16">
                        GA<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">LLERY</span>
                    </h2>

                    <div className="flex items-center justify-center overflow-x-auto pb-8">
                        <div className="flex gap-2 px-4" style={{ perspective: '1400px' }}>
                            {galleryImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative flex-shrink-0 cursor-pointer transition-all duration-1000 ease-out"
                                    style={{
                                        width: hoveredIndex === index ? '350px' : '80px',
                                        height: '400px',
                                        filter: hoveredIndex === null || hoveredIndex === index ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.5)',
                                        transform: hoveredIndex === index 
                                            ? 'translateZ(100px) scale(1.05)' 
                                            : hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1
                                            ? `translateZ(85px) rotateY(${hoveredIndex > index ? '35deg' : '-35deg'})`
                                            : hoveredIndex !== null && Math.abs(hoveredIndex - index) === 2
                                            ? `translateZ(56px) rotateY(${hoveredIndex > index ? '40deg' : '-40deg'})`
                                            : 'translateZ(0)',
                                        zIndex: hoveredIndex === index ? 100 : hoveredIndex !== null && Math.abs(hoveredIndex - index) <= 2 ? 50 - Math.abs(hoveredIndex - index) * 10 : 1
                                    }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-800 shadow-2xl">
                                        <img
                                            src={image.url}
                                            alt={image.alt}
                                            className="w-full h-full object-cover transition-transform duration-1000"
                                            style={{
                                                transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl md:rounded-3xl p-6 md:p-8 mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
                            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
                            <div className="text-center group">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Call Me</h3>
                                <p className="text-gray-300 text-sm md:text-base">076-7888979</p>
                                <p className="text-gray-300 text-sm md:text-base">072-0106953</p>
                            </div>

                            <div className="text-center group">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Email</h3>
                                <a href="mailto:ishaniekanayaka27@gmail.com" className="text-purple-300 hover:text-pink-300 transition-colors text-sm md:text-base break-all">
                                    ishaniekanayaka27@gmail.com
                                </a>
                            </div>

                            <div className="text-center group">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Address</h3>
                                <p className="text-gray-300 text-sm md:text-base">Walasmulla, Matara District</p>
                                <p className="text-gray-300 text-sm md:text-base">Sri Lanka</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-base md:text-lg text-gray-300 mb-4 max-w-3xl mx-auto px-4">
                                Feel free to get in touch with me. I am always open to discussing new projects, 
                                creative ideas or opportunities to be part of your vision.
                            </p>
                            <div className="flex justify-center">
                                <Heart className="text-red-500 animate-pulse w-5 h-5 md:w-6 md:h-6" />
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center border-t border-gray-800 pt-6 md:pt-8">
                        <p className="text-gray-400 mb-2 text-sm md:text-base">&copy; 2024 All rights reserved.</p>
                        <p className="text-gray-500 text-xs md:text-sm">Design By: Ishani Ekanayake</p>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes skillPop {
                    0% {
                        opacity: 0;
                        transform: scale(0.5) translateY(30px);
                    }
                    50% {
                        transform: scale(1.1) translateY(-5px);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
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
};

export default About;