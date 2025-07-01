
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float-delayed"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            {t('hero.title').split(' ').map((word, index) => (
              <span key={index} className={index >= 2 ? 'gradient-purple bg-clip-text text-transparent' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="gradient-purple hover:opacity-90 px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-105 animate-glow"
            >
              {t('hero.cta')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="border-purple-500/50 hover:border-purple-400 text-foreground hover:text-purple-300 px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300"
            >
              {t('hero.portfolio')}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
