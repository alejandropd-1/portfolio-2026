import { loadPage } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

export async function generateMetadata() {
  const { frontmatter } = await loadPage('about');
  return {
    title: `${frontmatter.title} | AleDesign`,
    description: frontmatter.subtitle,
  };
}

export default async function AboutPage() {
  const { frontmatter, content } = await loadPage('about');

  return (
    <main className="main-layout container">
      <article className="about-page">
        <header className="about-page__header">
          <div className="hero__path">~/root/about</div>
          <h1 className="hero__title">Architecting <span className="accent">Souls.</span></h1>
          <p className="hero__description">
            Unveiling the philosophy behind the code and the vision behind the design.
          </p>
        </header>

        <div className="about-page__content grid-2-cols">
          <div className="about-page__text">
            <MDXRemote
              source={content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>
          <div className="about-page__visual">
             {/* Aquí iría una imagen generada o el placeholder estilizado */}
             <div className="visual-placeholder ghost-border">
                <span className="terminal-text">loading_vision.bin...</span>
             </div>
          </div>
        </div>
      </article>
    </main>
  );
}
