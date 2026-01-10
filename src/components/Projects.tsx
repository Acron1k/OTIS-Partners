import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'all', label: 'Все объекты' },
  { id: 'apartment', label: 'Апартаменты' },
  { id: 'office', label: 'Офисы' },
  { id: 'commercial', label: 'Horeca' },
];

const projects = [
  {
    id: 1,
    title: "Danilovskaya Loft",
    category: "apartment",
    image: "/images/partitions/partition-1.jpg",
    location: "Moscow, Russia",
    year: "2023"
  },
  {
    id: 2,
    title: "Tech Hub Office",
    category: "office",
    image: "/images/partitions/partition-2.jpg",
    location: "Skolkovo",
    year: "2023"
  },
  {
    id: 3,
    title: "Veranda Restaurant",
    category: "commercial",
    image: "/images/partitions/partition-3.jpg",
    location: "Sochi",
    year: "2024"
  },
  {
    id: 4,
    title: "City Studio",
    category: "apartment",
    image: "/images/partitions/partition-2.jpg",
    location: "Moscow City",
    year: "2024"
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 bg-sand-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[.4em] font-bold text-primary mb-4 block">Archive</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-black text-charcoal leading-none">
              Избранные <br /><span className="italic font-light text-stroke text-charcoal">экспозиции.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-8 border-b border-charcoal/10 pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`text-[10px] sm:text-xs uppercase tracking-widest font-bold transition-all relative py-2 px-1 ${activeFilter === cat.id
                    ? 'text-primary'
                    : 'text-charcoal/40 hover:text-charcoal'
                  }`}
              >
                {cat.label}
                {activeFilter === cat.id && (
                  <motion.div layoutId="filterUnderline" className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden mb-6">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    loading="lazy"
                  />
                  <div className="absolute top-6 left-6 bg-sand-50/90 backdrop-blur px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
                    {project.category}
                  </div>
                </div>

                <div className="flex justify-between items-start border-t border-charcoal/5 pt-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-1">{project.title}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">{project.location}</p>
                  </div>
                  <span className="font-serif italic text-charcoal/40">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
