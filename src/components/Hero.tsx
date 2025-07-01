
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.15)_1px,transparent_0)] bg-[size:24px_24px] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-8 leading-tight tracking-tight">
            Transformamos
            <span className="block font-medium bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              ideas en realidad
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Consultoría estratégica de vanguardia para empresas que buscan 
            la excelencia en cada proyecto
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Comenzar proyecto
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300"
            >
              Ver portfolio
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl opacity-60 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl opacity-60 animate-float-delayed"></div>
    </section>
  );
};
