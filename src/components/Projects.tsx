import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'all', label: 'Все проекты' },
  { id: 'apartment', label: 'Квартиры' },
  { id: 'office', label: 'Офисы' },
  { id: 'commercial', label: 'Коммерция' },
];

const projects = [
  {
    id: 1,
    title: "Лофт на Даниловской",
    category: "apartment",
    image: "/images/partitions/partition-1.jpg",
    location: "Москва",
    year: "2023"
  },
  {
    id: 2,
    title: "Офис в Сколково",
    category: "office",
    image: "/images/partitions/partition-4.jpg",
    location: "Инноцентр",
    year: "2023"
  },
  {
    id: 3,
    title: "Ресторан Veranda",
    category: "commercial",
    image: "/images/partitions/partition-3.jpg",
    location: "Сочи",
    year: "2024"
  },
  {
    id: 4,
    title: "Апартаменты в Сити",
    category: "apartment",
    image: "/images/partitions/partition-5.jpg",
    location: "Москва Сити",
    year: "2024"
  },
  {
    id: 5,
    title: "Шоурум мебели",
    category: "commercial",
    image: "/images/partitions/partition-6.jpg",
    location: "Москва",
    year: "2024"
  },
  {
    id: 6,
    title: "Коворкинг Level",
    category: "office",
    image: "/images/partitions/partition-7.jpg",
    location: "Санкт-Петербург",
    year: "2024"
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-sand-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-primary mb-3 block">Портфолио</span>
            <h2 className="text-4xl md:text-6xl font-black text-charcoal leading-tight">
              Реализованные <br /><span className="text-primary italic">проекты.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-6 border-b border-charcoal/5 pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`text-xs uppercase tracking-widest font-bold transition-all relative pb-2 ${activeFilter === cat.id
                    ? 'text-primary'
                    : 'text-charcoal/30 hover:text-charcoal'
                  }`}
              >
                {cat.label}
                {activeFilter === cat.id && (
                  <motion.div layoutId="filterUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-sand-50/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {categories.find(c => c.id === project.category)?.label}
                  </div>
                </div>

                <div className="flex justify-between items-start pt-2">
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1 uppercase tracking-tight">{project.title}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">{project.location}</p>
                  </div>
                  <span className="font-bold text-primary/40 text-sm italic">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
