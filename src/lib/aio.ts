// AIO (AI-assisted content optimization) utilities

export interface FAQItem {
  question: string;
  answer: string;
  keywords?: string[];
  category?: string;
}

export interface AIOptimizedContent {
  title: string;
  description: string;
  content: string;
  keywords: string[];
  readingTime?: number;
  seoScore?: number;
}

/**
 * Prepare FAQ data for JSON-LD structured data
 */
export function prepareFAQForLD(faqs: FAQItem[]) {
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

/**
 * Generate Q&A structured data for AI optimization
 */
export function generateQAStructuredData(
  questions: Array<{ question: string; answer: string; category?: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: questions.map(qa => ({
      '@type': 'Question',
      name: qa.question,
      answerCount: 1,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer
      },
      ...(qa.category && { about: qa.category })
    }))
  };
}

/**
 * Calculate estimated reading time
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200; // Average reading speed
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Extract keywords from text content for SEO
 */
export function extractKeywords(text: string, maxKeywords: number = 10): string[] {
  // Simple keyword extraction - in production, use more sophisticated NLP
  const stopWords = new Set([
    'и', 'в', 'на', 'с', 'по', 'для', 'от', 'до', 'или', 'как', 'что', 'все', 'это', 'быть'
  ]);
  
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word));
  
  const frequency: Record<string, number> = {};
  
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });
  
  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

/**
 * Optimize content for AI search and discovery
 */
export function optimizeForAI(content: AIOptimizedContent): AIOptimizedContent {
  const keywords = extractKeywords(content.content, 5);
  const readingTime = calculateReadingTime(content.content);
  
  return {
    ...content,
    keywords: [...content.keywords, ...keywords].slice(0, 10),
    readingTime,
    seoScore: calculateSEOScore(content)
  };
}

/**
 * Basic SEO score calculation
 */
function calculateSEOScore(content: AIOptimizedContent): number {
  let score = 0;
  
  // Title length (optimal: 30-60 characters)
  if (content.title.length >= 30 && content.title.length <= 60) score += 20;
  
  // Description length (optimal: 120-160 characters) 
  if (content.description.length >= 120 && content.description.length <= 160) score += 20;
  
  // Keywords presence
  if (content.keywords.length >= 3) score += 20;
  
  // Content length (optimal: 300+ words)
  const wordCount = content.content.split(/\s+/).length;
  if (wordCount >= 300) score += 20;
  
  // Content structure (headings, paragraphs)
  if (content.content.includes('<h2>') || content.content.includes('##')) score += 10;
  if (content.content.includes('<h3>') || content.content.includes('###')) score += 10;
  
  return Math.min(score, 100);
}

/**
 * Generate breadcrumb data for better navigation
 */
export function generateBreadcrumbs(path: string): Array<{name: string, url: string}> {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Главная', url: '/' }];
  
  const pathMap: Record<string, string> = {
    'product': 'Продукт',
    'pricing': 'Цены',
    'templates': 'Шаблоны',
    'solutions': 'Решения',
    'resources': 'Ресурсы',
    'about': 'О компании',
    'contact': 'Контакты',
    'legal': 'Правовая информация'
  };
  
  let currentPath = '';
  
  segments.forEach(segment => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      name: pathMap[segment] || segment,
      url: currentPath
    });
  });
  
  return breadcrumbs;
}