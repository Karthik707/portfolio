import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaCalendarAlt } from 'react-icons/fa';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/data/experience';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/animations';

export function Experience() {
  return (
    <Section id="experience" className="bg-white/40 dark:bg-white/[0.015]">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've made an impact"
        description="A timeline of roles, responsibilities and achievements across my engineering career."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto max-w-3xl"
      >
        {/* Vertical line */}
        <span
          aria-hidden="true"
          className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-brand-500 via-brand-400/50 to-transparent sm:left-5"
        />

        <div className="space-y-10">
          {experiences.map((exp) => (
            <motion.article key={exp.id} variants={fadeUp} className="relative pl-12 sm:pl-16">
              {/* Node */}
              <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-brand-500/40 bg-white text-brand-600 shadow-sm sm:h-10 sm:w-10 dark:bg-[#0b1120] dark:text-brand-300">
                <FaBriefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </span>

              <div className="card-surface rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="mt-1 flex items-center gap-2 text-sm font-medium text-brand-600 dark:text-brand-300">
                      <FaBuilding className="h-3.5 w-3.5" />
                      {exp.company}
                      <span className="text-slate-400">&middot; {exp.location}</span>
                    </p>
                  </div>
                  <Badge variant={exp.current ? 'accent' : 'default'}>
                    <FaCalendarAlt className="mr-1.5 h-3 w-3" />
                    {exp.start} – {exp.end}
                  </Badge>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {exp.summary}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="brand">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
