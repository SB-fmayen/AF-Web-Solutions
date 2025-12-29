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
  return (
    <section id="portafolio" className="w-full bg-secondary py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            Nuestro Trabajo
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Explora algunos de nuestros proyectos y descubre lo que podemos crear para ti.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group transition-all duration-300 hover:shadow-2xl">
              <CardHeader className="p-0">
                {project.image && (
                  <div className="aspect-video overflow-hidden">
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
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <Button variant="link" asChild className="p-0 mt-4 text-accent">
                    <Link href={project.link}>
                        Ver proyecto
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
