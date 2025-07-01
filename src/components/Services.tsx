
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceIcons = {
  webDesign: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  branding: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
    </svg>
  ),
  development: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  )
};

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.webDesign.title'),
      description: t('services.webDesign.desc'),
      icon: serviceIcons.webDesign,
      features: ["Responsive Design", "SEO Optimization", "Performance"]
    },
    {
      title: t('services.branding.title'),
      description: t('services.branding.desc'),
      icon: serviceIcons.branding,
      features: ["Visual Identity", "Brand Guidelines", "Market Positioning"]
    },
    {
      title: t('services.development.title'),
      description: t('services.development.desc'),
      icon: serviceIcons.development,
      features: ["Modern Tech Stack", "Scalable Architecture", "Clean Code"]
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 gradient-purple rounded-2xl mb-6 flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
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
