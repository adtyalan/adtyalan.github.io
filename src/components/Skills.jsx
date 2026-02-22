import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Camera, Layout, Database, Smartphone } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors shadow-sm hover:shadow-md"
  >
    <div className="w-12 h-12 rounded-2xl bg-zinc-900 dark:bg-white flex items-center justify-center mb-6 shadow-lg">
      <Icon className="w-6 h-6 text-white dark:text-zinc-900" />
    </div>
    <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span 
          key={index} 
          className="px-3 py-1 text-sm rounded-lg bg-zinc-100 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillGroups = [
    {
      icon: Code2,
      title: "Web Development",
      skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "Vite", "Express"]
    },
    {
      icon: Palette,
      title: "Design",
      skills: ["UI/UX Design", "Graphic Design", "Figma", "Photoshop", "Illustrator"]
    },
    {
      icon: Camera,
      title: "Creative",
      skills: ["Photography", "Photo Retouching", "Color Grading", "Visual Storytelling"]
    },
    {
      icon: Database,
      title: "Backend & Tools",
      skills: ["MySQL", "PostgreSQL", "Git", "Docker", "REST API", "Firebase"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white tracking-tight">
              Toolkit & Expertise.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              I combine technical proficiency with a keen eye for design to build products that are both powerful and beautiful.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="text-8xl font-black opacity-[0.03] dark:opacity-[0.05] select-none pointer-events-none absolute -right-10">
               SKILLS
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard {...group} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
