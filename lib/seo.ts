interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function generateSEO({
  title,
  description,
  keywords,
  image = '/og-default.jpg',
  url = 'https://ede-story.com',
  type = 'website'
}: SEOProps) {
  const fullTitle = `${title} | Edestory - AI E-commerce Platform`;
  
  return {
    title: fullTitle,
    description,
    keywords,
    openGraph: {
      type,
      locale: 'ru_RU',
      url,
      title: fullTitle,
      description,
      siteName: 'Edestory',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@edestory',
    },
  };
}

export function generateBreadcrumbLD(items: Array<{name: string, url: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Edestory',
    url: 'https://ede-story.com',
    logo: 'https://ede-story.com/logo.png',
    description: 'AI-powered e-commerce platform for creating online stores',
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