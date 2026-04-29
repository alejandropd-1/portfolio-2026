import { ChevronLeft, Globe, Database, ArrowRight, Code } from 'lucide-react';
import { Tag } from '@/components/UI';
import Image from 'next/image';
import Link from 'next/link';
import { loadJob, loadJobs } from '@/helpers/file-helpers';
import { formatTitle } from '@/helpers/text-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import styles from '@/styles/pages/_project-detail.module.scss';

export async function generateStaticParams() {
  const jobs = await loadJobs();
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await loadJob(slug);

  if (!project) {
    return notFound();
  }

  const { frontmatter, content } = project;

  return (
    <div className={styles.projectDetail}>
      <div className="page-container">
        {/* Back Link */}
        <Link href="/" className={styles.projectDetail__backLink}>
          {"←"} cd .. <span>/</span> <span className={styles.projectDetail__backLinkLabel}>Project Detail</span>
        </Link>

        {/* Header Section */}
        <header className={styles.projectDetail__header}>
          <div className={styles.projectDetail__headerInfo}>
            <div className={styles.projectDetail__typeTag}>
              <Database size={14} />
              <span>{frontmatter.type}</span>
            </div>
            <h1 className={styles.projectDetail__title}>
              {formatTitle(frontmatter.title)}
            </h1>
          </div>
          
          <div className={styles.projectDetail__sidebarHeader}>
             <div className={styles.projectDetail__meta}>
                <div className={styles.projectDetail__metaRow}>
                   <span>STATUS</span>
                   <span className={styles.projectDetail__status}>{frontmatter.status || 'DEPLOYED'}</span>
                </div>
                <div className={styles.projectDetail__infoList}>
                   <div className={styles.projectDetail__infoItem}>
                      <span className={styles.projectDetail__infoItemKey}>Role</span>
                      <span className={styles.projectDetail__infoItemVal}>{frontmatter.role || 'Lead Designer'}</span>
                   </div>
                   <div className={styles.projectDetail__infoItem}>
                      <span className={styles.projectDetail__infoItemKey}>Timeline</span>
                      <span className={styles.projectDetail__infoItemVal}>{frontmatter.timeline || '12 Weeks'}</span>
                   </div>
                   <div className={styles.projectDetail__infoItem}>
                      <span className={styles.projectDetail__infoItemKey}>Client</span>
                      <span className={styles.projectDetail__infoItemVal}>{frontmatter.client || 'Nexus Financial'}</span>
                   </div>
                </div>
             </div>
          </div>
        </header>

        {/* Main Feature Image */}
        {frontmatter.image && (
          <div className={styles.projectDetail__hero}>
            <div className={styles.projectDetail__heroFrame}>
              <Image 
                src={frontmatter.image}
                alt={frontmatter.title}
                fill
                className={styles.projectDetail__heroImage}
                referrerPolicy="no-referrer"
              />
              <div className={styles.projectDetail__liveBadge}>
                 <div className={styles.projectDetail__liveBadgeDot}></div>
                 Live Preview
              </div>
            </div>
          </div>
        )}

        <div className={styles.projectDetail__mainGrid}>
          <article className={styles.projectDetail__content}>
            <MDXRemote source={content} />
          </article>

          {/* Sidebar */}
          <aside className={styles.projectDetail__sidebar}>
            <div className={styles.projectDetail__stickyCard}>
               <div className={styles.projectDetail__stickyHeader}>
                  specs.json
               </div>
               
               <div className={styles.projectDetail__stickyBody}>
                  <div className={styles.projectDetail__stickyTitle}>
                     <Code size={18} />
                     <h3>Technical Specs</h3>
                  </div>

                  <div className={styles.projectDetail__specGroup}>
                     <h4 className={styles.projectDetail__specGroupLabel}>STACK</h4>
                     <div className={styles.projectDetail__tagStack}>
                        {Array.isArray(frontmatter.stack) ? frontmatter.stack.map((s: string) => <Tag key={s}>{s}</Tag>) : <Tag>{frontmatter.stack}</Tag>}
                     </div>
                  </div>

                  {frontmatter.codeSnippet && (
                    <div className={styles.projectDetail__specGroup}>
                       <h4 className={styles.projectDetail__specGroupLabel}>CODE BLUERPINT</h4>
                       <div className={styles.projectDetail__codeCard}>
                          <pre className={styles.projectDetail__codePre}>
                           <code>{frontmatter.codeSnippet}</code>
                          </pre>
                       </div>
                    </div>
                  )}
               </div>
            </div>
            
            <button className={styles.projectDetail__nextBtn}>
               NEXT PROJECT <ArrowRight size={18} />
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}
