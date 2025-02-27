import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

export default function SEO({ 
  title, 
  description, 
  image = 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80',
  type = 'website'
}: SEOProps) {
  const siteTitle = 'Pixel Print Studios';
  const fullTitle = `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
}