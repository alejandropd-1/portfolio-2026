import { loadPage } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

export async function generateMetadata() {
  const { frontmatter } = await loadPage('archive');
  return {
    title: `${frontmatter.title} | AleDesign`,
    description: frontmatter.subtitle,
  };
}

export default async function ArchivePage() {
  const { frontmatter, content } = await loadPage('archive');

  return (
    <main className="main-layout container">
      <article className="archive-page" data-type="wide">
        <header className="archive-page__header">
          <div className="hero__path">~/root/archive</div>
          <h1 className="hero__title">Query <span className="accent">History.</span></h1>
          <p className="hero__description">
            A chronological database of previous missions, experiments, and visual artifacts.
          </p>
        </header>

        <div className="archive-page__content terminal-window">
          <div className="terminal-header">
            <span className="terminal-label">query_db.sh --all</span>
            <div className="terminal-controls">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="terminal-body mdx-table-wrapper">
            <MDXRemote
              source={content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>
        </div>
      </article>
    </main>
  );
}
