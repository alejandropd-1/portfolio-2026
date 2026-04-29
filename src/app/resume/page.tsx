import { loadPage, loadJobs } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import ClientResume from './ClientResume';

export default async function ResumePage() {
  const page = await loadPage('resume');
  const jobs = await loadJobs();
  if (!page) return null;

  return (
    <ClientResume frontmatter={page.frontmatter} jobs={jobs}>
      <MDXRemote source={page.content} />
    </ClientResume>
  );
}
