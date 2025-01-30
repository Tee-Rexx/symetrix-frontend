import { NextResponse } from 'next/server';
import { SitemapStream, streamToPromise } from 'sitemap';

export async function GET() {
  const sitemap = new SitemapStream({ hostname: 'https://naxiums.com' });

  // Get current date in ISO 8601 format
  const currentDate = new Date().toISOString();

  const pages = [
    { loc: '/', lastmod: currentDate, priority: 1.0 },
    { loc: '/about-us', lastmod: currentDate, priority: 0.8 },
    { loc: '/our-services', lastmod: currentDate, priority: 0.8 },
    { loc: '/portfolio', lastmod: currentDate, priority: 0.7 },
    { loc: '/contact-us', lastmod: currentDate, priority: 0.6 },
    { loc: '/blogs', lastmod: currentDate, priority: 0.5 },
    { loc: '/faq', lastmod: currentDate, priority: 0.5 },

    // Blog Pages
    { loc: '/blogs/cybersecurity-in-the-remote-work-era', lastmod: currentDate, priority: 0.5 },
    { loc: '/blogs/data-governance', lastmod: currentDate, priority: 0.5 },
    { loc: '/blogs/demystifying-AI', lastmod: currentDate, priority: 0.5 },
    { loc: '/blogs/digital-transformation', lastmod: currentDate, priority: 0.5 },
    { loc: '/blogs/power-of-devops', lastmod: currentDate, priority: 0.5 },
    { loc: '/blogs/future-of-work', lastmod: currentDate, priority: 0.5 },
    { loc: '/blogs/navigating-the-cloud', lastmod: currentDate, priority: 0.5 },
    { loc: '/blogs/exploring-edge-computing', lastmod: currentDate, priority: 0.5 },
    { loc: '/blogs/blockchain-beyond-bitcoin', lastmod: currentDate, priority: 0.5 },
  ];

  // Add each page to the sitemap
  pages.forEach(page => sitemap.write(page));

  sitemap.end();

  const sitemapXML = await streamToPromise(sitemap);

  return new NextResponse(sitemapXML, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
