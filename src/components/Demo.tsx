import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Calendar, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const calendlyUrl = "https://calendly.com/pechal-info/30min";

const Demo = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Load Calendly widget script and CSS
  useEffect(() => {
    // Inject CSS if not present
    if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    // Inject script if not present
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  
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
  
  const handleBookDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url: calendlyUrl });
      } else {
      window.open(calendlyUrl, "_blank"); // fallback
    }
    return false;
  };
  
  return (
    <section className="py-8 sm:py-12 md:py-20 relative bg-white" id="demo" ref={sectionRef}>
      <div className="section-container px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Book a Free Session</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-dark-blue">
            See Converto AI in Action
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element text-base sm:text-lg font-display text-off-black">
            Discover how our AI agents can automate your business and boost your results. Book a free, no-pressure session with our team.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-secondary-teal/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-primary-dark-blue mb-2 font-display">
                Ready to Transform Your Business?
              </h3>
              <p className="text-off-black mb-6 sm:mb-8 text-base sm:text-lg font-display">
                Schedule a free, personalized session with our experts. No sales pressure—just value.
              </p>
              <button
                onClick={handleBookDemo}
                className="w-full flex items-center justify-center py-3 sm:py-4 px-4 sm:px-8 rounded-lg font-medium transition-all duration-300 bg-accent-lime-green text-off-black hover:bg-accent-lime-green/90 transform hover:scale-105 shadow-lg text-base sm:text-lg font-display"
              >
                Schedule Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <p className="text-xs text-gray-500 text-center mt-3 sm:mt-4 font-display">
                Free 30-minute consultation • No commitment required
              </p>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-primary-dark-blue mb-2 text-base sm:text-lg font-display">What to Expect</h4>
              <ul className="text-xs sm:text-sm text-off-black space-y-1 font-display">
                <li>• A live walkthrough of Converto AI’s features</li>
                <li>• Answers to your business-specific questions</li>
                <li>• Expert advice on automation opportunities</li>
                <li>• No sales pressure—just value</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo; 