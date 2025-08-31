"use client";

import { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { getDestinations } from '@/lib/data';
import { Destination } from '@/types';

export default function DestinationClient() {
    const destinations = getDestinations();
    const [selectedDestination, setSelectedDestination] = useState<Destination>(destinations[0]);

    return (
        <div className="h-screen bg-black text-white overflow-hidden relative">
            <Navigation />

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />

                <div className="absolute inset-0 bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover bg-center bg-no-repeat opacity-30 md:hidden" />

                <div className="absolute inset-0 bg-[url('/assets/destination/background-destination-tablet.jpg')] bg-cover bg-center bg-no-repeat opacity-30 hidden md:block lg:hidden" />

                <div className="absolute inset-0 bg-[url('/assets/destination/background-destination-desktop.jpg')] bg-cover bg-center bg-no-repeat opacity-30 hidden lg:block" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-screen flex flex-col px-6">
                <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
                    {/* Page Title */}
                    <div className="text-center lg:text-left pt-24 md:pt-40 pb-12">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-barlow-condensed tracking-widest text-blue-200 uppercase">
                            <span className="text-white/50 mr-4">01</span>
                            Pick your destination
                        </h1>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-end flex-1 pb-8">
                        {/* Left - Destination Image */}
                        <div className="flex justify-center lg:justify-start items-end">
                            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
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
                        <div className="text-center lg:text-left flex flex-col justify-end space-y-6">
                            {/* Destination Navigation */}
                            <div className="flex justify-center lg:justify-start space-x-6 lg:space-x-8">
                                {destinations.map((destination) => (
                                    <button
                                        key={destination.name}
                                        onClick={() => setSelectedDestination(destination)}
                                        className={`relative py-2 font-barlow-condensed text-sm lg:text-base tracking-widest transition-colors uppercase ${selectedDestination.name === destination.name
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
                            <div className="space-y-4">
                                <h2 className="text-5xl md:text-6xl lg:text-8xl font-bellefair font-light uppercase">
                                    {selectedDestination.name}
                                </h2>
                                <p className="text-base lg:text-lg text-blue-200 leading-relaxed max-w-md lg:max-w-lg mx-auto lg:mx-0">
                                    {selectedDestination.description}
                                </p>

                                {/* Stats */}
                                <div className="pt-6 border-t border-white/20 mt-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                        <div>
                                            <h3 className="text-xs lg:text-sm font-barlow-condensed tracking-widest text-blue-200 mb-2 uppercase">
                                                Avg. Distance
                                            </h3>
                                            <p className="text-xl lg:text-2xl font-bellefair uppercase">
                                                {selectedDestination.distance}
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xs lg:text-sm font-barlow-condensed tracking-widest text-blue-200 mb-2 uppercase">
                                                Est. Travel Time
                                            </h3>
                                            <p className="text-xl lg:text-2xl font-bellefair uppercase">
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
