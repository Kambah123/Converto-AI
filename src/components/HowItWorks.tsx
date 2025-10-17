import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface StepProps {
  number: number;
  title: string;
  description: string;
  index: number;
}

const Step = ({ number, title, description, index }: StepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (stepRef.current) {
      observer.observe(stepRef.current);
    }
    
    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={stepRef}
      className="flex items-start space-x-4 opacity-0 animate-fade-in"
      style={{ animationDelay: `${0.2 * index}s` }}
    >
      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-secondary-teal text-white rounded-full flex items-center justify-center font-semibold text-sm sm:text-base">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary-dark-blue">{title}</h3>
        <p className="text-off-black text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      title: t("howitworks_step1_title"),
      description: t("howitworks_step1_desc"),
    },
    {
      title: t("howitworks_step2_title"),
      description: t("howitworks_step2_desc"),
    },
    {
      title: t("howitworks_step3_title"),
      description: t("howitworks_step3_desc"),
    },
    {
      title: t("howitworks_step4_title"),
      description: t("howitworks_step4_desc"),
    },
    {
      title: t("howitworks_step5_title"),
      description: t("howitworks_step5_desc"),
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-white" id="how-it-works" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-12 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>{t("howitworks_chip")}</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element text-primary-dark-blue">
            {t("howitworks_title_1")}<br className="hidden sm:block" /> {t("howitworks_title_2")}
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element text-off-black">
            {t("howitworks_subtitle")}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {steps.map((step, idx) => (
            <Step
              key={idx}
              number={idx + 1}
              title={step.title}
              description={step.description}
              index={idx}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-secondary-teal/10 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-primary-dark-blue">
              {t("howitworks_cta_title")}
            </h3>
            <p className="text-off-black mb-6">
              {t("howitworks_cta_desc")}
            </p>
            <a 
              href="#demo" 
              className="inline-flex items-center justify-center bg-accent-lime-green text-off-black px-6 py-3 rounded-full font-medium hover:bg-accent-lime-green/90 transition-colors duration-300"
            >
              {t("howitworks_cta_button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

