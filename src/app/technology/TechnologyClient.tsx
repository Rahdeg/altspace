"use client";

import { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { getTechnology } from '@/lib/data';
import { Technology } from '@/types';

export default function TechnologyClient() {
    const technology = getTechnology();
    const [selectedTech, setSelectedTech] = useState<Technology>(technology[0]);

    return (
        <div className="min-h-screen text-white overflow-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">

                <div className="absolute inset-0 bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-cover bg-center bg-no-repeat md:hidden" />

                <div className="absolute inset-0 bg-[url('/assets/technology/background-technology-tablet.jpg')] bg-cover bg-center bg-no-repeat hidden md:block lg:hidden" />

                <div className="absolute inset-0 bg-[url('/assets/technology/background-technology-desktop.jpg')] bg-cover bg-center bg-no-repeat hidden lg:block" />
            </div>

            <Navigation />

            {/* Main Content */}
            <div className="relative z-10 pt-24 lg:pt-32 min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Page Title */}
                    <div className="text-center lg:text-left mb-12 lg:mb-16 lg:ml-32">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-barlow-condensed tracking-[4px] text-white/75 uppercase">
                            <span className="text-white/50 mr-6 font-bold">03</span>
                            Space launch 101
                        </h1>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden">
                        {/* Mobile Image */}
                        <div className="mb-8">
                            <div className="relative w-full h-56 mx-auto">
                                <Image
                                    src={selectedTech.images.landscape.replace('./assets', '/assets')}
                                    alt={selectedTech.name}
                                    fill
                                    className="object-cover rounded-lg"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="flex justify-center space-x-6 mb-8">
                            {technology.map((tech, index) => (
                                <button
                                    key={tech.name}
                                    onClick={() => setSelectedTech(tech)}
                                    className={`w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center font-bellefair text-lg ${selectedTech.name === tech.name
                                        ? 'bg-white text-black border-white'
                                        : 'bg-transparent text-white border-white/30 hover:border-white/50'
                                        }`}
                                    aria-label={`Select ${tech.name}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Technology Details */}
                        <div className="text-center space-y-6 px-4">
                            <div className="space-y-4">
                                <h3 className="text-sm font-barlow-condensed tracking-widest text-white/75 uppercase">
                                    The terminology...
                                </h3>
                                <h2 className="text-2xl font-bellefair font-light uppercase">
                                    {selectedTech.name}
                                </h2>
                            </div>
                            <p className="text-blue-200 leading-relaxed text-sm px-2">
                                {selectedTech.description}
                            </p>
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:flex items-center justify-between h-[600px]">
                        {/* Left - Vertical Navigation Buttons */}
                        <div className="flex flex-col space-y-8 ml-8">
                            {technology.map((tech, index) => (
                                <button
                                    key={tech.name}
                                    onClick={() => setSelectedTech(tech)}
                                    className={`w-20 h-20 rounded-full border-2 transition-all duration-300 flex items-center justify-center font-bellefair text-2xl ${selectedTech.name === tech.name
                                        ? 'bg-white text-black border-white'
                                        : 'bg-transparent text-white border-white/30 hover:border-white/50'
                                        }`}
                                    aria-label={`Select ${tech.name}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>

                        {/* Center - Technology Details */}
                        <div className="flex-1 max-w-lg mx-16 space-y-8">
                            <div className="space-y-6">
                                <h3 className="text-lg font-barlow-condensed tracking-widest text-white/75 uppercase">
                                    The terminology...
                                </h3>
                                <h2 className="text-6xl font-bellefair font-light uppercase">
                                    {selectedTech.name}
                                </h2>
                            </div>
                            <p className="text-blue-200 leading-relaxed text-lg">
                                {selectedTech.description}
                            </p>
                        </div>

                        {/* Right - Technology Image */}
                        <div className="flex-shrink-0">
                            <div className="relative w-[500px] h-[500px]">
                                <Image
                                    src={selectedTech.images.portrait.replace('./assets', '/assets')}
                                    alt={selectedTech.name}
                                    fill
                                    className="object-cover rounded-lg"
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
