import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MessageCircle, Instagram, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mensaje enviado",
      description: "Te contactaremos a la brevedad. ¡Gracias por elegirnos!",
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent(
      '¡Hola! Me interesa hacer una reserva con Transfer UY. ¿Pueden ayudarme con información y disponibilidad?'
    );
    window.open(`https://wa.me/59898904246?text=${message}`, '_blank');
  };

  const contactInfo = [
    { icon: Phone, label: 'Teléfono', value: '+598 98 904 246', action: 'tel:+59898904246' },
    { icon: Instagram, label: 'Instagram', value: '@transfer.uy', action: 'https://instagram.com/transfer.uy' },
    { icon: Mail, label: 'Email', value: 'info@transferuy.com', action: 'mailto:info@transferuy.com' },
    { icon: MapPin, label: 'Ubicación', value: 'Montevideo, Uruguay', action: '#' },
  ];

  return (
    <>
      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Contacto
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ¿Tienes consultas o necesitas más información? Estamos aquí para ayudarte. 
              Contáctanos por el medio que prefieras.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.action}
                      className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow-tourism card-hover group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-tourism">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{info.label}</div>
                        <div className="text-muted-foreground">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <Card className="border-0 shadow-tourism">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Horarios de atención</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lunes a Viernes</span>
                      <span className="font-medium">8:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sábados</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Domingos</span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </div>
                    <div className="mt-4 p-3 bg-primary/5 rounded-md">
                      <div className="text-xs text-primary font-medium">
                        * Servicios de emergencia disponibles 24/7
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-tourism-lg">
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+598 99 123 456"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Cuéntanos sobre tu consulta o solicitud de servicio..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservas" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              ¿Listo para tu próxima aventura?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Reserva tu traslado o tour de forma fácil y rápida. Te contactaremos para 
              confirmar detalles y brindarte la mejor experiencia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">1</div>
                <h3 className="font-semibold mb-2">Elige tu servicio</h3>
                <p className="text-sm text-white/80">Traslado, city tour, o experiencia personalizada</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">2</div>
                <h3 className="font-semibold mb-2">Confirma pasajeros</h3>
                <p className="text-sm text-white/80">Cantidad de personas, fechas y preferencias</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">3</div>
                <h3 className="font-semibold mb-2">Recibe presupuesto</h3>
                <p className="text-sm text-white/80">Cotización personalizada y confirmación</p>
              </div>
            </div>

            <Button 
              size="lg" 
              onClick={handleWhatsAppReservation}
              className="bg-secondary hover:bg-secondary/90 text-white shadow-tourism-lg px-8 py-4 text-lg font-semibold transition-bounce hover:scale-105"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Reservar por WhatsApp
            </Button>

            <p className="mt-6 text-white/70 text-sm">
              O envíanos un email a <a href="mailto:reservas@transferuy.com" className="underline hover:text-white">reservas@transferuy.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;