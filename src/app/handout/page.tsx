/* eslint-disable react/no-unescaped-entities */
"use client";

import NavigationBar from "@/components/NavigationBar";

export default function HandoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar currentRoute="handout" />
      
      <main className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8 px-2">Training Handouts</h1>
        
        <div className="w-full max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl text-gray-700 mb-6 text-center">
            This page provides handouts for executive presence workshops and training sessions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://drive.google.com/file/d/1WD-fjVtR3ZZ_udy4EzrC1nQBK0DA_FIA/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Access Training Handout (Google Drive)
            </a>
          </div>
          
          <div className="relative w-full max-w-5xl mx-auto my-8 border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="/training-handout.pdf" 
              className="w-full h-[600px] sm:h-[800px]"
              title="Executive Presence Training Handout"
            />
          </div>
        </div>
      </main>
    </div>
  );
} 