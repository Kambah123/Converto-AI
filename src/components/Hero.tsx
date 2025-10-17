import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/AnimatedShinyText";
import { SparklesText } from "@/components/SparklesText";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      className="overflow-hidden relative flex items-center justify-center min-h-[70vh] bg-cover px-4 sm:px-6 lg:px-8"
      id="hero"
      style={{
        backgroundPosition: 'center 30%',
        padding: '80px 20px 60px'
      }}
    >
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center">
        <img 
          src="/new owl logo.png" 
          alt="Pechal Logo" 
          className="hero-big-logo mb-4 animate-fade-in"
          style={{
            width: '180px',
            height: '180px',
            maxWidth: '60vw',
            objectFit: 'contain',
            margin: '0 auto',
            display: 'block',
          }}
        />
        <AnimatedShinyText className="pulse-chip mb-3 sm:mb-6 animate-fade-in">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-secondary-teal text-white mr-2">01</span>
          <span>{t("ai_voice_chatbot_service")}</span>
        </AnimatedShinyText>
        <SparklesText
          text={t("hero_title")}
          className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight animate-fade-in max-w-xl mx-auto"
        />
        <p
          className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed animate-fade-in text-gray-950 font-normal text-base sm:text-lg text-center"
        >
          {t("hero_subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in justify-center w-full max-w-md sm:max-w-none">
          <a
            href="#demo"
            className="flex items-center justify-center group w-full sm:w-auto text-center bg-accent-lime-green text-off-black"
            style={{
              borderRadius: '1440px',
              boxSizing: 'border-box',
              cursor: 'pointer',
              fontSize: '14px',
              lineHeight: '20px',
              padding: '16px 24px',
              border: '1px solid #1D1D1D',
            }}
          >
            {t("try_pechal_live")}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

