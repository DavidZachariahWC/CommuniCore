/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Floating Hamburger Menu */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors focus:outline-none"
          aria-label="Menu"
        >
          <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>
      
      {/* Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center" onClick={() => setIsMenuOpen(false)}>
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">CommuniCore</h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="/pdf" 
                    className="block py-3 px-4 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    PDF Resource
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/powerpoint" 
                    className="block py-3 px-4 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    PowerPoint Presentation
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/infographic" 
                    className="block py-3 px-4 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Infographic
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/handout" 
                    className="block py-3 px-4 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Training Handout
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section with Centered Title */}
      <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        {/* Wave pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="h-full w-full">
            <path d="M 0 300 Q 300 250 600 300 Q 900 350 1200 300 L 1200 800 L 0 800 Z" fill="white"/>
            <path d="M 0 500 Q 300 450 600 500 Q 900 550 1200 500 L 1200 800 L 0 800 Z" fill="white" opacity="0.3"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mx-auto w-[600px] h-[400px] md:w-[800px] md:h-[500px] relative">
            <Image 
              src="/hero-image.png" 
              alt="Executive Presence" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 animate-fadeIn">
            The Art of Building Executive Presence
          </h1>
          <h2 className="text-3xl md:text-4xl font-light text-blue-200 mb-8 animate-fadeIn">
            by CommuniCore
          </h2>
          <div className="mt-8 animate-bounce">
            <svg className="w-8 h-8 mx-auto text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            <span className="text-sm font-light mt-2 block">Scroll to learn more</span>
          </div>
        </div>
        
        {/* Curvy divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-24">
            <path fill="#f9fafb" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,229.3C840,235,960,213,1080,202.7C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Mission Statement Section */}
      <main className="bg-gradient-to-b from-gray-50 to-gray-100 relative">
        <section className="container mx-auto px-6 py-10 relative">
          {/* Remove wave pattern overlay */}
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 mx-auto w-[640px] h-[320px] relative">
              <Image 
                src="/mission-image.png" 
                alt="Our Mission" 
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Our Mission</h2>
            {/* Improved curved dividing line */}
            <div className="w-80 h-6 mx-auto mb-10">
              <svg viewBox="0 0 320 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M 0 12 Q 80 0 160 12 Q 240 24 320 12" stroke="url(#gradient)" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              At CommuniCore, we believe that executive presence is a skill that can be learned, 
              refined, and mastered. Our comprehensive approach helps professionals at all levels 
              develop the confidence, communication skills, and leadership qualities needed to 
              command a room and inspire others.
            </p>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Whether you're preparing for a promotion, looking to enhance your leadership capabilities, 
              or simply want to communicate with more impact, our proven methodologies will help you 
              achieve your goals.
            </p>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-md transform hover:translate-y-[-2px]">
                Start Your Journey
              </button>
            </div>
          </div>
        </section>

        {/* DISC Assessment Section */}
        <section className="py-32 bg-gradient-to-r from-indigo-900 to-purple-900 text-white relative">
          {/* Wavy curve at top of section */}
          <div className="absolute top-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-24" style={{ transform: 'rotate(180deg)' }}>
              <path fill="#f9fafb" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,229.3C840,235,960,213,1080,202.7C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
          </div>
          
          <div className="container mx-auto px-6 max-w-6xl relative z-10 my-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-yellow-300 drop-shadow-md">DISC</span>over Your Workplace Personality
              </h2>
              <div className="w-32 h-1 bg-yellow-300 mx-auto rounded-full"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-xl mb-10 text-indigo-100 leading-relaxed">
                  Understanding your unique personality style is the first step toward developing 
                  powerful executive presence. Take the <span className="text-yellow-300 font-semibold">DISC</span> assessment to identify your strengths 
                  and discover how you can leverage them for greater impact.
                </p>
                <ul className="mb-10 text-left space-y-5 text-indigo-100">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-yellow-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Identify your natural communication style</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-yellow-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Understand how others perceive your leadership</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-yellow-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Learn how to adapt your approach for better results</span>
                  </li>
                </ul>
                <div className="flex justify-center md:justify-start">
                  <a 
                    href="https://www.truity.com/test/disc-personality-test" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-white text-indigo-900 hover:bg-yellow-50 font-bold py-4 px-8 rounded-full transition duration-300 shadow-md transform hover:translate-y-[-2px] hover:shadow-lg"
                  >
                    Take the <span className="text-indigo-600 font-bold">DISC</span> Assessment →
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="w-[550px] h-[400px] relative overflow-hidden">
                  <Image 
                    src="/disc-assessment.png" 
                    alt="DISC Assessment" 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Wavy curve at bottom of section */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-24">
              <path fill="#f9fafb" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,229.3C840,235,960,213,1080,202.7C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Leadership Assessment Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative">
          {/* Wave pattern overlay */}
          <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
            <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="h-full w-full">
              <path d="M 0 200 Q 300 100 600 200 Q 900 300 1200 200 L 1200 800 L 0 800 Z" fill="#4338ca"/>
              <path d="M 0 500 Q 300 400 600 500 Q 900 600 1200 500 L 1200 800 L 0 800 Z" fill="#4338ca" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-xl shadow-xl p-10 text-white w-full transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                {/* Remove wave pattern inside card */}
                
                <div className="relative z-10">
                  <div className="w-[500px] h-[200px] relative mx-auto mb-6">
                    <Image 
                      src="/leadership-assessment.png" 
                      alt="Leadership Assessment" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-center">Discover More About Your Leadership Style</h3>
                  <p className="text-xl mb-8 text-center text-blue-100">
                    Take our leadership assessment to learn more about your unique leadership style and 
                    how to leverage your strengths for maximum impact.
                  </p>
                  <div className="flex justify-center">
                    <a 
                      href="https://quiz.tryinteract.com/#/6801178311186a001585464d" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block bg-white text-indigo-900 hover:bg-blue-100 font-bold py-4 px-8 rounded-full transition duration-300 shadow-md transform hover:translate-y-[-2px]"
                    >
                      Take Our Leadership Assessment →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Curve at bottom of section */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-16">
              <path fill="#111827" fillOpacity="1" d="M0,160L120,165.3C240,171,480,181,720,176C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 relative">
          {/* Wave pattern overlay */}
          <div className="absolute inset-0 z-0 opacity-10 overflow-hidden">
            <svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="h-full w-full">
              <path d="M 0 50 Q 300 100 600 50 Q 900 0 1200 50 L 1200 600 L 0 600 Z" fill="white"/>
              <path d="M 0 150 Q 300 200 600 150 Q 900 100 1200 150 L 1200 600 L 0 600 Z" fill="white" opacity="0.2"/>
            </svg>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">CommuniCore</h3>
              <p className="mb-6 text-gray-300">Transforming professionals into influential leaders</p>
            </div>
            <div className="border-t border-gray-800 pt-8 mt-8 text-center">
              <p className="text-gray-400">© {new Date().getFullYear()} CommuniCore. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
