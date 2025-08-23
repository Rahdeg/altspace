"use client";

import { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { getDestinations } from '@/lib/data';
import { Destination } from '@/types';

export default function DestinationPage() {
  const destinations = getDestinations();
  const [selectedDestination, setSelectedDestination] = useState<Destination>(destinations[0]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        {/* Mobile background */}
        <div className="absolute inset-0 bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover bg-center bg-no-repeat opacity-30 md:hidden" />
        {/* Tablet background */}
        <div className="absolute inset-0 bg-[url('/assets/destination/background-destination-tablet.jpg')] bg-cover bg-center bg-no-repeat opacity-30 hidden md:block lg:hidden" />
        {/* Desktop background */}
        <div className="absolute inset-0 bg-[url('/assets/destination/background-destination-desktop.jpg')] bg-cover bg-center bg-no-repeat opacity-30 hidden lg:block" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-32 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center lg:text-left mb-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-barlow-condensed tracking-widest text-blue-200">
              <span className="text-white/50 mr-4">01</span>
              Pick your destination
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Destination Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                <Image
                  src={selectedDestination.images.png.replace('./assets', '/assets')}
                  alt={selectedDestination.name}
                  fill
                  className="object-contain animate-fade-in"
                  priority
                />
              </div>
            </div>

            {/* Right - Destination Info */}
            <div className="text-center lg:text-left space-y-8">
              {/* Destination Navigation */}
              <div className="flex justify-center lg:justify-start space-x-8">
                {destinations.map((destination) => (
                  <button
                    key={destination.name}
                    onClick={() => setSelectedDestination(destination)}
                    className={`relative py-2 font-barlow-condensed text-lg tracking-widest transition-colors ${selectedDestination.name === destination.name
                      ? 'text-white'
                      : 'text-blue-200 hover:text-white'
                      }`}
                  >
                    {destination.name}
                    {selectedDestination.name === destination.name && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                    )}
                  </button>
                ))}
              </div>

              {/* Destination Details */}
              <div className="space-y-6">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-bellefair font-light">
                  {selectedDestination.name}
                </h2>
                <p className="text-lg text-blue-200 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {selectedDestination.description}
                </p>

                {/* Stats */}
                <div className="pt-8 border-t border-white/20">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm font-barlow-condensed tracking-widest text-blue-200 mb-2">
                        Avg. Distance
                      </h3>
                      <p className="text-2xl font-bellefair">
                        {selectedDestination.distance}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-barlow-condensed tracking-widest text-blue-200 mb-2">
                        Est. Travel Time
                      </h3>
                      <p className="text-2xl font-bellefair">
                        {selectedDestination.travel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
