import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { education } from '@/data/education';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/animations';

export function Education() {
  return (
    <Section id="education" className="bg-white/40 dark:bg-white/[0.015]">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation"
        description="The degree that laid the groundwork for my engineering career."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-3xl space-y-6"
      >
        {education.map((item) => (
          <motion.article
            key={item.id}
            variants={fadeUp}
            className="card-surface flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-start"
          >
            <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-glow">
              <FaGraduationCap className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {item.degree}
              </h3>
              <p className="mt-1 font-medium text-brand-600 dark:text-brand-300">
                {item.institution}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <FaCalendarAlt className="h-3.5 w-3.5" />
                  {item.start} – {item.end}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FaMapMarkerAlt className="h-3.5 w-3.5" />
                  {item.location}
                </span>
              </div>
              {item.details && (
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.details}
                </p>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
