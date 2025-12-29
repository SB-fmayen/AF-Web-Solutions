import { Logo } from '@/components/icons';

export function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background animate-fade-out" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
      <div className="text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-3 text-3xl font-bold font-headline text-primary">
          <Logo className="w-10 h-10" />
          AF_Web_Solutions_Servicios
        </div>
        <div className="mt-6 h-2 w-48 mx-auto bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary animate-loading-bar"></div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground animate-pulse">Cargando tu experiencia...</p>
      </div>
    </div>
  );
}
