"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '00 Home', number: '00' },
    { href: '/destination', label: '01 Destination', number: '01' },
    { href: '/crew', label: '02 Crew', number: '02' },
    { href: '/technology', label: '03 Technology', number: '03' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">S</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative py-8 transition-colors ${isActive(item.href) ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
              >
                <span className="font-barlow-condensed text-sm tracking-widest">
                  {item.number}
                </span>
                <span className="ml-3 font-barlow-condensed text-sm tracking-widest">
                  {item.label.split(' ').slice(1).join(' ')}
                </span>
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-black/95 border-l border-white/20">
                <div className="flex flex-col space-y-8 pt-20">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group relative py-4 transition-colors ${isActive(item.href) ? 'text-white' : 'text-white/70 hover:text-white'
                        }`}
                    >
                      <span className="font-barlow-condensed text-2xl tracking-widest">
                        {item.number}
                      </span>
                      <span className="ml-4 font-barlow-condensed text-2xl tracking-widest">
                        {item.label.split(' ').slice(1).join(' ')}
                      </span>
                      {isActive(item.href) && (
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white" />
                      )}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
