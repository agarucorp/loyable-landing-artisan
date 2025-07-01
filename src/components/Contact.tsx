
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully. We'll contact you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              {t('contact.title')}
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {t('contact.subtitle')}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-purple rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{t('contact.response')}</h3>
                  <p className="text-muted-foreground">Quick response guaranteed</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-purple rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{t('contact.consultation')}</h3>
                  <p className="text-muted-foreground">No commitment required</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-500 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder={t('contact.form.name')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-14 text-lg bg-secondary/50 border-border/50 focus:border-purple-500 rounded-xl"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={t('contact.form.email')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-14 text-lg bg-secondary/50 border-border/50 focus:border-purple-500 rounded-xl"
                  />
                </div>
                
                <div>
                  <Input
                    name="company"
                    placeholder={t('contact.form.company')}
                    value={formData.company}
                    onChange={handleChange}
                    className="h-14 text-lg bg-secondary/50 border-border/50 focus:border-purple-500 rounded-xl"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder={t('contact.form.message')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="text-lg bg-secondary/50 border-border/50 focus:border-purple-500 rounded-xl resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full h-14 gradient-purple hover:opacity-90 text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-105 animate-glow"
                >
                  {t('contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
