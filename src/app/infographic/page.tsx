/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";

export default function InfographicPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar currentRoute="infographic" />
      
      <main className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8 px-2">Executive Presence Infographic</h1>
        
        <div className="mb-8 flex justify-center">
          <a 
            href="https://drive.google.com/file/d/1H6SgGnPGYDmklVFdE7rO6AaJ9zRI2w89/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center w-full sm:w-auto max-w-xs"
          >
            View Full Infographic
          </a>
        </div>
        
        <div className="relative w-full max-w-3xl mx-auto my-4">
          <Image
            src="/infographic.png"
            alt="Executive Presence Infographic"
            width={1000}
            height={5000}
            className="w-full h-auto"
            priority
          />
        </div>
      </main>
    </div>
  );
} 