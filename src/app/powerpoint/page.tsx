/* eslint-disable react/no-unescaped-entities */
"use client";

import NavigationBar from "@/components/NavigationBar";

export default function PowerPointPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar currentRoute="powerpoint" />
      
      <main className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8 px-2">PowerPoint Presentations</h1>
        
        <div className="w-full max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl text-gray-700 mb-6 text-center">
            This page provides PowerPoint presentations to enhance your executive presence skills.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://drive.google.com/file/d/1cpMd-JE19gcqjpFMPgCKhOyw-pPM8xr8/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Access PowerPoint (Google Drive)
            </a>
          </div>
        </div>
      </main>
    </div>
  );
} 