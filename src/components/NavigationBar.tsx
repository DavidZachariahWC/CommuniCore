/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { useState } from "react";

interface NavigationBarProps {
  currentRoute: string;
}

export default function NavigationBar({ currentRoute }: NavigationBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex flex-row justify-between items-center px-4">
          <Link href="/" className="text-xl font-bold">CommuniCore</Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-sm bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors">
              ← Back to Home
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors focus:outline-none"
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
        </div>
      </nav>
      
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
                    className={`block py-3 px-4 text-lg text-gray-700 rounded-lg transition-colors ${currentRoute === 'pdf' ? 'bg-blue-50 text-blue-600' : 'hover:bg-blue-50 hover:text-blue-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    PDF Resource
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/powerpoint" 
                    className={`block py-3 px-4 text-lg text-gray-700 rounded-lg transition-colors ${currentRoute === 'powerpoint' ? 'bg-blue-50 text-blue-600' : 'hover:bg-blue-50 hover:text-blue-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    PowerPoint Presentation
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/infographic" 
                    className={`block py-3 px-4 text-lg text-gray-700 rounded-lg transition-colors ${currentRoute === 'infographic' ? 'bg-blue-50 text-blue-600' : 'hover:bg-blue-50 hover:text-blue-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Infographic
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/assessment" 
                    className={`block py-3 px-4 text-lg text-gray-700 rounded-lg transition-colors ${currentRoute === 'assessment' ? 'bg-blue-50 text-blue-600' : 'hover:bg-blue-50 hover:text-blue-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Assessment Tool
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/handout" 
                    className={`block py-3 px-4 text-lg text-gray-700 rounded-lg transition-colors ${currentRoute === 'handout' ? 'bg-blue-50 text-blue-600' : 'hover:bg-blue-50 hover:text-blue-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Training Handout
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/audio" 
                    className={`block py-3 px-4 text-lg text-gray-700 rounded-lg transition-colors ${currentRoute === 'audio' ? 'bg-blue-50 text-blue-600' : 'hover:bg-blue-50 hover:text-blue-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Audio Training
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
} 