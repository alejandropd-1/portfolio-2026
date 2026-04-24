import { Beaker, Settings, Monitor } from 'lucide-react';
import { SyntaxCard, KeyValue } from '@/components/UI';
import { loadPage } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import ClientAbout from './ClientAbout';

export default async function AboutPage() {
  const page = await loadPage('about');
  if (!page) return null;

  return <ClientAbout frontmatter={page.frontmatter} content={page.content} />;
}
