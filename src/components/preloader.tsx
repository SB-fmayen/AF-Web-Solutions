import Image from 'next/image';

export function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary animate-fade-out" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
      <div className="flex flex-col items-center justify-center gap-8 animate-fade-in-up">
        <Image 
          src="/logos/Logo%20DAMS.png" 
          alt="DAMS" 
          width={320} 
          height={320}
          className="w-80 h-auto animate-bounce"
          style={{ animationDuration: '2s' }}
        />
        <div className="w-56 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary via-accent to-primary animate-loading-bar"></div>
        </div>
        <p className="text-sm text-muted-foreground animate-pulse">Cargando tu experiencia...</p>
      </div>
    </div>
  );
}
