import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo, socialLinks } from '@/data/personal';
import { ButtonLink } from '@/components/ui/Button';
import { staggerContainer, fadeUp } from '@/utils/animations';

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-light bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] dark:bg-grid-dark" />
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-500/20" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
      </div>

      <div className="container-px grid w-full items-center gap-12 lg:grid-cols-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7"
        >
          {personalInfo.availableForWork && (
            <motion.div variants={fadeUp} className="mb-6 inline-flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-sm font-medium text-accent-600 dark:text-accent-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
                </span>
                Available for new opportunities
              </span>
            </motion.div>
          )}

          <motion.p
            variants={fadeUp}
            className="mb-3 font-mono text-sm font-medium text-brand-600 dark:text-brand-300"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-2xl font-semibold text-gradient sm:text-3xl lg:text-4xl"
          >
            {personalInfo.role}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
          >
            <FaMapMarkerAlt className="h-4 w-4 text-brand-500" />
            {personalInfo.location}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={personalInfo.resumeUrl} download size="lg" aria-label="Download résumé">
              <FaDownload className="h-4 w-4" />
              Download Resume
            </ButtonLink>
            <ButtonLink
              href="#contact"
              variant="outline"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                scrollToId('contact');
              }}
            >
              <FaEnvelope className="h-4 w-4" />
              Contact Me
            </ButtonLink>
            <ButtonLink
              href="#projects"
              variant="ghost"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                scrollToId('projects');
              }}
            >
              View Projects
              <FaArrowRight className="h-4 w-4" />
            </ButtonLink>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
            {socialLinks.slice(0, 3).map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-300"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual / stats card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/20 to-accent-500/20 blur-2xl" />
            <div className="card-surface overflow-hidden rounded-3xl p-1.5">
              <div className="rounded-[1.35rem] bg-slate-900 p-5 font-mono text-sm text-slate-300 shadow-inner">
                <div className="mb-4 flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed">
                  <span className="text-pink-400">const</span>{' '}
                  <span className="text-brand-300">engineer</span> = {'{'}
                  {'\n'}  name: <span className="text-accent-400">&apos;Karthik&apos;</span>,
                  {'\n'}  stack: [<span className="text-accent-400">&apos;.NET&apos;</span>,{' '}
                  <span className="text-accent-400">&apos;React&apos;</span>],
                  {'\n'}  focus: <span className="text-accent-400">&apos;Scalable APIs&apos;</span>,
                  {'\n'}  shipsProduction: <span className="text-pink-400">true</span>,
                  {'\n'}
                  {'}'};
                </pre>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { value: personalInfo.yearsOfExperience, label: 'Years Exp.' },
                { value: '15+', label: 'Technologies' },
                { value: '100%', label: 'Ownership' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card-surface rounded-2xl p-4 text-center"
                >
                  <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
