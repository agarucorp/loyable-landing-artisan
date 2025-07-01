
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Transformación Digital Bancaria",
    category: "Fintech",
    description: "Modernización completa de la infraestructura tecnológica de un banco líder, mejorando la experiencia del cliente en un 300%.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    metrics: ["300% mejora UX", "2M usuarios activos", "40% reducción costos"]
  },
  {
    title: "Estrategia de Crecimiento E-commerce",
    category: "Retail",
    description: "Desarrollo e implementación de estrategia omnicanal que resultó en un crecimiento del 500% en ventas online.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    metrics: ["500% crecimiento", "15 países", "24/7 operación"]
  },
  {
    title: "Optimización Operacional Manufacturera",
    category: "Industria",
    description: "Reestructuración de procesos productivos utilizando Industry 4.0, aumentando la eficiencia en un 250%.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    metrics: ["250% eficiencia", "Zero defectos", "IoT integrado"]
  }
];

export const Portfolio = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Casos de éxito
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Proyectos que han transformado industrias y redefinido estándares de excelencia
          </p>
        </div>
        
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 bg-white"
            >
              <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent"></div>
                </div>
                
                <CardContent className="p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-medium text-slate-900 mb-6 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-sm font-medium text-slate-900">
                          {metric.split(' ')[0]}
                        </div>
                        <div className="text-xs text-slate-500">
                          {metric.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
