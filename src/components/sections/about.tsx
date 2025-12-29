import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-me');

export function AboutSection() {
  return (
    <section id="sobre-mi" className="w-full bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={400}
                height={400}
                data-ai-hint={aboutImage.imageHint}
                className="rounded-full object-cover shadow-lg aspect-square"
              />
            )}
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
              Sobre Mí
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-lg">
              <p>
                Soy un apasionado desarrollador web con más de 5 años de experiencia creando soluciones digitales que no solo lucen bien, sino que también funcionan a la perfección. Mi misión es ayudar a negocios como el tuyo a tener una presencia online sólida y efectiva.
              </p>
              <p>
                Me diferencio por mi enfoque centrado en el cliente y mi atención al detalle. No solo construyo sitios web, construyo relaciones. Trabajo codo a codo contigo para entender tu visión y transformarla en un producto digital del que te sientas orgulloso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
