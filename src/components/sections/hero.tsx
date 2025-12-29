import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="w-full bg-secondary py-24 md:py-32 lg:py-40"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Transformamos tus ideas en experiencias web inolvidables
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Creamos sitios web a medida, rápidos, y optimizados para que tu negocio destaque en el mundo digital.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#contacto">
                Cotiza tu página
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
