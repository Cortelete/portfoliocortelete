import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: t('nav.projects'), href: '#projetos' },
    { name: t('nav.resume'), href: '#curriculo' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="text-xl font-display font-bold tracking-tighter">
          Davi<span className="text-purple-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-zinc-50 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-50 transition-colors mr-2"
          >
            <Globe size={18} />
            <span className="text-sm font-medium uppercase">{language}</span>
          </button>
          <a href="https://github.com/Cortelete" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-50 transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/davicortelete/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-50 transition-colors"><Linkedin size={20} /></a>
          <a href="#contato" className="bg-zinc-100 text-zinc-950 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors">
            {t('nav.letsTalk')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-50 transition-colors"
          >
            <Globe size={18} />
            <span className="text-sm font-medium uppercase">{language}</span>
          </button>
          <button className="text-zinc-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-6"
        >
          <div className="flex flex-col gap-4 text-lg">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-zinc-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-zinc-800 my-2" />
            <a href="#contato" onClick={() => setIsOpen(false)} className="text-purple-400 hover:text-purple-300">
              {t('nav.letsTalk')}
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
