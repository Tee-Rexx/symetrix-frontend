import { NextResponse } from 'next/server';
import { Builder } from 'xml2js';

export async function GET() {
  const currentDate = new Date().toISOString();

  // Define the pages with the correct URLs
  const pages = [
    { loc: 'https://naxiums.com/', lastmod: currentDate, priority: 1.0 },
    { loc: 'https://naxiums.com/about-us', lastmod: currentDate, priority: 0.8 },
    { loc: 'https://naxiums.com/our-services', lastmod: currentDate, priority: 0.8 },
    { loc: 'https://naxiums.com/portfolio', lastmod: currentDate, priority: 0.7 },
    { loc: 'https://naxiums.com/contact-us', lastmod: currentDate, priority: 0.6 },
    { loc: 'https://naxiums.com/blogs', lastmod: currentDate, priority: 0.5 },
    { loc: 'https://naxiums.com/faq', lastmod: currentDate, priority: 0.5 },
    { loc: 'https://naxiums.com/blogs/cybersecurity-in-the-remote-work-era', lastmod: currentDate, priority: 0.5 },
    { loc: 'https://naxiums.com/blogs/data-governance', lastmod: currentDate, priority: 0.5 },
    { loc: 'https://naxiums.com/blogs/demystifying-AI', lastmod: currentDate, priority: 0.5 },
    { loc: 'https://naxiums.com/blogs/digital-transformation', lastmod: currentDate, priority: 0.5 },
    { loc: 'https://naxiums.com/blogs/power-of-devops', lastmod: currentDate, priority: 0.5 },
    { loc: 'https://naxiums.com/blogs/future-of-work', lastmod: currentDate, priority: 0.5 },
    { loc: 'https://naxiums.com/blogs/navigating-the-cloud', lastmod: currentDate, priority: 0.5 },
    { loc: 'https://naxiums.com/blogs/exploring-edge-computing', lastmod: currentDate, priority: 0.5 },
    { loc: 'https://naxiums.com/blogs/blockchain-beyond-bitcoin', lastmod: currentDate, priority: 0.5 },
    { loc: 'https://naxiums.com/video-page', lastmod: currentDate, priority: 0.7, video: true },
    // Add any other pages that should be included in the sitemap here
  ];

  // Convert the pages to a format that xml2js can work with
  const urlset = {
    urlset: {
      $: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9', 'xmlns:video': 'http://www.google.com/schemas/sitemap-video/1.1' },
      url: pages.map(page => {
        const urlEntry:any = {
          loc: page.loc,
          lastmod: page.lastmod,
          priority: page.priority,
        };

        // If this is a video page, add the video details
        if (page.video) {
          urlEntry['video:video'] = [
            {
              'video:title': 'Your Video Title', // Replace with your video title
              'video:description': 'Description of the video', // Replace with a description
              'video:thumbnail_loc': 'https://naxiums.com/images/video-thumbnail.jpg', // Replace with your thumbnail URL
              'video:content_loc': 'https://naxiums.com/gif/hero.mp4', // Replace with the actual URL of the video
              'video:duration': 'PT1M30S', // Example duration (adjust to match your video)
              'video:publication_date': currentDate, // Set the actual upload date
            }
          ];
        }

        return urlEntry;
      }),
    },
  };

  // Create an instance of the Builder
  const builder = new Builder();
  const sitemapXML = builder.buildObject(urlset);

  // Return the generated XML
  return new NextResponse(sitemapXML, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
