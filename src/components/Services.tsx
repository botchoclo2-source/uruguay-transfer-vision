import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Building2, Users, MapPin, Calendar, Briefcase, Heart, Camera, Wine } from 'lucide-react';

const Services = () => {
  const corporateServices = [
    { icon: Building2, title: 'Traslados Ejecutivos', description: 'Aeropuertos, hoteles, centros de convenciones' },
    { icon: Calendar, title: 'Eventos Corporativos', description: 'Congresos, reuniones, delegaciones empresariales' },
    { icon: Briefcase, title: 'Servicios VIP', description: 'Atención personalizada para ejecutivos y directivos' },
    { icon: Users, title: 'Grupos Corporativos', description: 'Capacidad para equipos de trabajo completos' },
  ];

  const privateServices = [
    { icon: Heart, title: 'City Tour Montevideo', description: 'Descubre la capital uruguaya con guía especializado' },
    { icon: Camera, title: 'Colonia del Sacramento', description: 'Patrimonio histórico de la humanidad UNESCO' },
    { icon: MapPin, title: 'Punta del Este', description: 'Playas exclusivas y vida nocturna de primer nivel' },
    { icon: Wine, title: 'Bodegas y Viñedos', description: 'Ruta del vino con degustaciones incluidas' },
  ];

  return (
    <>
      {/* Corporate Services */}
      <section id="corporativos" className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Paseos Corporativos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluciones profesionales para empresas, eventos, delegaciones y grupos corporativos. 
              Garantizamos puntualidad, seguridad y confort en cada servicio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {corporateServices.map((service, index) => (
              <Card key={index} className="card-hover border-0 shadow-tourism bg-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Consultar servicios corporativos
            </Button>
          </div>
        </div>
      </section>

      {/* Private Services */}
      <section id="privados" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Paseos Privados
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubrí Uruguay en familia, pareja o con amigos. Experiencias personalizadas 
              que se adaptan a tus intereses y ritmo de viaje.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {privateServices.map((service, index) => (
              <Card key={index} className="card-hover border-0 shadow-tourism bg-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
              Explorar destinos privados
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;