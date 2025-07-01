
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-transparent via-secondary/20 to-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('faq.title')}
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <Card 
              key={index} 
              className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/20 transition-colors"
                >
                  <h3 className="text-lg font-medium text-foreground">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
