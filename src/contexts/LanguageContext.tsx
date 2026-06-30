import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navbar
    'nav.projects': 'Trabalhos',
    'nav.resume': 'Sobre',
    'nav.contact': 'Contato',
    'nav.letsTalk': 'Vamos conversar',
    
    // Hero
    'hero.badge': 'Disponível para novos projetos',
    'hero.title1': 'Criando experiências web ',
    'hero.titleHighlight': 'modernas',
    'hero.title2': ' e impactantes.',
    'hero.greeting': 'Olá, eu sou Davi Cortelete',
    'hero.role': 'Desenvolvedor Frontend',
    'hero.description': 'Crio interfaces modernas, responsivas e focadas na melhor experiência do usuário, transformando ideias em produtos digitais escaláveis.',
    'hero.projectsBtn': 'Ver Projetos',
    
    // Hero features
    'hero.feat1.title': 'Design Responsivo',
    'hero.feat1.desc': 'Interfaces que se adaptam perfeitamente a qualquer tamanho de tela.',
    'hero.feat2.title': 'Código Limpo',
    'hero.feat2.desc': 'Arquitetura moderna, escalável e de fácil manutenção.',
    'hero.feat3.title': 'Performance Alta',
    'hero.feat3.desc': 'Otimização máxima para carregamento rápido e fluidez.',
    
    // Projects
    'projects.title': 'Trabalhos',
    'projects.subtitle': 'Recentes',
    'projects.description': 'Uma seleção dos meus projetos mais recentes, com foco em usabilidade, performance e design de ponta.',
    'projects.viewProject': 'Ver Projeto',
    
    // Digital Card
    'card.title1': 'Cartões de Visita',
    'card.title2': 'Digitais Exclusivos',
    'card.description': 'Eleve o nível do seu networking. Um cartão de visitas digital interativo e personalizado não é apenas um link, é a porta de entrada para fechar mais negócios, centralizando todas as suas informações vitais em um design que impressiona.',
    'card.benefit1.title': 'Compartilhamento Instantâneo',
    'card.benefit1.desc': 'Envie seu contato, redes sociais e portfólio com apenas um clique. Sem limites físicos.',
    'card.benefit2.title': 'Destaque e Inovação',
    'card.benefit2.desc': 'Demonstre profissionalismo e atualidade tecnológica no primeiro contato com seu cliente.',
    'card.benefit3.title': 'Mais Conversão',
    'card.benefit3.desc': 'Facilite o caminho do seu cliente até você, integrando WhatsApp, site e redes em um só lugar.',
    'card.cta': 'Quero o meu Cartão Digital',
    
    // Resume
    'resume.title': 'Resumo',
    'resume.subtitle': 'Profissional',
    'resume.description': 'Minha trajetória profissional e habilidades técnicas.',
    'resume.experience': 'Experiência',
    'resume.skills': 'Habilidades',
    'resume.education': 'Educação',
    
    // Footer
    'footer.title': 'Vamos criar',
    'footer.subtitle': 'algo incrível juntos?',
    'footer.description': 'Estou sempre aberto a novos desafios e oportunidades de colaboração.',
    'footer.whatsapp': 'Falar pelo WhatsApp',
    'footer.quickLinks': 'Links Rápidos',
    'footer.social': 'Redes',
    'footer.madeWith': 'Feito com React, Tailwind & Framer Motion',
    
    // WhatsApp Modal
    'wa.title': 'Iniciar conversa',
    'wa.subtitle': 'Preencha os dados abaixo para personalizar sua mensagem e agilizar nosso contato.',
    'wa.nameLabel': 'Seu nome *',
    'wa.namePlaceholder': 'Como prefere ser chamado?',
    'wa.companyLabel': 'Empresa / Projeto (Opcional)',
    'wa.companyPlaceholder': 'Qual o nome do seu projeto?',
    'wa.submitBtn': 'Continuar para o WhatsApp',
    'wa.messageTemplate': 'Olá Davi, acessei seu portfólio e gostaria de conversar sobre um projeto.'
  },
  en: {
    // Navbar
    'nav.projects': 'Work',
    'nav.resume': 'About',
    'nav.contact': 'Contact',
    'nav.letsTalk': 'Let\'s talk',
    
    // Hero
    'hero.badge': 'Available for new projects',
    'hero.title1': 'Developing ',
    'hero.titleHighlight': 'modern',
    'hero.title2': ' and impactful web experiences.',
    'hero.greeting': 'Hi, I am Davi Cortelete',
    'hero.role': 'Frontend Developer',
    'hero.description': 'I create modern, responsive interfaces focused on the best user experience, turning ideas into scalable digital products.',
    'hero.projectsBtn': 'View Work',
    
    // Hero features
    'hero.feat1.title': 'Responsive Design',
    'hero.feat1.desc': 'Interfaces that adapt perfectly to any screen size.',
    'hero.feat2.title': 'Clean Code',
    'hero.feat2.desc': 'Modern, scalable, and easy-to-maintain architecture.',
    'hero.feat3.title': 'High Performance',
    'hero.feat3.desc': 'Maximum optimization for fast loading and fluidity.',
    
    // Projects
    'projects.title': 'Recent',
    'projects.subtitle': 'Work',
    'projects.description': 'A selection of my most recent projects, focusing on usability, performance, and cutting-edge design.',
    'projects.viewProject': 'View Project',
    
    // Digital Card
    'card.title1': 'Exclusive Digital',
    'card.title2': 'Business Cards',
    'card.description': 'Level up your networking. An interactive and customized digital business card is not just a link, it is the gateway to closing more deals, centralizing all your vital information in a design that impresses.',
    'card.benefit1.title': 'Instant Sharing',
    'card.benefit1.desc': 'Send your contact, social networks, and portfolio with just one click. No physical limits.',
    'card.benefit2.title': 'Standout and Innovation',
    'card.benefit2.desc': 'Demonstrate professionalism and technological up-to-dateness at the first contact with your client.',
    'card.benefit3.title': 'More Conversion',
    'card.benefit3.desc': 'Ease your client\'s path to you by integrating WhatsApp, website, and social networks in one place.',
    'card.cta': 'Get My Digital Card',
    
    // Resume
    'resume.title': 'Professional',
    'resume.subtitle': 'Resume',
    'resume.description': 'My professional journey and technical skills.',
    'resume.experience': 'Experience',
    'resume.skills': 'Skills',
    'resume.education': 'Education',
    
    // Footer
    'footer.title': 'Let\'s create',
    'footer.subtitle': 'something amazing?',
    'footer.description': 'I am always open to new challenges and collaboration opportunities.',
    'footer.whatsapp': 'Chat on WhatsApp',
    'footer.quickLinks': 'Quick Links',
    'footer.social': 'Social',
    'footer.madeWith': 'Made with React, Tailwind & Framer Motion',
    
    // WhatsApp Modal
    'wa.title': 'Start a conversation',
    'wa.subtitle': 'Fill in the details below to personalize your message and speed up our contact.',
    'wa.nameLabel': 'Your name *',
    'wa.namePlaceholder': 'How prefer to be called?',
    'wa.companyLabel': 'Company / Project (Optional)',
    'wa.companyPlaceholder': 'What is the name of your project?',
    'wa.submitBtn': 'Continue to WhatsApp',
    'wa.messageTemplate': 'Hi Davi, I visited your portfolio and would like to talk about a project.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'pt' ? 'en' : 'pt'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
