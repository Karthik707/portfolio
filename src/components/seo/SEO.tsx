import { Helmet } from 'react-helmet-async';
import { personalInfo } from '@/data/personal';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://karthikkulal.dev';
const DEFAULT_TITLE = `${personalInfo.name} | ${personalInfo.role}`;
const DEFAULT_DESCRIPTION = personalInfo.summary;

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = `${SITE_URL}/og-image.svg`,
}: SEOProps) {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
