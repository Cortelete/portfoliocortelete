import { motion } from 'motion/react';
import { getExperiences, getSkills, getEducation } from '../data';
import { Briefcase, GraduationCap, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Resume() {
  const { t, language } = useLanguage();

  const experiences = getExperiences(language);
  const skills = getSkills(language);
  const education = getEducation(language);

  return (
    <section id="curriculo" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4"
            >
              {t('resume.title')} <span className="text-gradient">{t('resume.subtitle')}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg max-w-xl"
            >
              {t('resume.description')}
            </motion.p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-3 mb-8 text-zinc-100">
              <Briefcase className="text-purple-400" />
              <h3 className="text-2xl font-display font-bold">{t('resume.experience')}</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#18181b] z-10 ml-0 md:mx-auto">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-950 border border-zinc-800 p-6 rounded-2xl hover:border-zinc-700 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h4 className="font-bold text-lg text-zinc-100">{exp.role}</h4>
                      <span className="text-xs font-mono px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full whitespace-nowrap">{exp.period}</span>
                    </div>
                    <div className="text-purple-400 text-sm font-medium mb-4">{exp.company}</div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills & Education */}
          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-8 text-zinc-100">
                <Code2Icon className="text-blue-400" />
                <h3 className="text-2xl font-display font-bold">{t('resume.skills')}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-zinc-950 border border-zinc-800 p-5 rounded-2xl"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-zinc-200">{skill.name}</span>
                      <span className="text-zinc-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8 text-zinc-100">
                <GraduationCap className="text-pink-400" />
                <h3 className="text-2xl font-display font-bold">Educação</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h4 className="font-bold text-lg text-zinc-100">{edu.course}</h4>
                      <span className="text-xs font-mono px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full whitespace-nowrap">{edu.period}</span>
                    </div>
                    <div className="text-pink-400 text-sm font-medium mb-4">{edu.institution}</div>
                    {edu.description && (
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper icon component
function Code2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
