"use client";

import { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { getTechnology } from '@/lib/data';
import { Technology } from '@/types';

export default function TechnologyPage() {
  const technology = getTechnology();
  const [selectedTech, setSelectedTech] = useState<Technology>(technology[0]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        {/* Mobile background */}
        <div className="absolute inset-0 bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-cover bg-center bg-no-repeat opacity-30 md:hidden" />
        {/* Tablet background */}
        <div className="absolute inset-0 bg-[url('/assets/technology/background-technology-tablet.jpg')] bg-cover bg-center bg-no-repeat opacity-30 hidden md:block lg:hidden" />
        {/* Desktop background */}
        <div className="absolute inset-0 bg-[url('/assets/technology/background-technology-desktop.jpg')] bg-cover bg-center bg-no-repeat opacity-30 hidden lg:block" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-32 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center lg:text-left mb-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-barlow-condensed tracking-widest text-blue-200">
              <span className="text-white/50 mr-4">03</span>
              Space launch 101
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Technology Info */}
            <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
              {/* Technology Navigation */}
              <div className="flex justify-center lg:justify-start space-x-4 lg:space-y-4 lg:flex-col lg:space-x-0">
                {technology.map((tech, index) => (
                  <button
                    key={tech.name}
                    onClick={() => setSelectedTech(tech)}
                    className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 transition-all duration-300 flex items-center justify-center font-bellefair text-2xl ${
                      selectedTech.name === tech.name
                        ? 'bg-white text-black border-white'
                        : 'bg-transparent text-white border-white/30 hover:border-white/50'
                    }`}
                    aria-label={`Select ${tech.name}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              {/* Technology Details */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-barlow-condensed tracking-widest text-blue-200">
                    The terminology...
                  </h3>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bellefair font-light">
                    {selectedTech.name}
                  </h2>
                </div>

                <p className="text-lg text-blue-200 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {selectedTech.description}
                </p>
              </div>
            </div>

            {/* Right - Technology Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-lg lg:max-w-2xl">
                <div className="hidden lg:block relative w-full h-64">
                  <Image
                    src={selectedTech.images.portrait.replace('./assets', '/assets')}
                    alt={selectedTech.name}
                    fill
                    className="object-cover rounded-lg animate-fade-in"
                    priority
                  />
                </div>
                <div className="lg:hidden relative w-full h-48">
                  <Image
                    src={selectedTech.images.landscape.replace('./assets', '/assets')}
                    alt={selectedTech.name}
                    fill
                    className="object-cover rounded-lg animate-fade-in"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
