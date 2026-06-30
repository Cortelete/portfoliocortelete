import { motion } from 'motion/react';
import { Smartphone, Zap, Share2, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function DigitalCard() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Share2 className="text-purple-400" size={24} />,
      title: t('card.benefit1.title'),
      description: t('card.benefit1.desc')
    },
    {
      icon: <Zap className="text-purple-400" size={24} />,
      title: t('card.benefit2.title'),
      description: t('card.benefit2.desc')
    },
    {
      icon: <TrendingUp className="text-purple-400" size={24} />,
      title: t('card.benefit3.title'),
      description: t('card.benefit3.desc')
    }
  ];

  return (
    <section id="cartoes-digitais" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-zinc-100 tracking-tight mb-6"
            >
              {t('card.title1')} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-zinc-400">
                {t('card.title2')}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 mb-10 leading-relaxed"
            >
              {t('card.description')}
            </motion.p>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">{benefit.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <a href="#contato" className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-950 px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors">
                <Smartphone size={18} />
                {t('card.cta')}
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] sm:w-[320px] rounded-[2rem] border-[8px] border-zinc-900 bg-zinc-900 shadow-2xl overflow-hidden aspect-[9/16]">
              {/* Decorative elements for phone mockup */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-zinc-900 rounded-b-xl z-20"></div>
              
              <video 
                src="/reels.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover z-10 relative"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
