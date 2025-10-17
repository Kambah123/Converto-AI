import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 2000);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-white" id="contact" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-12 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>{t("contact_chip")}</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element text-primary-dark-blue">
            {t("contact_title_1")}<br className="hidden sm:block" /> {t("contact_title_2")}
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element text-off-black">
            {t("contact_subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="opacity-0 fade-in-element">
              <h3 className="text-2xl font-semibold text-primary-dark-blue mb-6">{t("contact_get_in_touch_title")}</h3>
              <p className="text-off-black mb-8">
                {t("contact_get_in_touch_desc")}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 opacity-0 fade-in-element">
                <div className="w-10 h-10 bg-secondary-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-secondary-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark-blue">{t("contact_email_label")}</h4>
                  <p className="text-off-black">info@convertoai.com.au</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 opacity-0 fade-in-element">
                <div className="w-10 h-10 bg-secondary-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-secondary-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark-blue">{t("contact_phone_label")}</h4>
                  <p className="text-off-black">1300 000 000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 opacity-0 fade-in-element">
                <div className="w-10 h-10 bg-secondary-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-secondary-teal" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark-blue">Location</h4>
                  <p className="text-off-black">Sydney, NSW, Australia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 opacity-0 fade-in-element">
                <div className="w-10 h-10 bg-secondary-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-secondary-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark-blue">{t("contact_live_chat_label")}</h4>
                  <p className="text-off-black">{t("contact_live_chat_desc")}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 opacity-0 fade-in-element">
              <h4 className="font-semibold text-primary-dark-blue mb-3">{t("contact_response_time_title")}</h4>
              <p className="text-off-black text-sm">
                {t("contact_response_time_desc")}
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-off-black mb-2">
                    {t("contact_form_name_label")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-teal focus:border-transparent transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-off-black mb-2">
                    {t("contact_form_email_label")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-teal focus:border-transparent transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-off-black mb-2">
                    {t("contact_form_company_label")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-teal focus:border-transparent transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-off-black mb-2">
                    {t("contact_form_message_label")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-teal focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder={t("contact_form_message_placeholder")}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center py-3 px-6 rounded-lg font-medium transition-all duration-300",
                    isSubmitting
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-accent-lime-green text-off-black hover:bg-accent-lime-green/90 transform hover:scale-105"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {t("contact_form_sending")}
                    </>
                  ) : (
                    <>
                      {t("contact_form_send")}
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-accent-lime-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-dark-blue mb-2">
                  {t("contact_form_success_title")}
                </h3>
                <p className="text-off-black mb-6">
                  {t("contact_form_success_message")}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary-dark-blue hover:text-primary-dark-blue/90 font-medium"
                >
                  {t("contact_form_send_another")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 