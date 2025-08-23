"use client";

import { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { getCrew } from '@/lib/data';
import { Crew } from '@/types';

export default function CrewPage() {
  const crew = getCrew();
  const [selectedCrew, setSelectedCrew] = useState<Crew>(crew[0]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        {/* Mobile background */}
        <div className="absolute inset-0 bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover bg-center bg-no-repeat opacity-30 md:hidden" />
        {/* Tablet background */}
        <div className="absolute inset-0 bg-[url('/assets/crew/background-crew-tablet.jpg')] bg-cover bg-center bg-no-repeat opacity-30 hidden md:block lg:hidden" />
        {/* Desktop background */}
        <div className="absolute inset-0 bg-[url('/assets/crew/background-crew-desktop.jpg')] bg-cover bg-center bg-no-repeat opacity-30 hidden lg:block" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-32 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center lg:text-left mb-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-barlow-condensed tracking-widest text-blue-200">
              <span className="text-white/50 mr-4">02</span>
              Meet your crew
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Crew Info */}
            <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
              {/* Crew Role */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bellefair text-blue-200">
                  {selectedCrew.role}
                </h3>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bellefair font-light">
                  {selectedCrew.name}
                </h2>
              </div>

              {/* Crew Bio */}
              <p className="text-lg text-blue-200 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {selectedCrew.bio}
              </p>

              {/* Crew Navigation Dots */}
              <div className="flex justify-center lg:justify-start space-x-4 pt-8">
                {crew.map((member) => (
                  <button
                    key={member.name}
                    onClick={() => setSelectedCrew(member)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      selectedCrew.name === member.name
                        ? 'bg-white scale-110'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Select ${member.name}`}
                  />
                ))}
              </div>
            </div>

            {/* Right - Crew Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[600px]">
                <Image
                  src={selectedCrew.images.png.replace('./assets', '/assets')}
                  alt={selectedCrew.name}
                  fill
                  className="object-contain animate-fade-in"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
