
import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.process': 'Proceso',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Diseño Web y Estrategia de Marca',
    'hero.subtitle': 'Creamos experiencias digitales excepcionales que conectan marcas con sus audiencias y generan resultados medibles',
    'hero.cta': 'Comenzar Proyecto',
    'hero.portfolio': 'Ver Portfolio',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones integrales para el crecimiento digital de tu marca',
    'services.webDesign.title': 'Diseño Web',
    'services.webDesign.desc': 'Sitios web modernos, responsivos y optimizados para conversión que reflejan la esencia de tu marca',
    'services.branding.title': 'Estrategia de Marca',
    'services.branding.desc': 'Desarrollo de identidad visual coherente y estrategias que posicionan tu marca en el mercado',
    'services.development.title': 'Desarrollo Web',
    'services.development.desc': 'Implementación técnica con las últimas tecnologías para garantizar rendimiento y escalabilidad',
    
    // Process
    'process.title': 'Nuestro Proceso de Trabajo',
    'process.subtitle': 'Metodología probada para garantizar resultados excepcionales',
    'process.step1.title': 'Investigación',
    'process.step1.desc': 'Análisis profundo de tu mercado, competencia y audiencia objetivo',
    'process.step2.title': 'Estrategia',
    'process.step2.desc': 'Desarrollo de estrategia digital y plan de trabajo personalizado',
    'process.step3.title': 'Diseño',
    'process.step3.desc': 'Creación de prototipos y diseños centrados en la experiencia del usuario',
    'process.step4.title': 'Desarrollo',
    'process.step4.desc': 'Implementación técnica con código limpio y optimizado',
    'process.step5.title': 'Lanzamiento',
    'process.step5.desc': 'Pruebas exhaustivas y puesta en marcha del proyecto',
    
    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Casos de éxito que demuestran nuestro compromiso con la excelencia',
    
    // Contact
    'contact.title': 'Comencemos tu próximo proyecto',
    'contact.subtitle': 'Transforma tu presencia digital con nuestra experiencia',
    'contact.form.name': 'Tu nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.company': 'Empresa',
    'contact.form.message': 'Cuéntanos sobre tu proyecto...',
    'contact.form.submit': 'Enviar mensaje',
    'contact.response': 'Respuesta en 24h',
    'contact.consultation': 'Consulta gratuita',
    
    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.q1': '¿Cuánto tiempo toma un proyecto?',
    'faq.a1': 'Dependiendo de la complejidad, un proyecto típico toma entre 4-8 semanas desde el inicio hasta el lanzamiento.',
    'faq.q2': '¿Incluyen mantenimiento?',
    'faq.a2': 'Sí, ofrecemos planes de mantenimiento para garantizar que tu sitio esté siempre actualizado y seguro.',
    'faq.q3': '¿Trabajan con empresas internacionales?',
    'faq.a3': 'Absolutamente. Trabajamos con clientes de todo el mundo y nos adaptamos a diferentes zonas horarias.',
    
    // Footer
    'footer.description': 'Transformamos ideas en experiencias digitales que impulsan el crecimiento de tu negocio',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Web Design & Brand Strategy',
    'hero.subtitle': 'We create exceptional digital experiences that connect brands with their audiences and generate measurable results',
    'hero.cta': 'Start Project',
    'hero.portfolio': 'View Portfolio',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive solutions for your brand\'s digital growth',
    'services.webDesign.title': 'Web Design',
    'services.webDesign.desc': 'Modern, responsive and conversion-optimized websites that reflect your brand essence',
    'services.branding.title': 'Brand Strategy',
    'services.branding.desc': 'Development of coherent visual identity and strategies that position your brand in the market',
    'services.development.title': 'Web Development',
    'services.development.desc': 'Technical implementation with latest technologies to ensure performance and scalability',
    
    // Process
    'process.title': 'Our Work Process',
    'process.subtitle': 'Proven methodology to guarantee exceptional results',
    'process.step1.title': 'Research',
    'process.step1.desc': 'Deep analysis of your market, competition and target audience',
    'process.step2.title': 'Strategy',
    'process.step2.desc': 'Development of digital strategy and personalized work plan',
    'process.step3.title': 'Design',
    'process.step3.desc': 'Creation of prototypes and user-centered designs',
    'process.step4.title': 'Development',
    'process.step4.desc': 'Technical implementation with clean and optimized code',
    'process.step5.title': 'Launch',
    'process.step5.desc': 'Comprehensive testing and project deployment',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Success stories that demonstrate our commitment to excellence',
    
    // Contact
    'contact.title': 'Let\'s start your next project',
    'contact.subtitle': 'Transform your digital presence with our expertise',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Email address',
    'contact.form.company': 'Company',
    'contact.form.message': 'Tell us about your project...',
    'contact.form.submit': 'Send message',
    'contact.response': '24h response',
    'contact.consultation': 'Free consultation',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How long does a project take?',
    'faq.a1': 'Depending on complexity, a typical project takes 4-8 weeks from start to launch.',
    'faq.q2': 'Do you include maintenance?',
    'faq.a2': 'Yes, we offer maintenance plans to ensure your site is always updated and secure.',
    'faq.q3': 'Do you work with international companies?',
    'faq.a3': 'Absolutely. We work with clients worldwide and adapt to different time zones.',
    
    // Footer
    'footer.description': 'We transform ideas into digital experiences that drive your business growth',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
