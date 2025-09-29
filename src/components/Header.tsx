import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, MapPin, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Paseos Corporativos', href: '#corporativos' },
    { name: 'Paseos Privados', href: '#privados' },
    { name: 'Vehículos y Tarifas', href: '#vehiculos' },
    { name: 'Experiencias', href: '#experiencias' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Reservas', href: '#reservas' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-primary">Transfer UY</h1>
                <p className="text-xs text-muted-foreground">Traslados & Turismo</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-tourism"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+598 98 904 246</span>
            </div>
            <a href="#reservas">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Reservar
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted/50 transition-tourism"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-tourism"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t">
              <div className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+598 98 904 246</span>
              </div>
              <a href="#reservas">
                <Button size="sm" className="w-full mt-2 bg-primary hover:bg-primary/90">
                  Reservar
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;