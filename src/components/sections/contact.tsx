import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contacto" className="w-full bg-secondary py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            Hablemos de tu Proyecto
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            ¿Listo para empezar? Contáctame para una cotización gratuita y sin compromiso.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
           <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold font-headline mb-4">Envía un Mensaje</h3>
                <ContactForm />
           </div>
           <div className="flex flex-col justify-center items-center bg-card p-8 rounded-lg shadow-lg">
               <h3 className="text-2xl font-bold font-headline mb-4">Contacto Directo</h3>
               <p className="text-muted-foreground text-center mb-6">¿Prefieres una conversación rápida? Envíame un mensaje por WhatsApp.</p>
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1DAE50] text-white">
                    <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Chatea en WhatsApp
                    </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">Responderé lo antes posible.</p>
           </div>
        </div>
      </div>
    </section>
  );
}
