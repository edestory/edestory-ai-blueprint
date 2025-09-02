import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: object;
}

export function SEOHead({
  title,
  description,
  keywords,
  image = '/og-default.jpg',
  url = 'https://ede-story.com',
  type = 'website',
  structuredData
}: SEOProps) {
  const fullTitle = `${title} | Edestory - AI E-commerce Platform`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Edestory" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Edestory" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@edestory" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Hreflang for multi-language */}
      <link rel="alternate" hrefLang="ru" href={url} />
      <link rel="alternate" hrefLang="en" href={url.replace('ede-story.com', 'ede-story.com/en')} />
      <link rel="alternate" hrefLang="x-default" href={url} />
    </Helmet>
  );
}

export function generateOrganizationLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Edestory',
    url: 'https://ede-story.com',
    logo: 'https://ede-story.com/logo.png',
    description: 'AI-powered SaaS platform for direct sales, freeing manufacturers from marketplace dependency',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marbella',
      addressCountry: 'Spain',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34-XXX-XXX-XXX',
      contactType: 'customer service',
    },
    sameAs: [
      'https://twitter.com/edestory',
      'https://linkedin.com/company/edestory',
    ],
  };
}

export function generateSoftwareApplicationLD(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      priceValidUntil: '2025-12-31',
    },
    provider: {
      '@type': 'Organization',
      name: 'Edestory',
      url: 'https://ede-story.com',
    },
  };
}

export function generateFAQPageLD(faqs: Array<{question: string, answer: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}