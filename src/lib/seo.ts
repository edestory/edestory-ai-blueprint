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

export function generateSoftwareApplicationLD({
  name,
  description,
  price,
  category = 'BusinessApplication'
}: {
  name: string;
  description: string;
  price?: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory: category,
    operatingSystem: 'Web',
    offers: price ? {
      '@type': 'Offer',
      price,
      priceCurrency: 'EUR',
      category: 'SaaS'
    } : {
      '@type': 'Offer',
      category: 'SaaS'
    },
    provider: {
      '@type': 'Organization',
      name: 'Edestory'
    }
  };
}

export function generateFAQLD(faqs: Array<{question: string, answer: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateWebSiteLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Edestory',
    url: 'https://ede-story.com',
    description: 'AI-платформа для автоматизации e-commerce бизнеса',
    inLanguage: ['ru-RU', 'en-US'],
    publisher: {
      '@type': 'Organization',
      name: 'Edestory'
    }
  };
}

// Utility for title length validation
export function validateSEOTitle(title: string): boolean {
  return title.length <= 60;
}

// Utility for description length validation  
export function validateSEODescription(description: string): boolean {
  return description.length <= 160;
}

// Meta tags generation helper
export function meta({ title, description, canonical, robots }: {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
}) {
  const tags = [
    { name: 'title', content: title },
    { name: 'description', content: description }
  ];
  
  if (canonical) {
    tags.push({ name: 'canonical', content: canonical });
  }
  
  if (robots) {
    tags.push({ name: 'robots', content: robots });
  }
  
  return tags;
}

// Open Graph helper
export function openGraph({ 
  title, 
  description, 
  url, 
  images, 
  type = 'website' 
}: {
  title: string;
  description: string;
  url: string;
  images: string[];
  type?: string;
}) {
  return {
    type,
    title,
    description,
    url,
    images: images.map(image => ({
      url: image,
      width: 1200,
      height: 630,
      alt: title
    }))
  };
}

// Twitter Card helper  
export function twitterCard({
  title,
  description,
  image,
  card = 'summary_large_image'
}: {
  title: string;
  description: string; 
  image: string;
  card?: string;
}) {
  return {
    card,
    title,
    description,
    image,
    creator: '@edestory'
  };
}