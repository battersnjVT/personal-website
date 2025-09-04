"use client"; // Required to use browser features like smooth scrolling

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  // Enable smooth scrolling for the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // State to track scroll position for navbar styling
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const homeSectionHeight = window.innerHeight;
      setIsScrolled(scrollPosition > homeSectionHeight * 0.25);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative">
             {/* Navbar */}
               <nav className={`fixed top-0 left-0 w-full z-50 flex justify-center gap-6 py-4 transition-all duration-300 border-b border-white ${
          isScrolled 
            ? 'bg-gray-900 shadow-lg' 
            : 'bg-transparent'
        }`}>
         <a href="#home" className={`font-black tracking-wider transition-colors duration-200 ${
           isScrolled 
             ? 'text-gray-300 hover:text-blue-400' 
             : 'text-white hover:text-blue-300'
         }`}>HOME</a>
         <a href="#about" className={`font-black tracking-wider transition-colors duration-200 ${
           isScrolled 
             ? 'text-gray-300 hover:text-blue-400' 
             : 'text-white hover:text-blue-300'
         }`}>ABOUT</a>
         <a href="#projects" className={`font-black tracking-wider transition-colors duration-200 ${
           isScrolled 
             ? 'text-gray-300 hover:text-blue-400' 
             : 'text-white hover:text-blue-400'
         }`}>PROJECTS</a>
         <a href="#resume" className={`font-black tracking-wider transition-colors duration-200 ${
           isScrolled 
             ? 'text-gray-300 hover:text-blue-400' 
             : 'text-white hover:text-blue-300'
         }`}>RESUME</a>
         <a href="#contact" className={`font-black tracking-wider transition-colors duration-200 ${
           isScrolled 
             ? 'text-gray-300 hover:text-blue-400' 
             : 'text-white hover:text-blue-300'
         }`}>CONTACT</a>
       </nav>

      {/* Sections */}

      {/* Home Section: hero with mountain background and social links */}
      <section id="home" className="h-screen flex items-center justify-center relative">
        
        {/* Home Content */}
                 <div className="text-center relative z-10">
           <h1 className="text-7xl font-bold text-white mb-8 drop-shadow-2xl filter drop-shadow-[0_25px_25px_rgba(0,0,0,1)]">Noah Batterson</h1>
           <p className="text-2xl text-white mb-12 max-w-4xl drop-shadow-2xl filter drop-shadow-[0_25px_25px_rgba(0,0,0,1)] leading-relaxed">
             I am currently a Junior majoring in Computer Science at Virginia Tech.
             <br></br>
             I&apos;m passionate about all kinds of things computer science, thanks for visiting my website!
           </p>
          
                     {/* Social Media Links */}
           <div className="flex justify-center gap-8 mt-8">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/noah-batterson" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            {/* Handshake (Profile is private atm, so only employers should be able to see it currently) */}
            <a 
              href="https://vt.joinhandshake.com/profiles/musdtp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-white hover:text-green-300 transition-colors duration-200"
              aria-label="Handshake Profile"
            >
              <svg className="w-10 h-10" viewBox="0 0 32 32" aria-hidden="true">
                <defs>
                  <mask id="mask-cutout-h">
                    <rect x="0" y="0" width="32" height="32" fill="white" />
                    <text x="15" y="18" textAnchor="middle" dominantBaseline="middle" fontSize="24" fontWeight="800" fontStyle="italic" fill="black" stroke="black" strokeWidth="1.5" fontFamily="Arial, Helvetica, sans-serif">H</text>
                  </mask>
                </defs>
                <rect x="0" y="0" width="32" height="32" rx="6" mask="url(#mask-cutout-h)" className="fill-white group-hover:fill-yellow-400 transition-colors duration-200" fill="white" />
              </svg>
            </a>
            
            {/* Email */}
            <a 
              href="mailto:noah.batterson42@gmail.com"
              className="text-white hover:text-red-300 transition-colors duration-200"
              aria-label="Send Email"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section: brief introduction */}
      <section id="about" className="h-screen flex items-center justify-center bg-gray-800">
        <div className="text-center">
          <h2 className="text-6xl font-bold mb-8 text-white">About Me</h2>
          <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto border border-gray-600/30 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 ease-out">
            <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Hello, I&apos;m Noah Batterson! In high school I attended the Center for Information Technology (CIT) at Deep Run High School. This was my first introduction to computer science, and I&apos;ve been on the path every since.
              <br></br>
              <br></br>
              Currently I&apos;m a Computer Science student interested in all sorts of topics in computer science.
              
              I&apos;m mostly interested in higher level Data Structures and Algorithms, Artificial Intelligence, Machine Learning, and Cybersecurity.  
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section: list of highlighted projects */}
      <section id="projects" className="h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h2 className="text-6xl font-bold mb-8 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
            {/* Personal Website Project */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden">
              <div className="h-48 bg-gray-700/30 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/Personal Website Thumbnail.png" 
                  alt="Personal Website Thumbnail" 
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  <a href="https://noahbatterson.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">
                    Personal Website (This one!)
                  </a>
                </h3>
                <p className="text-gray-300 text-sm">A modern and responsive personal portfolio website built with Next.js and Tailwind CSS, deployed with Vercel.</p>
              </div>
            </div>

            {/* Makemore AI Project */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden">
              <div className="h-48 bg-gray-700/30 flex items-center justify-center">
                <div className="text-gray-400 text-sm">{/*Project image should be here when completed*/}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Makemore Artificial Intelligence Model</h3>
                <p className="text-gray-300 text-sm">Building an AI model inspired by Andrej Karpathy&apos;s Makemore series for character-level language modeling.</p>
                <span className="inline-block mt-2 px-2 py-1 bg-yellow-600/20 text-yellow-300 text-xs rounded-full">In Progress</span>
              </div>
            </div>

            {/* Spades+ Project */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden">
              <div className="h-48 bg-gray-700/30 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/Spades+ Thumbnail.jpg" 
                  alt="Spades+ Game Thumbnail" 
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Spades+</h3>
                <p className="text-gray-300 text-sm">A twist on the classic Spades card game with enhanced features, additional gamemodes, and multiplayer support.</p>
                <span className="inline-block mt-2 px-2 py-1 bg-yellow-600/20 text-yellow-300 text-xs rounded-full">In Progress</span>
              </div>
            </div>

            {/* Codeswords+ Project */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden">
              <div className="h-48 bg-gray-700/30 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/Codewords+ Thumnail.png" 
                  alt="Codewords+ Game Thumbnail" 
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Codeswords+</h3>
                <p className="text-gray-300 text-sm">An online real-time multiplayer adaptation of the popular Codenames board game with numerous new features and gamemodes.</p>
                <span className="inline-block mt-2 px-2 py-1 bg-yellow-600/20 text-yellow-300 text-xs rounded-full">In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section: download my latest resume */}
      <section id="resume" className="h-screen flex items-center justify-center bg-gray-800">
        <div className="text-center">
          <h2 className="text-6xl font-bold mb-8 text-white">Resume</h2>
          <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto border border-gray-600/30 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 ease-out">
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Download my resume to learn more about my experience and skills.
            </p>
            <a
              href="/Resume%20Noah%20Batterson.pdf"
              download
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-md transition-colors duration-200"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section: contact methods and links */}
      <section id="contact" className="h-screen flex items-center justify-center bg-gray-950">
        <div className="text-center">
          <h2 className="text-6xl font-bold mb-8 text-white">Contact</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto border border-gray-600/30 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 ease-out">
            <div className="space-y-6">
              <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
               <strong>If you would like know more or get in touch with me, feel free to reach out!</strong>
              </p>
              <p className="text-xl text-gray-300">
                Email: <a href="mailto:noah.batterson42@gmail.com" className="text-blue-400 hover:text-blue-300 underline">noah.batterson42@gmail.com</a>
              </p>
              <p className="text-xl text-gray-300">
                Handshake: <a href="https://vt.joinhandshake.com/profiles/musdtp" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">vt.joinhandshake.com/profiles/musdtp</a>
              </p>
              <p className="text-xl text-gray-300">
                LinkedIn: <a href="https://www.linkedin.com/in/noah-batterson" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">linkedin.com/in/noah-batterson</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Navigation Button: skips to the next section */}
      <button 
        onClick={() => {
          const currentSection = window.location.hash || '#home';
          const sections = ['#home', '#about', '#projects', '#resume', '#contact'];
          const currentIndex = sections.indexOf(currentSection);
          const nextIndex = (currentIndex + 1) % sections.length;
          const nextSection = document.querySelector(sections[nextIndex]);
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
            window.location.hash = sections[nextIndex];
          }
        }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-40"
        aria-label="Go to next section"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </main>
  );
}