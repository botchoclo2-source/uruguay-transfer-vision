import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import destinationsImage from '@/assets/uruguay-destinations.jpg';

const Experiences = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'Directora de Eventos',
      company: 'Empresa Multinacional',
      rating: 5,
      comment: 'Excelente servicio para nuestro congreso internacional. Puntualidad impecable y atención personalizada para todos nuestros invitados.',
      avatar: 'MG'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Turista',
      company: 'Familia visitante',
      rating: 5,
      comment: 'Increíble tour por Colonia del Sacramento. El guía muy conocedor y el vehículo súper cómodo. Recomendamos 100%.',
      avatar: 'CR'
    },
    {
      name: 'Ana Martínez',
      role: 'Wedding Planner',
      company: 'Eventos Premium',
      rating: 5,
      comment: 'Siempre confío en Transfer UY para mis eventos. Profesionalismo y calidad garantizada en cada servicio.',
      avatar: 'AM'
    }
  ];

  const highlights = [
    'Más de 500 servicios realizados exitosamente',
    '98% de clientes satisfechos nos recomiendan',
    'Cobertura en todo Uruguay y la región',
    'Disponible 24/7 para emergencias'
  ];

  return (
    <section id="experiencias" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experiencias Únicas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre por qué somos la elección preferida para traslados y turismo en Uruguay. 
            Cada viaje es una experiencia memorable.
          </p>
        </div>

        {/* Destinations Gallery */}
        <div className="mb-16 rounded-lg overflow-hidden shadow-tourism-lg">
          <img 
            src={destinationsImage} 
            alt="Destinos turísticos de Uruguay" 
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
          <div className="bg-gradient-ocean p-6 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-sm">
                  <div className="font-semibold mb-1">{highlight.split(' ')[0]} {highlight.split(' ')[1]}</div>
                  <div className="text-white/80 text-xs">{highlight.split(' ').slice(2).join(' ')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-12">Lo que dicen nuestros clientes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover border-0 shadow-tourism bg-card">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-sunset text-sunset" />
                    ))}
                  </div>
                  
                  {/* Comment */}
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.comment}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-primary">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Años de experiencia</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-secondary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Servicios realizados</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfacción del cliente</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Disponibilidad</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;