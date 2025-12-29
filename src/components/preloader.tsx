import { Logo } from '@/components/icons';

export function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background animate-fade-out animation-delay-1500">
      <div className="flex items-center gap-3 text-2xl font-bold font-headline text-primary animate-fade-in">
        <Logo className="w-8 h-8" />
        WebCraft Studio
      </div>
      <div className="mt-4 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-accent animate-pulse-dot" />
        <div
          className="w-3 h-3 rounded-full bg-accent animate-pulse-dot"
          style={{ animationDelay: '0.2s' }}
        />
        <div
          className="w-3 h-3 rounded-full bg-accent animate-pulse-dot"
          style={{ animationDelay: '0.4s' }}
        />
      </div>
    </div>
  );
}
