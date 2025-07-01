
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Mensaje enviado correctamente. Te contactaremos pronto.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-light text-slate-900 mb-8 tracking-tight leading-tight">
              Comencemos tu
              <span className="block font-medium">próximo proyecto</span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Cada gran transformación comienza con una conversación. 
              Cuéntanos tu visión y la haremos realidad.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-slate-700 rounded-lg"></div>
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">Respuesta en 24h</h3>
                  <p className="text-slate-600">Te contactamos en menos de un día hábil</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-slate-700 rounded-lg"></div>
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">Consulta gratuita</h3>
                  <p className="text-slate-600">Primera sesión sin compromiso</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-slate-50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-14 text-lg border-slate-200 focus:border-slate-400 rounded-xl"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-14 text-lg border-slate-200 focus:border-slate-400 rounded-xl"
                  />
                </div>
                
                <div>
                  <Input
                    name="company"
                    placeholder="Empresa"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-14 text-lg border-slate-200 focus:border-slate-400 rounded-xl"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="text-lg border-slate-200 focus:border-slate-400 rounded-xl resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
