/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { useState } from "react";

export default function PDFPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gray-900 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 px-4">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <Link href="/" className="text-xl font-bold">CommuniCore</Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="bg-gray-800 text-white p-2 rounded-lg sm:ml-6 hover:bg-gray-700 transition-colors focus:outline-none sm:block"
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
          <Link href="/" className="text-sm bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors">
            ← Back to Home
          </Link>
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
                    className="block py-3 px-4 text-lg text-gray-700 bg-blue-50 text-blue-600 rounded-lg"
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
                    href="/assessment" 
                    className="block py-3 px-4 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Assessment Tool
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
                <li>
                  <Link 
                    href="/audio" 
                    className="block py-3 px-4 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
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
      
      <main className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8 px-2">Executive Presence PDF Guide</h1>
        
        <div className="mb-8 flex justify-center">
          <a 
            href="https://drive.google.com/file/d/16XQofyX5QQvzrGvor8a_y8ZQkUhJV5Zz/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center w-full sm:w-auto max-w-xs"
          >
            View PDF Guide in Google Drive
          </a>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto my-4 border border-gray-200 rounded-lg overflow-hidden shadow-md">
          <iframe 
            src="/pdf-guide.pdf" 
            className="w-full h-[600px] sm:h-[800px]"
            title="Executive Presence PDF Guide"
          />
        </div>
      </main>
    </div>
  );
} 