'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Verificar si el usuario ya aceptó cookies
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-t border-border p-4 md:p-6">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <h3 className="font-bold text-foreground mb-2">Política de Cookies</h3>
          <p className="text-sm text-muted-foreground">
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Las cookies nos ayudan a entender cómo usas nuestro sitio y a personalizar el contenido. Al continuar usando nuestro sitio, aceptas el uso de cookies.{' '}
            <a href="/cookies" className="text-accent hover:underline">
              Más información
            </a>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Button variant="outline" onClick={handleReject} className="text-sm">
            Rechazar
          </Button>
          <Button onClick={handleAccept} className="text-sm">
            Aceptar
          </Button>
        </div>
        <button
          onClick={handleReject}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
