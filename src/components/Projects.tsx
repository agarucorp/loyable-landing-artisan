
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "E-commerce Revolution",
      category: "Web Design & Development",
      description: "Complete redesign and development of luxury fashion e-commerce platform with 300% conversion improvement",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      metrics: ["300% conversion", "50k+ users", "Mobile-first"],
      tags: ["React", "E-commerce", "UI/UX"]
    },
    {
      title: "FinTech Brand Identity",
      category: "Branding & Strategy",
      description: "Complete brand identity development for innovative fintech startup including logo, guidelines and digital presence",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      metrics: ["Brand recognition", "Investment ready", "Market leader"],
      tags: ["Branding", "Strategy", "Identity"]
    },
    {
      title: "SaaS Platform Design",
      category: "Web Development",
      description: "Enterprise-grade SaaS platform with advanced analytics dashboard and seamless user experience",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      metrics: ["Enterprise ready", "Real-time data", "Scalable"],
      tags: ["SaaS", "Dashboard", "Analytics"]
    },
    {
      title: "Restaurant Chain Rebrand",
      category: "Brand Strategy",
      description: "Complete rebranding strategy for international restaurant chain including digital transformation",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      metrics: ["25% revenue increase", "Global presence", "Digital transformation"],
      tags: ["Restaurant", "Rebrand", "Digital"]
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-purple-900/5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>
        
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden bg-card/30 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-purple-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-foreground mb-6 leading-tight group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-3 bg-secondary/50 rounded-lg">
                        <div className="text-sm font-medium text-purple-400">
                          {metric}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="border-purple-500/50 hover:border-purple-400 text-foreground hover:text-purple-300 self-start"
                  >
                    View Case Study
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
