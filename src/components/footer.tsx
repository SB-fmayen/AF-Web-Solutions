import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <Image 
              src="/logos/Logo%20DAMS.png" 
              alt="DAMS" 
              width={1500} 
              height={1500}
              className="h-[200px] w-auto dark:hidden"
            />
            <Image 
              src="/logos/Logo%20DAMS.png" 
              alt="DAMS" 
              width={1500} 
              height={1500}
              className="h-[200px] w-auto hidden dark:block"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} DAMS. Todos los derechos reservados.
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
