// src/pages/sitemap.xml.ts
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { CATEGORY_MAP } from '../utils/helpers';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ? site.toString().replace(/\/$/, '') : 'https://affanlabib.me';
  const posts = await getCollection('posts');

  const staticUrls = [
    { loc: `${baseUrl}/`, changefreq: 'daily', priority: '1.0' },
    { loc: `${baseUrl}/about`, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/search`, changefreq: 'weekly', priority: '0.6' },
  ];

  const categoryUrls = Object.keys(CATEGORY_MAP).map((catKey) => ({
    loc: `${baseUrl}/category/${catKey}`,
    changefreq: 'weekly',
    priority: '0.8',
  }));

  const postUrls = posts.map((post) => ({
    loc: `${baseUrl}/${post.slug}`,
    lastmod: new Date(post.data.publishedAt).toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.9',
  }));

  const allUrls = [...staticUrls, ...categoryUrls, ...postUrls];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
