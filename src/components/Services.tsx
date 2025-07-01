
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Consultoría Estratégica",
    description: "Desarrollamos estrategias personalizadas que impulsan el crecimiento sostenible de tu negocio.",
    features: ["Análisis de mercado", "Planificación estratégica", "Optimización de procesos"]
  },
  {
    title: "Transformación Digital",
    description: "Modernizamos tu empresa con tecnologías de vanguardia y procesos digitales eficientes.",
    features: ["Automatización", "Cloud computing", "Análisis de datos"]
  },
  {
    title: "Gestión de Proyectos",
    description: "Lideramos tus proyectos más complejos garantizando resultados excepcionales en tiempo y forma.",
    features: ["Metodologías ágiles", "Control de calidad", "Gestión de riesgos"]
  }
];

export const Services = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Nuestros servicios
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Soluciones integrales diseñadas para llevar tu empresa al siguiente nivel
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-slate-50 to-gray-50 hover:from-white hover:to-slate-50 transform hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl mb-6 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-lg"></div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-medium text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-500">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
