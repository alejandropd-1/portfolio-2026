import { Folder, ChevronLeft, Globe, Database, ArrowRight, Code } from 'lucide-react';
import { Tag } from '@/components/UI';
import Image from 'next/image';
import Link from 'next/link';
import { loadProject, loadProjects } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import styles from '@/styles/pages/_project-detail.module.scss';

export async function generateStaticParams() {
  const projects = await loadProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await loadProject(slug);

  if (!project) {
    return notFound();
  }

  const projects = await loadProjects();
  const currentIndex = projects.findIndex((p: any) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const { frontmatter, content } = project;

  return (
    <div className={styles.projectDetail}>
      <div className="page-container">
        {/* Back Link and Breadcrumb */}
        <div className={styles.projectDetail__breadcrumb + " print:hidden"}>
          <Folder size={14} />
          <div className="flex items-center">
            <Link href="/" className="hover:text-primary transition-colors">~</Link>
            <span className="opacity-50 mx-2">/</span>
            <Link href="/" className="hover:text-primary transition-colors">root</Link>
            <span className="opacity-50 mx-2">/</span>
            <span className="text-primary">projects</span>
            <span className="opacity-50 mx-2">/</span>
            <span className="text-primary">{slug}</span>
          </div>
        </div>

        {/* Header Section */}
        <header className={styles.projectDetail__header}>
          <div className={styles.projectDetail__headerInfo}>
            <div className={styles.projectDetail__typeTag}>
              <Database size={14} />
              <span>{frontmatter.type}</span>
            </div>
            <h1 className={styles.projectDetail__title}>
              {frontmatter.title.split(' ').slice(0, 2).join(' ')} <br />
              <span>{frontmatter.title.split(' ').slice(2).join(' ')}</span>
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
                     <div className="flex flex-wrap gap-2">
                        {Array.isArray(frontmatter.stack) ? frontmatter.stack.map((s: string) => <Tag key={s}>{s}</Tag>) : <Tag>{frontmatter.stack}</Tag>}
                     </div>
                  </div>

                  {frontmatter.codeSnippet && (
                    <div className={styles.projectDetail__specGroup}>
                       <h4 className={styles.projectDetail__specGroupLabel}>CODE BLUERPINT</h4>
                       <div className="syntax-card p-6">
                          <pre className="secondary-text font-mono text-[11px]">
                           <code>{frontmatter.codeSnippet}</code>
                          </pre>
                       </div>
                    </div>
                  )}
               </div>
            </div>
            
            <Link href={`/projects/${nextProject.slug}`} className={styles.projectDetail__nextBtn}>
               NEXT PROJECT <ArrowRight size={18} />
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
