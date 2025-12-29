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
import { Check, Store, Code, Newspaper } from 'lucide-react';

const servicePackages = [
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: 'Landing Page',
    description: 'Perfecto para startups y campañas de marketing.',
    price: 'Desde $499',
    features: [
      'Diseño único y moderno',
      '100% Responsivo (Móvil y Escritorio)',
      'Formulario de contacto',
      'Optimización SEO básica',
    ],
  },
  {
    icon: <Newspaper className="h-8 w-8 text-accent" />,
    title: 'Sitio Corporativo',
    description: 'La solución completa para tu negocio.',
    price: 'Desde $999',
    features: [
      'Hasta 5 páginas (Inicio, Sobre Nosotros, etc.)',
      'Sistema de gestión de contenido (CMS)',
      'Blog integrado',
      'Análisis y estadísticas',
    ],
  },
  {
    icon: <Store className="h-8 w-8 text-accent" />,
    title: 'E-commerce',
    description: 'Vende tus productos al mundo.',
    price: 'Desde $1,999',
    features: [
      'Catálogo de productos ilimitado',
      'Pasarelas de pago (Stripe, PayPal)',
      'Gestión de inventario y pedidos',
      'Diseño optimizado para la conversión',
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="w-full bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            Nuestros Paquetes
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Elige el plan que mejor se adapte a tus necesidades. Todos nuestros paquetes son escalables.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicePackages.map((pkg) => (
            <Card key={pkg.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                {pkg.icon}
                <CardTitle className="mt-4 font-headline text-2xl">{pkg.title}</CardTitle>
                <CardDescription className="px-6">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex-col items-center">
                <p className="text-2xl font-bold mb-4">{pkg.price}</p>
                <Button asChild className="w-full">
                  <Link href="#contacto">Solicitar Cotización</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
