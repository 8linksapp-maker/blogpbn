import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../data/posts';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  slug?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
  keywords?: string[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  image,
  slug = '',
  type = 'website',
  publishedTime,
  author = siteConfig.author.name,
  keywords = []
}) => {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const metaDescription = description || siteConfig.description;
  const metaUrl = `${siteConfig.url}${slug}`;
  const metaImage = image ? (image.startsWith('http') ? image : `${siteConfig.url}${image}`) : `${siteConfig.url}/og-image.jpg`;

  const defaultKeywords = [
    'Cardiologia',
    'Saúde do Coração',
    'Dr. João',
    'Hipertensão',
    'Prevenção Cardiovascular',
    'Bem-estar'
  ];
  
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])].join(', ');

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={metaUrl} />
      <meta name="theme-color" content="#00802d" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metaUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Article Specific Tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}
    </Helmet>
  );
};