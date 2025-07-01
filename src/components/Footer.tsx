
export const Footer = () => {
  return (
    <footer className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-medium text-white mb-4">Consultora</h3>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Transformamos empresas a través de estrategias innovadoras y 
              soluciones tecnológicas de vanguardia.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Consultoría Estratégica</li>
              <li>Transformación Digital</li>
              <li>Gestión de Proyectos</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-slate-400">
              <li>info@consultora.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Madrid, España</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Consultora. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacidad
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
