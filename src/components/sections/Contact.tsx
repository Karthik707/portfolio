import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { personalInfo, socialLinks } from '@/data/personal';
import { slideInLeft, slideInRight, viewportOnce } from '@/utils/animations';
import { cn } from '@/utils/cn';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const initialState: FormState = { name: '', email: '', subject: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  else if (values.name.trim().length < 2) errors.name = 'Name is too short.';

  if (!values.email.trim()) errors.email = 'Please enter your email.';
  else if (!EMAIL_RE.test(values.email)) errors.email = 'Please enter a valid email address.';

  if (!values.subject.trim()) errors.subject = 'Please add a subject.';

  if (!values.message.trim()) errors.message = 'Please write a message.';
  else if (values.message.trim().length < 10)
    errors.message = 'Message should be at least 10 characters.';

  return errors;
}

const contactDetails = [
  { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FaPhoneAlt, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
  { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location },
];

export function Contact() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (field: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors(validate({ ...values, [field]: value }));
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');

    // If no Formspree ID is configured, gracefully fall back to a mailto link.
    if (!FORMSPREE_ID || FORMSPREE_ID === 'your_formspree_id') {
      const body = encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        values.subject,
      )}&body=${body}`;
      setStatus('success');
      setValues(initialState);
      setTouched({});
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setValues(initialState);
        setTouched({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    cn(
      'w-full rounded-xl border bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:bg-white/5 dark:text-slate-100',
      errors[field] && touched[field]
        ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20'
        : 'border-slate-200 dark:border-white/10',
    );

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something great together"
        description="Have a role, a project or just want to connect? Send a message — I'll get back to you soon."
      />

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Contact info */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-4 lg:col-span-5"
        >
          {contactDetails.map((detail) => {
            const content = (
              <div className="card-surface flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-glow">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
                  <detail.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {detail.label}
                  </p>
                  <p className="truncate font-medium text-slate-800 dark:text-slate-100">
                    {detail.value}
                  </p>
                </div>
              </div>
            );
            return detail.href ? (
              <a key={detail.label} href={detail.href} className="block">
                {content}
              </a>
            ) : (
              <div key={detail.label}>{content}</div>
            );
          })}

          <div className="card-surface rounded-2xl p-6">
            <p className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
              Find me online
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
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
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            noValidate
            className="card-surface space-y-5 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  className={inputClass('name')}
                  placeholder="Jane Doe"
                  aria-invalid={Boolean(errors.name && touched.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && touched.name && (
                  <p id="name-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                    <FaExclamationCircle className="h-3 w-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className={inputClass('email')}
                  placeholder="jane@example.com"
                  aria-invalid={Boolean(errors.email && touched.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && touched.email && (
                  <p id="email-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                    <FaExclamationCircle className="h-3 w-3" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                onBlur={() => handleBlur('subject')}
                className={inputClass('subject')}
                placeholder="Project inquiry"
                aria-invalid={Boolean(errors.subject && touched.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject && touched.subject && (
                <p id="subject-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                  <FaExclamationCircle className="h-3 w-3" />
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={(e) => handleChange('message', e.target.value)}
                onBlur={() => handleBlur('message')}
                className={cn(inputClass('message'), 'resize-y')}
                placeholder="Tell me a little about your project or opportunity..."
                aria-invalid={Boolean(errors.message && touched.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && touched.message && (
                <p id="message-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                  <FaExclamationCircle className="h-3 w-3" />
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" size="lg" disabled={status === 'submitting'}>
                {status === 'submitting' ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-sm font-medium text-accent-600 dark:text-accent-400"
                >
                  <FaCheckCircle className="h-4 w-4" />
                  Thanks! Your message has been sent.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-sm font-medium text-red-500"
                >
                  <FaExclamationCircle className="h-4 w-4" />
                  Something went wrong. Please try again or email me directly.
                </motion.p>
              )}
            </div>

          </form>
        </motion.div>
      </div>
    </Section>
  );
}
