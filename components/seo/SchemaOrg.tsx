import React from 'react';
import { Helmet } from 'react-helmet-async';

interface WebsiteSchemaProps {
  name: string;
  url: string;
  description: string;
}

export const WebsiteSchema: React.FC<WebsiteSchemaProps> = ({ name, url, description }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  authorName: string;
  url: string;
  publisherName: string;
  publisherLogo?: string;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({ 
  title, 
  description, 
  image, 
  datePublished, 
  authorName,
  url,
  publisherName,
  publisherLogo
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: publisherLogo ? {
        '@type': 'ImageObject',
        url: publisherLogo
      } : undefined
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface LocalBusinessSchemaProps {
  name: string;
  image: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
}

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name,
  image,
  telephone,
  address,
  geo
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name,
    image,
    telephone,
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...geo
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        opens: "09:00",
        closes: "18:00"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};