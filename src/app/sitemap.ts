import { MetadataRoute } from 'next';
import { services } from '@/content/services';
import { industries } from '@/content/industries';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pixorastudios.com';

  const staticRoutes = [
    '',
    '/services',
    '/industries',
    '/portfolio',
    '/about',
    '/contact',
    '/blog',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/services#${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${baseUrl}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Mock blog and portfolio slugs for now
  const blogSlugs = ['modernizing-dental-clinics', 'restaurant-tech-trends-2025'];
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...blogRoutes];
}
