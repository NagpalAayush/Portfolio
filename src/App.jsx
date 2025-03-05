import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MailIcon, PhoneCall, Code, User, ExternalLink, Github, PhoneCallIcon } from "lucide-react";
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
    <div className="bg-gray-900 text-white h-screen">

      {/* Header Navigation */}
      <motion.header layout className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
        <nav className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold">Aayush Nagpal</h1>
          <ul className="flex space-x-6">
            <li><button onClick={() => scrollToSection(heroRef)} className="hover:text-blue-400 transition">Home</button></li>
            <li><button onClick={() => scrollToSection(aboutRef)} className="hover:text-blue-400 transition">About Me</button></li>
            <li><button onClick={() => scrollToSection(projectsRef)} className="hover:text-blue-400 transition">Projects</button></li>
            <li><button onClick={() => scrollToSection(contactRef)} className="hover:text-blue-400 transition">Contact Me</button></li>
          </ul>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.div ref={heroRef} className="h-screen flex flex-col items-center justify-center px-4" initial="hidden" animate="visible" variants={fadeIn}>
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

      {/* About Section */}
      <motion.div ref={aboutRef} className="h-screen flex flex-col items-center justify-center px-4 bg-gray-800">
        <h2 className="text-3xl font-bold mb-3">About Me</h2>
        <motion.p className="text-gray-400 max-w-lg text-center" variants={fadeInUp}>
          Hey, I'm Aayush Nagpal.
          I love building web applications and solving real-world problems with code. Whether it's frontend development with React or backend
          work with Node.js and MongoDB, I enjoy the process of creating smooth and efficient applications. Always eager to learn and improve,
          I keep experimenting with new technologies and better ways to build things.
        </motion.p>
      </motion.div>


      {/* Projects Section */}
      <motion.div ref={projectsRef} className="h-screen flex flex-col items-center justify-center px-4 bg-gray-800">
        <h2 className="text-3xl font-bold mb-3">Projects</h2>
        <motion.p className="text-gray-400 max-w-lg text-center mb-4" variants={fadeInUp}>
          Here are some of my projects showcasing my full-stack development skills.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {/* Startup Library */}
          <motion.div className="p-4 bg-gray-900 rounded-lg shadow-lg" whileHover={{ scale: 1.03 }} variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-1">Startup Library</h3>
            <p className="text-gray-400 text-sm">A platform where entrepreneurs can list their startups and share their ideas with the world.</p>
            <p className="text-gray-300 mt-2 text-sm">Tech Stack: Next.js, SanityIO, Sentry, NextAuth</p>
            <div className="flex space-x-3 mt-3">
              <a href="https://github.com/NagpalAayush/Startup_Project.git" className="text-blue-400 hover:text-blue-500 flex items-center" target="_blank" rel="noopener noreferrer">
                <Github size={18} className="mr-1" /> GitHub
              </a>
              <a href="https://startup-project-nu.vercel.app/" className="text-green-400 hover:text-green-500 flex items-center" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} className="mr-1" /> Live Site
              </a>
            </div>
          </motion.div>

          {/* Real Estate Rent */}
          <motion.div className="p-4 bg-gray-900 rounded-lg shadow-lg" whileHover={{ scale: 1.03 }} variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-1">Real Estate Rent</h3>
            <p className="text-gray-400 text-sm">A full-stack rental platform where users can list, book, and manage properties seamlessly.</p>
            <p className="text-gray-300 mt-2 text-sm">Tech Stack: Next.js, TailwindCSS, Firebase, MongoDB, Express, Node.js</p>
            <div className="flex space-x-3 mt-3">
              <a href="https://github.com/NagpalAayush/RealEstate-Rent.git" className="text-blue-400 hover:text-blue-500 flex items-center" target="_blank" rel="noopener noreferrer">
                <Github size={18} className="mr-1" /> GitHub
              </a>
              <a href="https://realestate-rent-aayush.onrender.com/" className="text-green-400 hover:text-green-500 flex items-center" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} className="mr-1" /> Live Site
              </a>
            </div>
          </motion.div>

          {/* Password Generator */}
          <motion.div className="p-4 bg-gray-900 rounded-lg shadow-lg" whileHover={{ scale: 1.03 }} variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-1">Password Generator</h3>
            <p className="text-gray-400 text-sm">A secure and customizable password generator built using React and TailwindCSS.</p>
            <p className="text-gray-300 mt-2 text-sm">Tech Stack: React, TailwindCSS</p>
            <div className="flex space-x-3 mt-3">
              <a href="https://github.com/NagpalAayush/PassswordGenerator.git" className="text-blue-400 hover:text-blue-500 flex items-center" target="_blank" rel="noopener noreferrer">
                <Github size={18} className="mr-1" /> GitHub
              </a>
              <a href="https://aayush-password-generator.netlify.app/" className="text-green-400 hover:text-green-500 flex items-center" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} className="mr-1" /> Live Site
              </a>
            </div>
          </motion.div>

          {/* Currency Exchange Rate Converter */}
          <motion.div className="p-4 bg-gray-900 rounded-lg shadow-lg" whileHover={{ scale: 1.03 }} variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-1">Currency Exchange Rate Converter</h3>
            <p className="text-gray-400 text-sm">A simple and efficient currency converter that fetches real-time exchange rates.</p>
            <p className="text-gray-300 mt-2 text-sm">Tech Stack: React, API Integration, TailwindCSS</p>
            <div className="flex space-x-3 mt-3">
              <a href="https://github.com/NagpalAayush/Currency_Converter.git" className="text-blue-400 hover:text-blue-500 flex items-center" target="_blank" rel="noopener noreferrer">
                <Github size={18} className="mr-1" /> GitHub
              </a>
              <a href="https://aayush-currency-converter.netlify.app/" className="text-green-400 hover:text-green-500 flex items-center" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} className="mr-1" /> Live Site
              </a>
            </div>
          </motion.div>

          {/* Inventory Management System (Ongoing) */}
          <motion.div className="p-4 bg-gray-900 rounded-lg shadow-lg" whileHover={{ scale: 1.03 }} variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-1">Inventory Management System</h3>
            <p className="text-gray-400 text-sm">A full-stack inventory management system to track products, stock, and sales efficiently.</p>
            <p className="text-gray-300 mt-2 text-sm">Tech Stack: React, Firebase (Google OAuth), MongoDB, Express, Node.js</p>
            <p className="text-yellow-400 mt-2 text-sm font-medium">⚠️ Work in Progress</p>
            <div className="flex space-x-3 mt-3">
              <a href="https://github.com/NagpalAayush/Inventory.git" className="text-blue-400 hover:text-blue-500 flex items-center" target="_blank" rel="noopener noreferrer">
                <Github size={18} className="mr-1" /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>


      {/* Contact Section */}
      <motion.div ref={contactRef} className="h-screen flex flex-col items-center justify-center px-4 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-3">Contact Me</h2>
        <motion.p className="text-gray-400 max-w-lg text-center mb-4" variants={fadeInUp}>
          Have a project in mind or just want to say hi? Feel free to reach out!
        </motion.p>

        <div className="flex">
          <div className="flex justify-between align-middle mr-3 gap-3 p-3">
            <MailIcon /> <a href="mailto:aayushnagpal90@gmail.com">aayushnagpal90@gmail.com</a>

          </div>


          <div className="flex justify-between align-middle mr-3 gap-3 p-3">
            <PhoneCallIcon /> <a href="tel:9779213414">97792-13414</a>

          </div>
        </div>





      </motion.div>
    </div>
  );
}
