import { MapPin, Phone, Mail, Instagram, Heart, Shield, Award, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Paseos Corporativos', href: '#corporativos' },
    { name: 'Paseos Privados', href: '#privados' },
    { name: 'Vehículos y Tarifas', href: '#vehiculos' },
  ];

  const services = [
    { name: 'City Tour Montevideo', href: '#privados' },
    { name: 'Colonia del Sacramento', href: '#privados' },
    { name: 'Punta del Este', href: '#privados' },
    { name: 'Traslados Corporativos', href: '#corporativos' },
  ];

  const trustBadges = [
    { icon: Shield, text: 'Seguridad Garantizada' },
    { icon: Award, text: '5+ Años de Experiencia' },
    { icon: Clock, text: 'Disponible 24/7' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Transfer UY</h3>
                <p className="text-sm text-white/80">Traslados & Turismo</p>
              </div>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed">
              Más de 5 años brindando traslados y experiencias únicas en Uruguay. 
              Tu comodidad y seguridad son nuestra prioridad.
            </p>

            {/* Trust Badges */}
            <div className="space-y-2">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <badge.icon className="h-4 w-4 text-primary" />
                  <span className="text-white/80">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-tourism text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios Populares</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-white/70 hover:text-white transition-tourism text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <div className="space-y-3">
              <a 
                href="tel:+59898904246" 
                className="flex items-center space-x-3 text-white/70 hover:text-white transition-tourism"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+598 98 904 246</span>
              </a>
              
              <a 
                href="mailto:info@transferuy.com" 
                className="flex items-center space-x-3 text-white/70 hover:text-white transition-tourism"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@transferuy.com</span>
              </a>
              
              <a 
                href="https://instagram.com/transfer.uy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/70 hover:text-white transition-tourism"
              >
                <Instagram className="h-4 w-4" />
                <span className="text-sm">@transfer.uy</span>
              </a>

              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Montevideo, Uruguay</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-6">
              <a
                href="https://wa.me/59898904246"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-tourism"
              >
                <Phone className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <span>© {currentYear} Transfer Traslados & Turismo.</span>
              <span>Todos los derechos reservados.</span>
            </div>
            
            <div className="flex items-center space-x-1 mt-4 md:mt-0 text-sm text-white/60">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>en Uruguay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;