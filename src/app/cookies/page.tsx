import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <Link href="/">
          <Button variant="outline" className="mb-8">
            ← Volver al inicio
          </Button>
        </Link>

        <h1 className="text-4xl font-bold font-headline text-primary mb-8">
          Política de Cookies
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold font-headline text-foreground mb-4">
              ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. 
              Estos archivos nos ayudan a mejorar tu experiencia y a entender cómo utilizas nuestro sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-foreground mb-4">
              Tipos de cookies que utilizamos
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio web
              </li>
              <li>
                <strong>Cookies de rendimiento:</strong> Nos ayudan a entender cómo usas nuestro sitio
              </li>
              <li>
                <strong>Cookies de funcionalidad:</strong> Recuerdan tus preferencias y decisiones
              </li>
              <li>
                <strong>Cookies de marketing:</strong> Utilizadas para mostrarte contenido relevante
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-foreground mb-4">
              Tus derechos
            </h2>
            <p>
              Tienes derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Rechazar el uso de cookies no esenciales</li>
              <li>Controlar tus preferencias de cookies en cualquier momento</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Acceder a información sobre cómo usamos tus datos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-foreground mb-4">
              Gestionar tus cookies
            </h2>
            <p>
              Puedes gestionar tus preferencias de cookies en los ajustes de tu navegador. 
              Para obtener más información sobre cómo hacerlo, consulta la documentación de tu navegador:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Chrome, Edge, Firefox, Safari</li>
              <li>Opera, Internet Explorer</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-foreground mb-4">
              Cambios en esta política
            </h2>
            <p>
              Nos reservamos el derecho de modificar esta política de cookies en cualquier momento. 
              Los cambios entrarán en vigor cuando publiquemos la política actualizada en nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-foreground mb-4">
              Contacto
            </h2>
            <p>
              Si tienes preguntas sobre nuestra política de cookies, por favor{' '}
              <Link href="/#contacto" className="text-accent hover:underline">
                contacta con nosotros
              </Link>
              .
            </p>
          </section>

          <div className="bg-secondary p-6 rounded-lg border border-border">
            <p className="text-sm">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
