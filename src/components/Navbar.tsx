import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, Star, HelpCircle, DollarSign, PlayCircle, Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export default function NavBar({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Features", url: "#features", icon: Star },
    { name: "How It Works", url: "#how-it-works", icon: HelpCircle },
    { name: "Demo", url: "#demo", icon: PlayCircle },
    { name: "Contact", url: "#contact", icon: Phone },
  ];

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const found = navItems.find((item) => item.url === hash);
      if (found) setActiveTab(found.name);
    } else {
      setActiveTab(navItems[0].name);
    }
  }, [location]);

  const handleNavClick = (itemName: string, url: string) => {
    setActiveTab(itemName);
    setIsMobileMenuOpen(false);
    
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={cn("fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm", className)}>
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center group select-none" style={{ textDecoration: 'none' }}>
          <img src="/new owl logo.png" alt="Converto AI Logo" className="h-20 sm:h-28" />
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 bg-background/5 border border-border backdrop-blur-lg py-2 px-2 rounded-full shadow-lg">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    onClick={() => handleNavClick(item.name, item.url)}
                    className={cn(
                      "relative cursor-pointer font-semibold px-4 py-2 rounded-full transition-colors text-sm",
                      "text-off-black hover:text-primary-dark-blue",
                      isActive && "bg-primary-dark-blue/10 text-primary-dark-blue"
                    )}
                    style={{ textDecoration: 'none' }}
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={16} strokeWidth={2} />
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="lamp"
                        className="absolute inset-0 w-full bg-primary-dark-blue/5 rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </nav>
        )}

        {/* Right side */}
        <div className="flex items-center gap-3">
          
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg"
          >
            <nav className="px-4 py-4">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.name;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      onClick={() => handleNavClick(item.name, item.url)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                        "text-off-black hover:bg-primary-dark-blue/10 hover:text-primary-dark-blue",
                        isActive && "bg-primary-dark-blue/10 text-primary-dark-blue font-semibold"
                      )}
                      style={{ textDecoration: 'none' }}
                    >
                      <Icon size={20} strokeWidth={2} />
                      <span className="text-base font-medium">{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

