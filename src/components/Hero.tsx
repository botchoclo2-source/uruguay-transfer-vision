import { Button } from './ui/button';
import { ArrowRight, CheckCircle, Users, Shield, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-uruguay-van.jpg';

const Hero = () => {
  const features = [
    { icon: Shield, text: 'Seguridad garantizada' },
    { icon: Clock, text: 'Puntualidad absoluta' },
    { icon: Users, text: 'Servicio personalizado' },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Turismo y traslados en{' '}
            <span className="bg-gradient-to-r from-sunset to-nature bg-clip-text text-transparent">
              Uruguay y la región
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Viajes cómodos, seguros y personalizados para empresas y grupos privados
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <feature.icon className="h-5 w-5 text-sunset" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white border-0 shadow-tourism-lg px-8 py-3 text-lg font-semibold transition-bounce hover:scale-105"
            >
              Reservar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-semibold transition-tourism"
            >
              Ver servicios
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 flex items-center justify-center space-x-2 text-white/80">
            <CheckCircle className="h-5 w-5 text-sunset" />
            <span className="text-sm">Más de 5 años brindando experiencias únicas en Uruguay</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;