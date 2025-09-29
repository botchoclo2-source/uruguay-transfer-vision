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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white">
            Turismo y traslados en Uruguay y la región
          </h1>
          
          <p className="text-xl sm:text-2xl text-white mb-10 max-w-3xl mx-auto font-medium">
            Soluciones de transporte profesional para empresas y grupos privados. 
            Puntualidad, seguridad y confort garantizados.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <feature.icon className="h-5 w-5 text-white" />
                <span className="text-sm font-medium text-white">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#reservas">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white border-0 shadow-tourism-lg px-8 py-3 text-lg font-semibold transition-bounce hover:scale-105"
              >
                Reservar ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            
            <a href="#corporativos">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white bg-white/90 text-foreground hover:bg-white hover:text-foreground backdrop-blur-sm px-8 py-3 text-lg font-semibold transition-tourism"
              >
                Ver servicios
              </Button>
            </a>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 flex items-center justify-center space-x-2 text-white/80">
            <CheckCircle className="h-5 w-5 text-sunset" />
            <span className="text-sm">Más de 5 años brindando experiencias únicas en Uruguay</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;