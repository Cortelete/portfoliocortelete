import { motion } from 'motion/react';
import ProjectCard from './ProjectCard';
import { getProjects } from '../data';
import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Projects() {
  const { t, language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const exactScrollX = useRef<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const projects = getProjects(language);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    
    if (scrollRef.current) {
      exactScrollX.current = scrollRef.current.scrollLeft;
    }

    const scroll = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      if (scrollRef.current && !isMouseDown) {
        // Adjust scroll speed by multiplying deltaTime
        exactScrollX.current += deltaTime * 0.05; 
        
        // Loop back smoothly if we reach the end of the duplicated set
        const { scrollWidth } = scrollRef.current;
        if (exactScrollX.current >= scrollWidth / 2) {
           exactScrollX.current -= scrollWidth / 2;
        } else if (exactScrollX.current <= 0) {
           exactScrollX.current += scrollWidth / 2;
        }
        
        scrollRef.current.scrollLeft = exactScrollX.current;
      } else if (scrollRef.current && isMouseDown) {
        exactScrollX.current = scrollRef.current.scrollLeft;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isMouseDown]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    // Delay resetting isDragging so onClick works normally if not dragging
    setTimeout(() => setIsDragging(false), 50);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; 
    
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
    
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section id="projetos" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4"
            >
              {t('projects.title')} <span className="text-gradient">{t('projects.subtitle')}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg"
            >
              {t('projects.description')}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden flex w-full relative">
        <div 
          ref={scrollRef}
          className={`flex overflow-x-auto w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsMouseDown(true)}
          onTouchEnd={() => setIsMouseDown(false)}
          onClickCapture={(e) => {
            if (isDragging) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        >
          <div className="flex gap-6 w-max px-6 pb-8">
            {/* We duplicate the array 4 times to ensure seamless infinite scrolling */}
            {[...projects, ...projects, ...projects, ...projects].map((project, index) => (
              <div key={`${project.id}-${index}`} className="w-[300px] md:w-[400px] xl:w-[450px] shrink-0">
                <ProjectCard project={project} index={index % projects.length} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
