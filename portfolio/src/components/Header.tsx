import React, { useState, useEffect } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-github-dark/95 backdrop-blur-md border-b border-github-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-github-accent">Portfolio</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-github-accent ${
                      activeSection === item.id ? 'text-github-accent' : 'text-github-text-secondary'
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-github-text-secondary hover:text-github-accent transition-colors duration-200">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="#" className="text-github-text-secondary hover:text-github-accent transition-colors duration-200">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-github-text-secondary hover:text-github-accent transition-colors duration-200">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-github-text-secondary hover:text-github-accent transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-github-border">
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-github-accent ${
                    activeSection === item.id ? 'text-github-accent' : 'text-github-text-secondary'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex space-x-4 px-4 pt-2">
                <a href="#" className="text-github-text-secondary hover:text-github-accent transition-colors duration-200">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="#" className="text-github-text-secondary hover:text-github-accent transition-colors duration-200">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-github-text-secondary hover:text-github-accent transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;