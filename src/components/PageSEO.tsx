import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSEO, generateOrganizationLD, generateWebSiteLD, generateBreadcrumbLD } from '@/lib/seo';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  breadcrumbs?: Array<{name: string, url: string}>;
  structuredData?: object[];
  noindex?: boolean;
}

const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  keywords,
  image = '/og-default.jpg',
  url = 'https://ede-story.com',
  type = 'website',
  breadcrumbs,
  structuredData = [],
  noindex = false
}) => {
  const seoData = generateSEO({ title, description, keywords, image, url, type });
  
  const allStructuredData = [
    generateOrganizationLD(),
    generateWebSiteLD(),
    ...(breadcrumbs ? [generateBreadcrumbLD(breadcrumbs)] : []),
    ...structuredData
  ];

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}
      
      {/* Open Graph */}
      <meta property="og:type" content={seoData.openGraph.type} />
      <meta property="og:title" content={seoData.openGraph.title} />
      <meta property="og:description" content={seoData.openGraph.description} />
      <meta property="og:url" content={seoData.openGraph.url} />
      <meta property="og:site_name" content={seoData.openGraph.siteName} />
      <meta property="og:locale" content={seoData.openGraph.locale} />
      <meta property="og:image" content={seoData.openGraph.images[0].url} />
      <meta property="og:image:width" content={seoData.openGraph.images[0].width.toString()} />
      <meta property="og:image:height" content={seoData.openGraph.images[0].height.toString()} />
      <meta property="og:image:alt" content={seoData.openGraph.images[0].alt} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={seoData.twitter.card} />
      <meta name="twitter:title" content={seoData.twitter.title} />
      <meta name="twitter:description" content={seoData.twitter.description} />
      <meta name="twitter:image" content={seoData.twitter.images[0]} />
      <meta name="twitter:creator" content={seoData.twitter.creator} />
      
      {/* Additional meta */}
      <meta name="author" content="Edestory" />
      <meta name="language" content="ru" />
      
      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script 
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </Helmet>
  );
};

export default PageSEO;