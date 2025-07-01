
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-purple bg-clip-text text-transparent">
            AgencyCorp
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.process')}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.contact')}
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex bg-secondary rounded-lg p-1">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  language === 'es' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                }`}
              >
                EN
              </button>
            </div>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="gradient-purple hover:opacity-90 transition-opacity"
            >
              {t('nav.contact')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
