"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '00 HOME', number: '00' },
    { href: '/destination', label: '01 DESTINATION', number: '01' },
    { href: '/crew', label: '02 CREW', number: '02' },
    { href: '/technology', label: '03 TECHNOLOGY', number: '03' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-6 py-8 md:py-0 md:px-0 lg:px-6 lg:py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative z-20 md:ml-4 lg:ml-0">
            <div className="w-12 h-12 relative">
              <Image
                src="/assets/shared/logo.svg"
                alt="Space Tourism Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Horizontal Line - extends behind logo */}
          <div className="hidden lg:block absolute left-30 top-1/2 transform -translate-y-1/2 w-[41rem] h-px bg-white/20 z-10" />

          {/* Tablet Navigation - extends from middle to right edge */}
          <div className="hidden md:flex lg:hidden items-center ml-auto ">
            <div className="bg-white/5 backdrop-blur-md px-4  border border-white/10">
              <div className="flex items-center space-x-10">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative py-8 transition-colors ${isActive(item.href) ? 'text-white' : 'text-white/70 hover:text-white'
                      }`}
                  >
                    <span className="font-barlow-condensed text-sm tracking-widest font-bold">
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
            </div>
          </div>

          {/* Desktop Navigation - extends from middle to right edge */}
          <div className="hidden lg:flex items-center ml-auto">
            <div className="bg-white/5 backdrop-blur-md px-32  border border-white/10">
              <div className="flex items-center space-x-10">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative py-8 transition-colors ${isActive(item.href) ? 'text-white' : 'text-white/70 hover:text-white'
                      }`}
                  >
                    <span className="font-barlow-condensed text-sm tracking-widest font-bold">
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
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-20">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21">
                    <g fill="currentColor" fillRule="evenodd">
                      <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                    </g>
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 border-none p-0 [&>button:last-child]:hidden backdrop-blur-[80px]"
                style={{ backgroundColor: '#0B0D1726' }}
              >
                <SheetTitle></SheetTitle>

                {/* Custom close button positioned exactly like in the image */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-8 right-6 z-50 text-white hover:text-white/70 transition-colors"
                  aria-label="Close navigation menu"
                  title="Close navigation menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
                    <g fill="currentColor" fillRule="evenodd">
                      <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                      <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                    </g>
                  </svg>
                </button>

                {/* Navigation items positioned on the left like in the image */}
                <div className="h-full flex flex-col justify-start pt-32 pl-8">
                  <div className="space-y-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`group relative block transition-colors ${isActive(item.href) ? 'text-white' : 'text-white hover:text-blue-200'
                          }`}
                      >
                        <div className="flex items-center">
                          <span className="font-barlow-condensed text-lg tracking-[2.7px] font-bold">
                            {item.number}
                          </span>
                          <span className="ml-4 font-barlow-condensed text-lg tracking-[2.35px] uppercase">
                            {item.label.split(' ').slice(1).join(' ')}
                          </span>
                        </div>
                        {isActive(item.href) && (
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white" />
                        )}
                      </Link>
                    ))}
                  </div>
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
