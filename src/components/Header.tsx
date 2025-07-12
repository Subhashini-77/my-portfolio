import React from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Subhashini
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('internships')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/subhashini-n-811195326" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:subha.shiinee@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-purple-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-purple-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-gray-700 hover:text-purple-600 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-gray-700 hover:text-purple-600 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('internships')} className="text-left text-gray-700 hover:text-purple-600 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('education')} className="text-left text-gray-700 hover:text-purple-600 transition-colors">
                Education
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </button>
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/subhashini-n-811195326" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:subha.shiinee@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;