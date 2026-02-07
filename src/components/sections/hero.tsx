'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-item');
            elements.forEach((el, index) => {
              setTimeout(() => el.classList.add('animate-on-scroll'), index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground animate-item opacity-0">
              Desarrollo Web Professional
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 animate-item opacity-0">
              Creamos sitios web modernos y optimizados que convierten visitantes en clientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-item opacity-0">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contacto">
                  Solicitar Cotización
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#portafolio">
                  Ver Portafolio
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-item opacity-0">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <Image
                src="/images/pc.webp"
                alt="Computadora PC"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
