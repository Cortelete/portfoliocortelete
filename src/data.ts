import { Project, Experience, Skill, Education } from './types';

export const getProjects = (lang: 'pt' | 'en'): Project[] => [
  {
    id: 'vetjaqs',
    title: 'Vetjaqs',
    category: 'E-commerce',
    description: lang === 'pt' ? 'Plataforma de vendas de jaquetas de veteranos para universitários. Interface focada em conversão, apresentação de detalhes do produto e fluxo de checkout otimizado.' : 'Varsity jacket sales platform for college students. Interface focused on conversion, product details presentation, and optimized checkout flow.',
    link: 'https://vetjaqs.vercel.app/',
    images: [
      '/vetjaqs.png'
    ]
  },
  {
    id: 'drdarany',
    title: 'Dr. Darany Advocacia',
    category: lang === 'pt' ? 'Site Institucional' : 'Institutional Site',
    description: lang === 'pt' ? 'Site profissional moderno para um escritório de advocacia. Design sóbrio que transmite confiança, autoridade e facilita o contato inicial do cliente.' : 'Modern professional website for a law firm. Sober design that conveys trust, authority, and facilitates the initial client contact.',
    link: 'https://drdarany.vercel.app/',
    images: [
      '/darany.png'
    ]
  },
  {
    id: 'iabeflow',
    title: 'iabeflow',
    category: 'SaaS / Web App',
    description: lang === 'pt' ? 'Aplicativo de gestão completo para studios de beleza. Sistema intuitivo para agendamentos, controle de caixa e relatórios de desempenho.' : 'Complete management application for beauty studios. Intuitive system for appointments, cash flow control, and performance reports.',
    link: 'https://iabeflow.vercel.app/',
    images: [
      '/iabeflow.png'
    ]
  },
  {
    id: 'elaineneuropsi',
    title: 'Elaine Ferreira Neuropsi',
    category: lang === 'pt' ? 'Site Profissional' : 'Professional Site',
    description: lang === 'pt' ? 'Apresentação profissional e acolhedora para psicóloga. Layout pensado para transmitir tranquilidade e facilitar o agendamento de consultas online.' : 'Professional and welcoming presentation for a psychologist. Layout designed to convey tranquility and facilitate scheduling online appointments.',
    link: 'https://elaineneuropsi.vercel.app/',
    images: [
      '/elaine.png'
    ]
  },
  {
    id: 'nelorebrasil',
    title: 'Nelore Brasil',
    category: lang === 'pt' ? 'Cartão Digital' : 'Digital Card',
    description: lang === 'pt' ? 'Cartão de visitas digital interativo para casa de carnes de alto padrão, integrando redes sociais, localização e contato direto no WhatsApp.' : 'Interactive digital business card for a high-end butcher shop, integrating social media, location, and direct WhatsApp contact.',
    link: 'https://nelorebrasil.vercel.app/',
    images: [
      '/nelore.png'
    ]
  },
  {
    id: 'armasdafe',
    title: 'Armas da Fé',
    category: lang === 'pt' ? 'Cartão Digital' : 'Digital Card',
    description: lang === 'pt' ? 'Cartão de visitas digital elegante para loja de artigos religiosos. Design clean com foco na facilidade de acesso às informações da loja.' : 'Elegant digital business card for a religious goods store. Clean design focusing on easy access to store information.',
    link: 'https://armasdafe.vercel.app/',
    images: [
      '/armasfe.png'
    ]
  },
  {
    id: 'radioclube',
    title: 'Rádio Clube',
    category: lang === 'pt' ? 'Cartão Digital / Streaming' : 'Digital Card / Streaming',
    description: lang === 'pt' ? 'Cartão de visitas digital inovador com integração de transmissão de áudio ao vivo e grade de programação para emissora de rádio.' : 'Innovative digital business card featuring live audio streaming integration and programming schedule for a radio station.',
    link: 'https://radioclube.vercel.app/',
    images: [
      '/radioclube.png'
    ]
  },
  {
    id: 'chaveirokeytech',
    title: 'Keytech Chaveiro',
    category: lang === 'pt' ? 'Cartão Digital' : 'Digital Card',
    description: lang === 'pt' ? 'Solução rápida e prática de contato para serviços de chaveiro 24h. Otimizado para carregamento instantâneo em conexões móveis.' : 'Quick and practical contact solution for 24/7 locksmith services. Optimized for instant loading on mobile connections.',
    link: 'https://chaveirokeytech.vercel.app/',
    images: [
      '/keytech.png'
    ]
  },
  {
    id: 'primeone',
    title: 'Prime One Consulting',
    category: lang === 'pt' ? 'Consultoria / Institucional' : 'Consulting / Institutional',
    description: lang === 'pt' ? 'Site institucional focado na apresentação de serviços de consultoria, com design moderno e profissional.' : 'Institutional website focused on presenting consulting services, with a modern and professional design.',
    link: 'https://primeone-consulting.com',
    images: [
      '/primeone.png'
    ]
  }
];

