import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aledesign.dev';
  
  const staticPages = [
    '',
    '/about',
    '/archive',
    '/jobs',
    '/projects',
    '/resume',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const projectSlugs = [
    'around',
    'freelance',
    'inti-marketing',
    'inti-pm',
    'inti-web',
  ];

  const projectPages = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}
