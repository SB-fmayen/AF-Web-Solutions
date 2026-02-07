'use client';

import { useRef, useEffect, useState } from 'react';
import { Check, Building2, School, Wrench } from 'lucide-react';
import CardSwap, { Card as SwapCard } from '@/components/card-swap';

const servicePackages = [
  {
    icon: <Building2 className="h-8 w-8 text-accent" />,
    title: 'Página Web Institucional',
    description: 'Ideal para empresas pequeñas',
    features: [
      'Página de Inicio',
      'Quiénes somos',
      'Servicios',
      'Contacto',
    ],
    color: 'hsl(var(--foreground))',
  },
  {
    icon: <School className="h-8 w-8 text-accent" />,
    title: 'Página Web para Colegios',
    description: 'Tu producto estrella',
    features: [
      'Página de Inicio',
      'Información del colegio',
      'Formulario de Inscripciones',
      'Galería de fotos',
      'Contacto',
    ],
    color: 'hsl(var(--foreground))',
  },
  {
    icon: <Wrench className="h-8 w-8 text-accent" />,
    title: 'Mantenimiento Mensual',
    description: 'Soporte continuo para tu sitio web',
    features: [
      'Cambios de texto',
      'Actualizaciones',
      'Soporte básico',
      'Disponibilidad continua',
    ],
    color: 'hsl(var(--foreground))',
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = servicePackages[activeIndex] ?? servicePackages[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-on-scroll');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      const title = sectionRef.current.querySelector('h2');
      const description = sectionRef.current.querySelector('p');
      if (title) observer.observe(title);
      if (description) observer.observe(description);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="servicios" className="w-full py-20 md:py-28 bg-[hsl(var(--foreground))] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Layout with CardSwap */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Dynamic Service Info */}
          <div key={activeService.title} className="space-y-6 swap-info">
            <p className="text-sm uppercase tracking-[0.2em] text-[hsl(var(--background))]/60">Servicios</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[hsl(var(--background))] font-headline">
              {activeService.title}
            </h2>
            <p className="text-lg text-[hsl(var(--background))]/70">
              {activeService.description}
            </p>
            <div className="space-y-2">
              {activeService.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-[hsl(var(--background))]/90">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: CardSwap Component */}
          <div className="relative h-[400px]">
            <CardSwap
              width={420}
              height={300}
              cardDistance={36}
              verticalDistance={32}
              delay={4000}
              pauseOnHover={true}
              easing="elastic"
              onSwap={setActiveIndex}
            >
              {servicePackages.map((pkg, index) => (
                <SwapCard key={index}>
                  <div 
                    className="h-full w-full p-8 flex items-center justify-center text-[hsl(var(--background))] rounded-2xl"
                    style={{ backgroundColor: pkg.color }}
                  >
                    <h3 className="text-2xl font-semibold text-center leading-snug">
                      {pkg.title}
                    </h3>
                  </div>
                </SwapCard>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
