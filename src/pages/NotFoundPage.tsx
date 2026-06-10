import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';
import { SEO } from '@/components/seo/SEO';
import { ButtonLink } from '@/components/ui/Button';

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found | Karthik N Kulal" path="/404" />
      <section className="flex min-h-screen items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-mono text-7xl font-bold text-gradient sm:text-9xl">404</p>
          <h1 className="mt-6 text-2xl font-bold sm:text-3xl">Page not found</h1>
          <p className="mx-auto mt-3 max-w-md text-slate-600 dark:text-slate-400">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/">
              <ButtonLink href="/" size="lg" onClick={(e) => e.preventDefault()}>
                <FaHome className="h-4 w-4" />
                Back to Home
              </ButtonLink>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
