import { motion } from 'motion/react';
import { ArrowRight, Code2, MonitorSmartphone, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {t('hero.badge')}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1]"
          >
            {t('hero.title1')}<span className="text-gradient">{t('hero.titleHighlight')}</span>{t('hero.title2')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-lg leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 bg-zinc-100 text-zinc-950 px-8 py-4 rounded-full text-base font-semibold hover:bg-zinc-200 transition-colors"
            >
              {t('hero.projectsBtn')} <ArrowRight size={18} />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-100 px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-800 transition-colors"
            >
              {t('nav.contact')}
            </a>
          </motion.div>
        </div>
        
        {/* Right side abstract illustration / features */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:grid grid-cols-2 gap-4 relative"
        >
           <div className="space-y-4 pt-12">
              <div className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-3xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-4">
                  <MonitorSmartphone size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('hero.feat1.title')}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{t('hero.feat1.desc')}</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-3xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center mb-4">
                  <Code2 size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('hero.feat2.title')}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{t('hero.feat2.desc')}</p>
              </div>
           </div>
           <div className="space-y-4">
              <div className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-3xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-pink-500/10 text-pink-400 rounded-2xl flex items-center justify-center mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('hero.feat3.title')}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{t('hero.feat3.desc')}</p>
              </div>
              <div className="h-[220px] bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-800/50 rounded-3xl p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute right-4 bottom-4 w-24 h-24 border border-zinc-700/50 rounded-full" />
                <div className="absolute -right-4 -bottom-4 w-32 h-32 border border-zinc-700/50 rounded-full" />
                <p className="text-zinc-500 font-mono text-xs absolute bottom-6 left-6">&lt;div class="creative" /&gt;</p>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
