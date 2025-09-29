import { Card, CardContent } from './ui/card';
import { Star, MapPin, Clock, Users } from 'lucide-react';
import coloniaImage from '@/assets/colonia-sacramento.jpg';
import montevideoImage from '@/assets/montevideo-city.jpg';
import puntaDelEsteImage from '@/assets/punta-del-este.jpg';
import vineyardImage from '@/assets/wine-vineyard.jpg';
import piriapolis from '@/assets/piriapolis.jpg';
import countryside from '@/assets/countryside.jpg';

const Experiences = () => {
  const experiences = [
    {
      title: 'Colonia del Sacramento',
      description: 'Ciudad histórica declarada Patrimonio de la Humanidad por UNESCO',
      image: coloniaImage,
      duration: '8 horas',
      highlights: ['Barrio Histórico', 'Calle de los Suspiros', 'Faro de Colonia'],
      price: 'Desde USD 180'
    },
    {
      title: 'City Tour Montevideo',
      description: 'Recorrido completo por la capital uruguaya',
      image: montevideoImage,
      duration: '4 horas',
      highlights: ['Ciudad Vieja', 'Rambla', 'Mercado del Puerto'],
      price: 'Desde USD 120'
    },
    {
      title: 'Punta del Este',
      description: 'El glamour y las playas más exclusivas del país',
      image: puntaDelEsteImage,
      duration: '9 horas',
      highlights: ['Playa Brava', 'Puerto', 'Casapueblo'],
      price: 'Desde USD 200'
    },
    {
      title: 'Ruta del Vino',
      description: 'Degustación en bodegas premium de Uruguay',
      image: vineyardImage,
      duration: '6 horas',
      highlights: ['Bodegas Boutique', 'Cata de Vinos', 'Almuerzo Gourmet'],
      price: 'Desde USD 160'
    },
    {
      title: 'Piriápolis',
      description: 'Primer balneario del Uruguay con encanto nostálgico',
      image: piriapolis,
      duration: '7 horas',
      highlights: ['Cerro San Antonio', 'Rambla', 'Hotel Argentino'],
      price: 'Desde USD 150'
    },
    {
      title: 'Turismo Rural',
      description: 'Experiencia auténtica en estancias uruguayas',
      image: countryside,
      duration: 'Día completo',
      highlights: ['Estancia Tradicional', 'Actividades de Campo', 'Asado Criollo'],
      price: 'Desde USD 190'
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      role: 'Directora de Eventos',
      rating: 5,
      comment: 'Excelente servicio para nuestro congreso internacional. Puntualidad impecable y atención personalizada.',
      avatar: 'MG'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Turista',
      rating: 5,
      comment: 'Increíble tour por Colonia del Sacramento. El guía muy conocedor y el vehículo súper cómodo.',
      avatar: 'CR'
    },
    {
      name: 'Ana Martínez',
      role: 'Wedding Planner',
      rating: 5,
      comment: 'Siempre confío en Transfer UY para mis eventos. Profesionalismo y calidad garantizada.',
      avatar: 'AM'
    }
  ];

  const highlights = [
    'Más de 500 servicios realizados',
    '98% de clientes satisfechos',
    'Cobertura en todo Uruguay',
    'Disponible 24/7'
  ];

  return (
    <section id="experiencias" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experiencias Únicas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre los destinos más hermosos de Uruguay con nuestros tours especializados. 
            Cada experiencia está diseñada para crear recuerdos inolvidables.
          </p>
        </div>

        {/* Experiences Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <Card key={index} className="card-hover border-0 shadow-tourism bg-card overflow-hidden">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full object-cover transition-tourism hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-primary">{experience.price}</span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title and Description */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{experience.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{experience.description}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{experience.duration}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Incluye:</h4>
                  <ul className="space-y-1">
                    {experience.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-4 border-t">
                  <a 
                    href="#contacto"
                    className="flex items-center justify-center text-primary hover:text-primary/80 font-medium text-sm transition-tourism"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Consultar disponibilidad
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-12">Lo que dicen nuestros clientes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover border-0 shadow-tourism bg-card">
                <CardContent className="p-6 text-center">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-medium text-primary">{testimonial.avatar}</span>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-sunset text-sunset" />
                    ))}
                  </div>
                  
                  {/* Comment */}
                  <p className="text-muted-foreground mb-4 italic text-sm">
                    "{testimonial.comment}"
                  </p>
                  
                  {/* Author */}
                  <div>
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {highlights.map((highlight, index) => {
            const values = ['5+', '500+', '98%', '24/7'];
            const labels = ['Años de experiencia', 'Servicios realizados', 'Satisfacción del cliente', 'Disponibilidad'];
            return (
              <div key={index} className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{values[index]}</div>
                <div className="text-sm text-muted-foreground">{labels[index]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experiences;