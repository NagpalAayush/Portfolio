import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MailIcon, Code, User, ExternalLink, Github, PhoneCallIcon } from "lucide-react";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress, SiNextdotjs, SiFirebase, SiSanity, SiTailwindcss, SiTypescript, SiGit, SiLinkedin } from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};


const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const marqueeVariants = {
  animate: {
    x: ["30%", "-100%"],
    transition: { duration: 30, repeat: Infinity, ease: "linear" }
  }
};

// Technology list
const technologies = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express", icon: SiExpress },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Firebase", icon: SiFirebase },
  { name: "SanityIO", icon: SiSanity },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Git & GitHub", icon: SiGit },
];

export default function PortfolioLanding() {
  const [isOpen, setIsOpen] = useState(false);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-900 text-white overflow-hidden">

      {/* Header */}
      <motion.header layout className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
        <nav className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <h1 className="text-xl font-bold">Aayush Nagpal</h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li><button onClick={() => scrollToSection(heroRef)} className="hover:text-blue-400 transition">Home</button></li>
            <li><button onClick={() => scrollToSection(aboutRef)} className="hover:text-blue-400 transition">About Me</button></li>
            <li><button onClick={() => scrollToSection(projectsRef)} className="hover:text-blue-400 transition">Projects</button></li>
            <li><button onClick={() => scrollToSection(contactRef)} className="hover:text-blue-400 transition">Contact Me</button></li>
          </ul>

          {/* Hamburger Menu for Mobile */}
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-gray-800 flex flex-col space-y-4 py-4 px-6 absolute w-full left-0 top-[64px]"
          >
            <li><button onClick={() => scrollToSection(heroRef)} className="block hover:text-blue-400">Home</button></li>
            <li><button onClick={() => scrollToSection(aboutRef)} className="block hover:text-blue-400">About Me</button></li>
            <li><button onClick={() => scrollToSection(projectsRef)} className="block hover:text-blue-400">Projects</button></li>
            <li><button onClick={() => scrollToSection(contactRef)} className="block hover:text-blue-400">Contact Me</button></li>
          </motion.ul>
        )}
      </motion.header>

      {/* Hero Section */}
      <motion.div ref={heroRef} className="h-screen  flex flex-col items-center justify-center px-4" initial="hidden" animate="visible" variants={fadeIn}>
        <motion.h1 className="text-4xl font-bold mb-3" variants={fadeInUp}>
          Hi, I'm Aayush Nagpal – MERN Stack Developer
        </motion.h1>
        <motion.p className="text-lg text-gray-400 mb-4 text-center" variants={fadeInUp}>
          Turning ideas into Reality ! <br /><br />| MongoDB | Express | React | Node.js
        </motion.p>

        {/* Marquee Animation */}
        <motion.div className="w-[30rem] overflow-hidden whitespace-nowrap text-gray-400 text-3xl mb-6">
          <motion.div className="inline-flex gap-6" variants={marqueeVariants} animate="animate">
            {technologies.map((tech, index) => (
              <span key={index} className="flex items-center gap-2">
                <tech.icon className="text-xl text-gray-300" />
                {tech.name}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Buttons for smooth scrolling */}
        <motion.div className="flex space-x-3" variants={fadeInUp}>
          <motion.button onClick={() => scrollToSection(aboutRef)} className="px-5 py-2.5 bg-blue-500 rounded-lg flex items-center gap-2 hover:bg-blue-600">
            <User size={18} /> About Me
          </motion.button>

          <motion.button onClick={() => scrollToSection(projectsRef)} className="px-5 py-2.5 bg-green-500 rounded-lg flex items-center gap-2 hover:bg-green-600">
            <Code size={18} /> Projects
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        ref={aboutRef}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-800 text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Me</h2>

        <motion.p
          className="text-gray-400 max-w-2xl text-center text-lg md:text-xl leading-relaxed"
          variants={fadeInUp}
        >
          Hey, I'm Aayush Nagpal.
          I love building web applications and solving real-world problems with code.
          Whether it's frontend development with React or backend work with Node.js and MongoDB,
          I enjoy the process of creating smooth and efficient applications.

          Always eager to learn and improve, I keep experimenting with new technologies and
          better ways to build things.
        </motion.p>
      </motion.div>



      <motion.div
        ref={projectsRef}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-800 text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Projects</h2>

        <motion.p className="text-gray-400 max-w-xl text-center mb-8 text-lg md:text-xl" variants={fadeInUp}>
          Here are some of my projects showcasing my full-stack development skills.
        </motion.p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Project Card Template */}
          {[
            {
              title: "Startup Library",
              description: "A platform where entrepreneurs can list their startups and share their ideas with the world.",
              techStack: "Next.js, SanityIO, Sentry, NextAuth",
              github: "https://github.com/NagpalAayush/Startup_Project.git",
              live: "https://startup-project-nu.vercel.app/",
            },
            {
              title: "Real Estate Rent",
              description: "A full-stack rental platform where users can list, book, and manage properties seamlessly.",
              techStack: "Next.js, TailwindCSS, Firebase, MongoDB, Express, Node.js",
              github: "https://github.com/NagpalAayush/RealEstate-Rent.git",
              live: "https://realestate-rent-aayush.onrender.com/",
            },
            {
              title: "Password Generator",
              description: "A secure and customizable password generator built using React and TailwindCSS.",
              techStack: "React, TailwindCSS",
              github: "https://github.com/NagpalAayush/PassswordGenerator.git",
              live: "https://aayush-password-generator.netlify.app/",
            },
            {
              title: "Currency Exchange Rate Converter",
              description: "A simple and efficient currency converter that fetches real-time exchange rates.",
              techStack: "React, API Integration, TailwindCSS",
              github: "https://github.com/NagpalAayush/Currency_Converter.git",
              live: "https://aayush-currency-converter.netlify.app/",
            },
            {
              title: "Inventory Management System",
              description: "A full-stack inventory management system to track products, stock, and sales efficiently.",
              techStack: "React, Firebase (Google OAuth), MongoDB, Express, Node.js",
              github: "https://github.com/NagpalAayush/Inventory.git",
              live: null, // No live link for ongoing projects
              ongoing: true,
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900 rounded-lg shadow-lg flex flex-col"
              whileHover={{ scale: 1.03 }}
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
              <p className="text-gray-300 mt-2 text-sm">Tech Stack: {project.techStack}</p>

              {project.ongoing && (
                <p className="text-yellow-400 mt-2 text-sm font-medium">⚠️ Work in Progress</p>
              )}

              <div className="flex space-x-4 mt-4">
                <a
                  href={project.github}
                  className="text-blue-400 hover:text-blue-500 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} className="mr-1" /> GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    className="text-green-400 hover:text-green-500 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-1" /> Live Site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>



      {/* Contact Section */}
      <motion.div
        ref={contactRef}
        className="h-screen flex flex-col items-center justify-center px-6 bg-gray-900 text-white"
      >
        <h2 className="text-3xl font-bold mb-3 text-center">Contact Me</h2>
        <motion.p className="text-gray-400 max-w-lg text-center mb-6" variants={fadeInUp}>
          Have a project in mind or just want to say hi? Feel free to reach out!
        </motion.p>

        {/* Contact Details - Responsive Layout */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
          {/* Email */}
          <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
            <MailIcon className="text-blue-400" />
            <a href="mailto:aayushnagpal90@gmail.com" className="hover:text-blue-400 transition">
              aayushnagpal90@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
            <PhoneCallIcon className="text-green-400" />
            <a href="tel:9779213414" className="hover:text-green-400 transition">
              97792-13414
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
