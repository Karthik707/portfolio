import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { certifications } from '@/data/certifications';
import { fadeUp, staggerContainer, viewportOnce } from '@/utils/animations';

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Continuous learning, certified"
        description="Credentials that reflect my commitment to staying current with modern web technologies."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2"
      >
        {certifications.map((cert) => (
          <motion.article
            key={cert.id}
            variants={fadeUp}
            className="card-surface group flex items-start gap-4 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-glow"
          >
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white dark:text-brand-300">
              <FaCertificate className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h3 className="font-semibold leading-snug text-slate-900 dark:text-white">
                {cert.name}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-brand-600 dark:text-brand-300">
                {cert.date}
              </p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-brand-600 dark:hover:text-brand-300"
                >
                  View credential
                  <FaExternalLinkAlt className="h-2.5 w-2.5" />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
