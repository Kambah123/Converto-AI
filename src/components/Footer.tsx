import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 border-t border-gray-200">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-off-black text-sm">
            © 2025 Converto AI
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-off-black hover:text-primary-dark-blue transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="text-off-black hover:text-primary-dark-blue transition-colors duration-200">
              Privacy
            </a>
            <a href="#contact" className="text-off-black hover:text-primary-dark-blue transition-colors duration-200">
              Contact Us
            </a>
            <a href="https://www.facebook.com/profile.php?id=61577762080198" target="_blank" rel="noopener noreferrer" className="text-off-black hover:text-primary-dark-blue transition-colors duration-200 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
