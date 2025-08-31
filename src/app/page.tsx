import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata('home');

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <Navigation />

      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile background */}
        <div className="absolute inset-0 bg-[url('/assets/home/background-home-mobile.jpg')] bg-cover bg-center bg-no-repeat md:hidden" />
        {/* Tablet background */}
        <div className="absolute inset-0 bg-[url('/assets/home/background-home-tablet.jpg')] bg-cover bg-center bg-no-repeat hidden md:block lg:hidden" />
        {/* Desktop background */}
        <div className="absolute inset-0 bg-[url('/assets/home/background-home-desktop.jpg')] bg-cover bg-center bg-no-repeat hidden lg:block" />
      </div>


      {/* Main Content */}
      <div className="relative z-10 mt-36 md:mt-0 md:min-h-screen flex items-center lg:pt-80 ">
        <div className="w-full ">
          <div className="grid lg:grid-cols-2 gap-0 items-center h-full " >
            {/* Left Content - Text Section */}
            <div className="text-center lg:text-left space-y-8 lg:pl-32 lg:pr-16 ">
              <div className="space-y-6">
                <h2 className="text-lg  font-barlow-condensed tracking-widest text-blue-200 uppercase font-light">
                  So, you want to travel to
                </h2>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bellefair font-normal text-white">
                  SPACE
                </h1>
              </div>
              <p className="text-base text-blue-200 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Let&apos;s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we&apos;ll give you a truly out of this world experience!
              </p>
            </div>

            {/* Right Content - Empty for Earth background */}
            <div className="hidden lg:block relative h-full ">
              {/* Explore Button positioned in bottom-right quadrant */}
              <div className="absolute bottom-20 left-55">
                <div className="relative group">
                  <Button
                    size="lg"
                    className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-white text-black hover:bg-gray-100 text-2xl lg:text-3xl font-bellefair tracking-widest transition-all duration-500 group-hover:scale-105 shadow-2xl"
                  >
                    Explore
                  </Button>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out blur-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Explore Button */}
      <div className="lg:hidden mt-48 relative z-10 flex justify-center pb-20">
        <div className="relative group">
          <Button
            size="lg"
            className="w-48 h-48 rounded-full bg-white text-black hover:bg-gray-100 text-2xl font-bellefair tracking-widest transition-all duration-500 group-hover:scale-105 shadow-2xl"
          >
            Explore
          </Button>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 w-48 h-48 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out blur-xl" />
        </div>
      </div>


    </div>
  );
}
