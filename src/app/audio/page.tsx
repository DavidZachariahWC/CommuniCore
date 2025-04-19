/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import NavigationBar from "@/components/NavigationBar";

export default function AudioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar currentRoute="audio" />
      
      <main className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8 px-2">Audio Training</h1>
        <div className="w-full max-w-4xl mx-auto bg-white p-5 sm:p-8 rounded-lg shadow-md">
          <p className="text-lg sm:text-xl text-gray-700 mb-6 text-center sm:text-left">
            This page will provide audio resources and podcasts to enhance your executive presence skills.
          </p>
          <div className="bg-gray-100 p-4 sm:p-6 rounded-md mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center sm:text-left">Coming Soon</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We're producing high-quality audio content including guided exercises, interviews with 
              executive presence experts, and practical tips you can listen to during your commute 
              or workout. These audio resources will help you integrate executive presence skills 
              into your daily routine.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <Link 
              href="/" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full sm:w-auto"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 