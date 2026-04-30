import { Feed } from 'feed';
import { NextResponse } from 'next/server';
import { loadProjects } from '@/helpers/file-helpers';

export async function GET() {
  const projects = await loadProjects();
  const siteUrl = process.env.APP_URL || 'https://alejandro.design';

  const feed = new Feed({
    title: 'AleDesign | Alejandro Delgado',
    description: 'UI/UX Architect Portfolio and Design System Showcase',
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Alejandro Delgado`,
    author: {
      name: 'Alejandro Delgado',
      link: siteUrl,
    },
  });

  projects.forEach((project: any) => {
    feed.addItem({
      title: project.title,
      id: `${siteUrl}/projects/${project.slug}`,
      link: `${siteUrl}/projects/${project.slug}`,
      description: project.description,
      content: project.description,
      author: [
        {
          name: 'Alejandro Delgado',
          link: siteUrl,
        },
      ],
      date: project.date ? new Date(project.date) : new Date(),
      image: project.image,
    });
  });

  // Return XML with correct Content-Type
  return new NextResponse(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
