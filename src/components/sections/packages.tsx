'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const packages = [
  {
    title: 'BÁSICO',
    price: 'Q1,500',
    description: 'Para empezar en internet',
    popular: false,
    features: [
      'Diseño responsive',
      '1–4 secciones',
      'Formulario contacto',
    ],
  },
  {
    title: 'PROFESIONAL',
    price: 'Q2,500',
    description: 'Para crecer tu negocio',
    popular: true,
    features: [
      'Diseño responsive',
      '1–4 secciones',
      'Formulario contacto',
      'Galería',
      'Inscripciones',
      'WhatsApp integrado',
    ],
  },
  {
    title: 'PREMIUM',
    price: 'Q3,500',
    description: 'Solución completa',
    popular: false,
    features: [
      'Diseño responsive',
      '1–4 secciones',
      'Formulario contacto',
      'Galería',
      'Inscripciones',
      'WhatsApp integrado',
      'Dominio',
      'Hosting',
      'Soporte 1 mes',
    ],
  },
];

export function PackagesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="paquetes" className="w-full py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline opacity-0">
            Paquetes
          </h2>
          <p className="mt-8 text-foreground md:text-xl opacity-0">
            Planes adaptados a diferentes necesidades y presupuestos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="opacity-0"
            >
              <Card className={`h-full transition-all duration-300 ${
                pkg.popular 
                  ? 'border-2 border-primary shadow-xl' 
                  : 'border border-border hover:border-primary/50 hover:shadow-lg'
              }`}>
                {pkg.popular && (
                  <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 text-center">
                    MÁS POPULAR
                  </div>
                )}
                
                <CardHeader className="text-center space-y-4 pt-8">
                  <CardTitle className="font-headline text-xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-sm">{pkg.description}</CardDescription>
                  <div className="pt-4">
                    <p className="text-4xl font-bold text-foreground">
                      {pkg.price}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">Pago único</p>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="px-6 pb-8">
                  <Button 
                    asChild 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : ''
                    }`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    <Link href="#contacto">Solicitar</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Maintenance */}
        <div className="mt-20 max-w-3xl mx-auto opacity-0" style={{animation: 'fade-in-up 0.6s ease-out forwards', animationDelay: '0.4s'}}>
          <Card className="border-2 border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-headline">Mantenimiento Mensual</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-5xl font-bold text-foreground">
                Q200
              </p>
              <p className="text-foreground max-w-xl mx-auto">
                Soporte técnico, actualizaciones de contenido y seguridad.
              </p>
              <div className="grid grid-cols-4 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-foreground">24/7</div>
                  <div className="text-xs text-foreground">Soporte</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-foreground">Ilimitado</div>
                  <div className="text-xs text-foreground">Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-foreground">100%</div>
                  <div className="text-xs text-foreground">Seguro</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-foreground">Rápido</div>
                  <div className="text-xs text-foreground">Respuesta</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
