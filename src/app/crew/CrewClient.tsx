"use client";

import { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { getCrew } from '@/lib/data';
import { Crew } from '@/types';

export default function CrewClient() {
    const crew = getCrew();
    const [selectedCrew, setSelectedCrew] = useState<Crew>(crew[0]);

    return (
        <div className="min-h-screen text-white overflow-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">

                <div className="absolute inset-0 bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover bg-center bg-no-repeat md:hidden" />

                <div className="absolute inset-0 bg-[url('/assets/crew/background-crew-tablet.jpg')] bg-cover bg-center bg-no-repeat hidden md:block lg:hidden" />

                <div className="absolute inset-0 bg-[url('/assets/crew/background-crew-desktop.jpg')] bg-cover bg-center bg-no-repeat hidden lg:block" />
            </div>

            <Navigation />

            {/* Main Content */}
            <div className="relative z-10 pt-24 md:pt-32 px-6 min-h-screen flex flex-col">
                <div className="max-w-7xl mx-auto w-full flex-1">
                    {/* Page Title */}
                    <div className="text-center lg:text-left mb-8 md:mb-16">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-barlow-condensed tracking-[0.295em] uppercase text-white">
                            <span className="text-white/25 mr-4 font-bold">02</span>
                            MEET YOUR CREW
                        </h1>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden flex flex-col items-center space-y-8 px-4">
                        {/* Crew Info */}
                        <div className="text-center space-y-6">
                            {/* Crew Role and Name */}
                            <div className="space-y-2">
                                <h3 className="text-xl font-bellefair uppercase text-white/50">
                                    {selectedCrew.role.toUpperCase()}
                                </h3>
                                <h2 className="text-3xl font-bellefair uppercase text-white">
                                    {selectedCrew.name.toUpperCase()}
                                </h2>
                            </div>

                            {/* Crew Bio */}
                            <p className="text-base text-blue-200 leading-relaxed max-w-sm mx-auto">
                                {selectedCrew.bio}
                            </p>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center space-x-6 pt-4">
                            {crew.map((member) => (
                                <button
                                    key={member.name}
                                    onClick={() => setSelectedCrew(member)}
                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${selectedCrew.name === member.name
                                        ? 'bg-white'
                                        : 'bg-white/17 hover:bg-white/50'
                                        }`}
                                    aria-label={`Select ${member.name}`}
                                />
                            ))}
                        </div>

                        {/* Crew Image */}
                        <div className="flex justify-center pt-4">
                            <div className="relative w-80 h-96">
                                <Image
                                    src={selectedCrew.images.png.replace('./assets', '/assets')}
                                    alt={selectedCrew.name}
                                    fill
                                    className="object-contain object-bottom animate-fade-in"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center flex-1">
                        {/* Left - Crew Info */}
                        <div className="text-left space-y-8 flex flex-col justify-center">
                            {/* Crew Role */}
                            <div className="space-y-4">
                                <h3 className="text-3xl xl:text-4xl font-bellefair uppercase text-white/50">
                                    {selectedCrew.role.toUpperCase()}
                                </h3>
                                <h2 className="text-5xl xl:text-6xl font-bellefair uppercase text-white">
                                    {selectedCrew.name.toUpperCase()}
                                </h2>
                            </div>

                            {/* Crew Bio */}
                            <p className="text-lg text-blue-200 leading-relaxed max-w-lg">
                                {selectedCrew.bio}
                            </p>

                            {/* Crew Navigation Dots */}
                            <div className="flex justify-start space-x-6 pt-12">
                                {crew.map((member) => (
                                    <button
                                        key={member.name}
                                        onClick={() => setSelectedCrew(member)}
                                        className={`w-4 h-4 rounded-full transition-all duration-300 ${selectedCrew.name === member.name
                                            ? 'bg-white'
                                            : 'bg-white/17 hover:bg-white/50'
                                            }`}
                                        aria-label={`Select ${member.name}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right - Crew Image */}
                        <div className="flex justify-end h-full">
                            <div className="relative w-[400px] h-[500px] xl:w-[500px] xl:h-[600px]">
                                <Image
                                    src={selectedCrew.images.png.replace('./assets', '/assets')}
                                    alt={selectedCrew.name}
                                    fill
                                    className="object-contain object-bottom animate-fade-in"
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
