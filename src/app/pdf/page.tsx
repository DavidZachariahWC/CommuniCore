/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import NavigationBar from "@/components/NavigationBar";

export default function PDFPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar currentRoute="pdf" />
      
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