export const getExperiences = (lang: 'pt' | 'en'): Experience[] => [
  {
    id: 'exp-1',
    role: lang === 'pt' ? 'Fundador e Desenvolvedor' : 'Founder and Developer',
    company: 'InteligenciArte.IA',
    period: lang === 'pt' ? '2023 - Presente' : '2023 - Present',
    description: lang === 'pt' ? 'Desenvolvimento de soluções digitais personalizadas e criativas. Direção técnica e artística de projetos web, landing pages e automações com IA. Coordenação de equipes temporárias e parcerias criativas.' : 'Development of customized and creative digital solutions. Technical and artistic direction of web projects, landing pages, and AI automations. Coordination of temporary teams and creative partnerships.'
  },
  {
    id: 'exp-2',
    role: lang === 'pt' ? 'Programador e Instrutor' : 'Programmer and Instructor',
    company: 'LionsDev',
    period: '2023 - 2024',
    description: lang === 'pt' ? 'Apoio técnico e pedagógico em projetos de programação web. Condução de atividades motivacionais e técnicas com foco em desenvolvimento de equipe. Produção de vídeos, materiais didáticos e eventos internos.' : 'Technical and pedagogical support in web programming projects. Conduction of motivational and technical activities focused on team development. Production of videos, educational materials, and internal events.'
  },
  {
    id: 'exp-3',
    role: lang === 'pt' ? 'Gerente de Relacionamento / Suporte de TI' : 'Relationship Manager / IT Support',
    company: 'Odonto Excellence Franchising',
    period: '2022 - 2025',
    description: lang === 'pt' ? 'Suporte técnico de computadores e sistemas nível 1. Criador de novas ferramentas para facilitar a comunicação do departamento. Gerenciamento de relacionamento interno.' : 'Level 1 technical support for computers and systems. Creator of new tools to facilitate department communication. Internal relationship management.'
  },
  {
    id: 'exp-4',
    role: lang === 'pt' ? 'Estagiário (Direito)' : 'Intern (Law)',
    company: 'Polícia Militar do Paraná (PMPR)',
    period: '2017',
    description: lang === 'pt' ? 'Estágio no setor da Primeira Sessão do Estado Maior, no ambiente do Comando Geral. Duração de 12 meses.' : 'Internship in the First Session of the General Staff sector, within the General Command environment. 12-month duration.'
  }
];

export const getEducation = (lang: 'pt' | 'en'): Education[] => [
  {
    id: 'edu-1',
    course: lang === 'pt' ? 'Engenharia de Software' : 'Software Engineering',
    institution: 'Faculdade Unicesumar',
    period: lang === 'pt' ? 'Concluído (Aguardando colação de grau)' : 'Completed (Awaiting graduation)',
    description: lang === 'pt' ? 'Foco em engenharia de software, desenvolvimento web, estruturas de dados e arquitetura de sistemas.' : 'Focus on software engineering, web development, data structures, and system architecture.'
  },
  {
    id: 'edu-2',
    course: lang === 'pt' ? 'Curso Livre de Liderança e Tecnologia' : 'Leadership and Technology Free Course',
    institution: 'Lions Startups',
    period: lang === 'pt' ? 'Concluído' : 'Completed',
    description: lang === 'pt' ? 'Envolveu também fundamentos e desenvolvimento com programação prática.' : 'Also involved fundamentals and development with practical programming.'
  },
  {
    id: 'edu-3',
    course: lang === 'pt' ? 'Letramento em Inteligência Artificial' : 'Artificial Intelligence Literacy',
    institution: 'Lions Startups',
    period: lang === 'pt' ? 'Concluído' : 'Completed'
  },
  {
    id: 'edu-4',
    course: lang === 'pt' ? 'Ensino Médio' : 'High School',
    institution: 'Colégio da Policia Militar do Paraná',
    period: lang === 'pt' ? 'Conclusão em 12/2014' : 'Completed 12/2014'
  }
];

export const getSkills = (lang: 'pt' | 'en'): Skill[] => [
  { name: lang === 'pt' ? 'Desenvolvimento Web Full Stack' : 'Full Stack Web Development', level: 95 },
  { name: lang === 'pt' ? 'IA Aplicada (Programação & Produtividade)' : 'Applied AI (Programming & Productivity)', level: 90 },
  { name: 'UX/UI Design', level: 85 },
  { name: lang === 'pt' ? 'Liderança Estratégica e Criativa' : 'Strategic and Creative Leadership', level: 90 },
  { name: lang === 'pt' ? 'Comunicação e Oratória' : 'Communication and Public Speaking', level: 95 },
  { name: lang === 'pt' ? 'Inglês Avançado (TOEIC)' : 'Advanced English (TOEIC)', level: 80 },
  { name: 'Google AI Studio', level: 95 },
  { name: 'Vercel', level: 85 },
  { name: 'GitHub', level: 80 }
];
