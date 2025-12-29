import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { Logo } from '@/components/icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="text-lg font-bold font-headline text-foreground">
              AF_Web_Solutions_Servicios
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} AF_Web_Solutions_Servicios. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
