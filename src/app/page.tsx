import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        {/* Mobile background */}
        <div className="absolute inset-0 bg-[url('/assets/home/background-home-mobile.jpg')] bg-cover bg-center bg-no-repeat opacity-30 md:hidden" />
        {/* Tablet background */}
        <div className="absolute inset-0 bg-[url('/assets/home/background-home-tablet.jpg')] bg-cover bg-center bg-no-repeat opacity-30 hidden md:block lg:hidden" />
        {/* Desktop background */}
        <div className="absolute inset-0 bg-[url('/assets/home/background-home-desktop.jpg')] bg-cover bg-center bg-no-repeat opacity-30 hidden lg:block" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-32 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bellefair font-light">
                <span className="block text-2xl md:text-3xl lg:text-4xl font-barlow-condensed tracking-widest text-blue-200 mb-4">
                  So, you want to travel to
                </span>
                <span className="block">Space</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-200 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Let&apos;s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we&apos;ll give you a truly out of this world experience!
              </p>
            </div>

            {/* Right Content - Explore Button */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-500 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-white text-black hover:bg-gray-100 text-2xl lg:text-3xl font-bellefair tracking-widest transition-all duration-500 group-hover:scale-105"
                  >
                    Explore
                  </Button>
                </div>
                <div className="absolute inset-0 w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
