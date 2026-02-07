'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-16 h-16 text-yellow-500" />
        </div>
        <h1 className="text-6xl font-bold font-headline text-primary mb-2">500</h1>
        <h2 className="text-2xl font-bold font-headline mb-4">Error del servidor</h2>
        <p className="text-muted-foreground mb-4">
          Algo salió mal. Por favor intenta de nuevo.
        </p>
        {error.message && (
          <p className="text-sm text-muted-foreground mb-8 bg-secondary p-4 rounded">
            {error.message}
          </p>
        )}
        <div className="flex gap-4 flex-col sm:flex-row justify-center">
          <Button onClick={reset}>Intentar de nuevo</Button>
          <Button variant="outline" asChild>
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
