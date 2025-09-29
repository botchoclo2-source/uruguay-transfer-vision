import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Car, Users, MapPin, Clock, DollarSign } from 'lucide-react';
import fleetImage from '@/assets/vehicle-fleet.jpg';

const Vehicles = () => {
  const vehicleTypes = [
    {
      icon: Car,
      name: 'Vans Premium',
      capacity: 'Hasta 15 pasajeros',
      features: ['Aire acondicionado', 'WiFi gratuito', 'Asientos de cuero', 'Sistema de audio'],
      image: 'Van moderna y espaciosa'
    },
    {
      icon: Car,
      name: 'Autos Ejecutivos',
      capacity: 'Hasta 4 pasajeros',
      features: ['Servicio VIP', 'Conductor bilingüe', 'Agua cortesía', 'Periódicos'],
      image: 'Sedan de lujo'
    },
    {
      icon: Car,
      name: 'Buses Pequeños',
      capacity: 'Hasta 25 pasajeros',
      features: ['Ideal para grupos', 'Espacio para equipaje', 'Guía turístico', 'Micrófono'],
      image: 'Microbus confortable'
    }
  ];

  const sampleRates = [
    { route: 'Aeropuerto ↔ Montevideo Centro', price: 'USD 45', duration: '45 min' },
    { route: 'City Tour Montevideo (4h)', price: 'USD 120', duration: '4 hrs' },
    { route: 'Colonia del Sacramento (día completo)', price: 'USD 180', duration: '8 hrs' },
    { route: 'Punta del Este (día completo)', price: 'USD 200', duration: '9 hrs' },
  ];

  return (
    <section id="vehiculos" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Vehículos y Tarifas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flota moderna y bien mantenida para garantizar tu comodidad y seguridad. 
            Precios personalizados según recorrido y cantidad de pasajeros.
          </p>
        </div>

        {/* Fleet Image */}
        <div className="mb-16 rounded-lg overflow-hidden shadow-tourism-lg">
          <img 
            src={fleetImage} 
            alt="Flota de vehículos Transfer UY" 
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
        </div>

        {/* Vehicle Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {vehicleTypes.map((vehicle, index) => (
            <Card key={index} className="card-hover border-0 shadow-tourism bg-card">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <vehicle.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{vehicle.name}</CardTitle>
                <p className="text-muted-foreground font-medium">{vehicle.capacity}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sample Rates Table */}
        <div className="bg-card rounded-lg shadow-tourism p-6 mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Tarifas Orientativas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sampleRates.map((rate, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{rate.route}</h4>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    {rate.duration}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{rate.price}</div>
                  <div className="text-xs text-muted-foreground">desde</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-sunset/10 rounded-lg border border-sunset/20">
            <div className="flex items-start space-x-3">
              <DollarSign className="h-5 w-5 text-sunset mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">Precios Personalizados</p>
                <p className="text-muted-foreground">
                  Las tarifas varían según la cantidad de pasajeros, duración del viaje, 
                  temporada y servicios adicionales. Solicita tu cotización personalizada.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Solicitar cotización personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Vehicles;