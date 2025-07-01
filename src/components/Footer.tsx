
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 bg-secondary/30 backdrop-blur-sm border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-purple bg-clip-text text-transparent mb-4">
              AgencyCorp
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Web Design</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Brand Strategy</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Development</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-purple-400 transition-colors">hello@agencycorp.com</li>
              <li className="hover:text-purple-400 transition-colors">+1 (555) 123-4567</li>
              <li className="hover:text-purple-400 transition-colors">New York, USA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 AgencyCorp. {t('footer.rights')}.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-purple-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-400 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
