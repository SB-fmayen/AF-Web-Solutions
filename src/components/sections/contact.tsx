'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ContactSection() {
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
    <section ref={sectionRef} id="contacto" className="w-full py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto animate-item opacity-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
            Contacto
          </h2>
          <p className="mt-8 text-foreground md:text-xl">
            Solicita una cotización gratuita para tu proyecto.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 mt-20 max-w-6xl mx-auto">
          {/* Contact form */}
          <div className="lg:col-span-2 animate-item opacity-0">
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="text-xl font-headline flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Envía un Mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
          
          {/* Contact info */}
          <div className="space-y-6 animate-item opacity-0">
            {/* WhatsApp */}
            <Card className="border-2 border-primary/30 hover:border-primary/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg font-headline flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground">
                  Contacto directo para respuestas rápidas.
                </p>
                <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="https://wa.me/50247255497" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chatear
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Contact details */}
            <Card className="border border-border">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Email</div>
                    <div className="text-sm text-foreground">fajardomayen55@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Ubicación</div>
                    <div className="text-sm text-foreground">Guatemala, GT</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Disponibilidad</div>
                    <div className="text-sm text-foreground">24/7</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
