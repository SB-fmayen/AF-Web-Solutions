'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Target, Users, Zap } from 'lucide-react';

const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-me');

const stats = [
  { icon: <Users className="h-5 w-5" />, value: '50+', label: 'Clientes Felices' },
  { icon: <Award className="h-5 w-5" />, value: '5+', label: 'Años Experiencia' },
  { icon: <Target className="h-5 w-5" />, value: '100%', label: 'Proyectos Entregados' },
  { icon: <Zap className="h-5 w-5" />, value: '24/7', label: 'Disponibilidad' },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-item');
            elements.forEach((el, idx) => {
              setTimeout(() => {
                el.classList.add('animate-on-scroll');
              }, idx * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="sobre-mi" className="w-full py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image column */}
          <div className="flex justify-center animate-item opacity-0">
            <div className="relative">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={450}
                  height={450}
                  data-ai-hint={aboutImage.imageHint}
                  className="rounded-lg object-cover shadow-xl aspect-square"
                />
              )}
            </div>
          </div>
          
          {/* Content column */}
          <div className="space-y-8">
            <div className="animate-item opacity-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
                Sobre Mí
              </h2>
            </div>
            
            <div className="space-y-4 text-foreground leading-relaxed animate-item opacity-0">
              <p>
                Desarrollador web con más de 5 años de experiencia en la creación de soluciones digitales efectivas. Especializado en diseño web moderno y desarrollo front-end.
              </p>
              <p>
                Mi enfoque se centra en crear sitios web que no solo se vean bien, sino que también generen resultados medibles para tu negocio. Trabajo directamente con cada cliente para entender sus necesidades específicas.
              </p>
            </div>
            
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 animate-item opacity-0">
              {stats.map((stat) => (
                <div 
                  key={stat.label}
                  className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all bg-background"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-xs text-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
