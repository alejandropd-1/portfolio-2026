import { getJobsList, loadJob } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Header from '@/components/Header';
import Link from 'next/link';

// Aquí define todos los componentes de React que quieres poder usar escribiendo en tus archivos .mdx
const MDX_COMPONENTS = {
  h1: (props) => <h1 className="mdx-heading" {...props} />,
  h2: (props) => <h2 className="mdx-heading-2" {...props} />,
  // Ejemplo de componente personalizado que podrías inyectar después:
  // AlertaPersonalizada: (props) => <div className="alerta">{props.children}</div>
};

export async function generateStaticParams() {
  const jobs = await getJobsList();
  
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { frontmatter } = await loadJob(slug);
  
  return {
    title: `${frontmatter.title} | Alejandro Delgado Portfolio`,
    description: `UX/UI Web Designer - ${frontmatter.place}`,
  };
}

export default async function JobPage({ params }) {
  const { slug } = await params;
  const { frontmatter, content } = await loadJob(slug);

  return (
    <main>
      <div className="container">
        <Header />

        <div className="section padding-block-start-10 padding-block-end-10">
          <Link href="/" className="back-link margin-block-end-6" style={{ display: 'inline-block' }}>
            &larr; Volver al Portfolio
          </Link>

          <article className="job-section">
            <h1 className="job-title margin-block-end-4">{frontmatter.title}</h1>
            
            <div className="job-description padding-block-2">
              <p>
                <span className="job-label">Place = </span>
                <span className="job-place">{frontmatter.place}</span>;
              </p>

              <p>
                <span className="job-label">Type = </span>
                {frontmatter.type};
              </p>

              <p>
                <span className="job-label">Period = </span>
                {frontmatter.period};
              </p>

              {frontmatter.tags && (
                <p>
                  <span className="job-label">Tags = </span>
                  <span className="job-tags">{frontmatter.tags.join(", ")}</span>;
                </p>
              )}

              <div className="margin-block-start-6 mdx-prose">
                <MDXRemote source={content} components={MDX_COMPONENTS} />
              </div>
            </div>
          </article>
          
          <div className="margin-block-start-10">
            <Link href="/" className="button">
              ← Volver a todos los proyectos
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
