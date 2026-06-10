import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaLightbulb, FaStar } from 'react-icons/fa';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { projects } from '@/data/projects';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/animations';

const filters = ['All', 'Featured'] as const;
type Filter = (typeof filters)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');

  const visible = projects.filter((project) =>
    filter === 'Featured' ? project.featured : true,
  );

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work & contributions"
        description="A selection of projects drawn from real, production work. Repository and live-demo links are placeholders — update them with your own."
      />

      <div className="mb-10 flex justify-center gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              filter === item
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25'
                : 'border border-slate-200 bg-white/70 text-slate-600 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.id}
              layout
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95 }}
              className="card-surface group flex flex-col overflow-hidden rounded-2xl"
            >
              {/* Gradient header */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500">
                <div className="absolute inset-0 bg-grid-dark bg-[size:24px_24px] opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-5xl font-bold text-white/90">
                    {project.title
                      .split(' ')
                      .map((w) => w[0])
                      .join('')
                      .slice(0, 3)}
                  </span>
                </div>
                {project.featured && (
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-700">
                    <FaStar className="h-3 w-3 text-amber-400" />
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
                  {project.category}
                </p>
                <h3 className="mt-1.5 text-lg font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-3">
                  <p className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400">
                    <FaLightbulb className="h-3.5 w-3.5" />
                    Challenge Solved
                  </p>
                  <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                    {project.challenge}
                  </p>
                </div>

                <ul className="mt-4 space-y-1.5">
                  {project.contributions.slice(0, 3).map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
