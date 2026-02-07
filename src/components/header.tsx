'use client';

import CardNav from '@/components/card-nav';

export function Header() {
  const items = [
    {
      label: "Servicios",
      bgColor: "hsl(var(--foreground))",
      textColor: "hsl(var(--background))",
      links: [
        { label: "Diseño Web", href: "#servicios", ariaLabel: "Ver servicios de diseño web" },
        { label: "Desarrollo", href: "#servicios", ariaLabel: "Ver servicios de desarrollo" },
      ]
    },
    {
      label: "Portafolio", 
      bgColor: "hsl(var(--foreground) / 0.92)",
      textColor: "hsl(var(--background))",
      links: [
        { label: "Proyectos", href: "#portafolio", ariaLabel: "Ver proyectos destacados" },
      ]
    },
    {
      label: "Información",
      bgColor: "hsl(var(--foreground) / 0.85)",
      textColor: "hsl(var(--background))",
      links: [
        { label: "Paquetes", href: "#paquetes", ariaLabel: "Ver paquetes disponibles" },
        { label: "Contacto", href: "#contacto", ariaLabel: "Contactar" }
      ]
    }
  ];

  return (
    <CardNav
      items={items}
      baseColor="hsl(var(--card))"
      menuColor="hsl(var(--foreground))"
      buttonBgColor="hsl(var(--primary))"
      buttonTextColor="hsl(var(--primary-foreground))"
      buttonLabel="Cotiza tu página"
      buttonHref="#contacto"
      ease="power3.out"
    />
  );
}
