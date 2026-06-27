import { Github, Linkedin, Mail, ArrowUpRight, X, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    
    const text = `${t('wa.messageTemplate')}\n\nNome: ${name}${company ? `\nEmpresa: ${company}` : ''}`;
    const url = `https://wa.me/5541988710303?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsWhatsAppModalOpen(false);
    setName('');
    setCompany('');
  };

  return (
    <footer id="contato" className="bg-zinc-950 pt-24 pb-12 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
              {t('footer.title')} <br/><span className="text-gradient">{t('footer.subtitle')}</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-md mb-8">
              {t('footer.description')}
            </p>
            
            <a 
              href="mailto:d.cortelete@gmail.com" 
              className="inline-flex items-center gap-2 text-2xl font-display font-medium hover:text-purple-400 transition-colors group"
            >
              d.cortelete@gmail.com
              <ArrowUpRight className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" size={24} />
            </a>
            
            <div className="mt-8">
              <button 
                onClick={() => setIsWhatsAppModalOpen(true)}
                className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/20 px-6 py-3 rounded-full text-sm font-medium hover:bg-green-500/20 transition-colors"
              >
                <MessageCircle size={18} />
                {t('footer.whatsapp')}
              </button>
            </div>
          </div>

          <div className="md:text-right flex flex-col md:items-end justify-between">
            <div className="flex gap-4">
              <a href="https://github.com/Cortelete" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/davicortelete/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:d.cortelete@gmail.com" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-zinc-900 mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Davi Cortelete. Todos os direitos reservados.</p>
          <p>{t('footer.madeWith')}</p>
        </div>
      </div>

      <AnimatePresence>
        {isWhatsAppModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWhatsAppModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 p-6 md:p-8 rounded-3xl shadow-2xl"
            >
              <button 
                onClick={() => setIsWhatsAppModalOpen(false)}
                className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <div className="w-12 h-12 bg-green-500/10 text-green-400 rounded-2xl flex items-center justify-center mb-4">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold text-zinc-100 mb-2">{t('wa.title')}</h3>
                <p className="text-zinc-400 text-sm">{t('wa.subtitle')}</p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1.5">{t('wa.nameLabel')}</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('wa.namePlaceholder')}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder:text-zinc-600"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-1.5">{t('wa.companyLabel')}</label>
                  <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={t('wa.companyPlaceholder')}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder:text-zinc-600"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-zinc-100 text-zinc-950 px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-zinc-200 transition-colors mt-6"
                >
                  {t('wa.submitBtn')}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
