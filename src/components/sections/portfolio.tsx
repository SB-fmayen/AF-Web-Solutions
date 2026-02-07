'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Agencia Creativa',
    description: 'Un sitio web moderno y audaz para una agencia de diseño.',
    image: PlaceHolderImages.find((img) => img.id === 'portfolio-1'),
    link: '#',
  },
  {
    title: 'Tienda de Moda',
    description: 'Una plataforma de e-commerce elegante y funcional.',
    image: PlaceHolderImages.find((img) => img.id === 'portfolio-2'),
    link: '#',
  },
  {
    title: 'Blog de Viajes',
    description: 'Un blog visualmente atractivo para compartir historias del mundo.',
    image: PlaceHolderImages.find((img) => img.id === 'portfolio-3'),
    link: '#',
  },
];

export function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-on-scroll');
            }, index * 150);
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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="portafolio" className="w-full py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline opacity-0">
            Portafolio
          </h2>
          <p className="mt-8 text-foreground md:text-xl opacity-0">
            Proyectos recientes desarrollados para diferentes clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="opacity-0"
            >
              <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg h-full border border-border hover:border-primary/50">
                <CardHeader className="p-0 relative">
                  {project.image && (
                    <div className="aspect-video overflow-hidden relative bg-muted">
                      <Image
                        src={project.image.imageUrl}
                        alt={project.image.description}
                        width={600}
                        height={400}
                        data-ai-hint={project.image.imageHint}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-lg mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                  <Button variant="link" asChild className="p-0 mt-4 h-auto text-primary">
                    <Link href={project.link} className="text-sm">
                      Ver proyecto
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
