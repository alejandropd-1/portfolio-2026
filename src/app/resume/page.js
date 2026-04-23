import { loadPage } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

export async function generateMetadata() {
  const { frontmatter } = await loadPage('resume');
  return {
    title: `${frontmatter.title} | AleDesign`,
    description: frontmatter.subtitle,
  };
}

export default async function ResumePage() {
  const { frontmatter, content } = await loadPage('resume');

  return (
    <main>
      <article className="page-content container">
        <header className="page-header">
          <h1 className="page-title">{frontmatter.title}</h1>
          {frontmatter.subtitle && (
            <p className="page-subtitle">{frontmatter.subtitle}</p>
          )}
        </header>

        <div className="mdx-content">
          <MDXRemote 
            source={content} 
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>
      </article>
    </main>
  );
}
