'use client';

import { motion } from 'motion/react';
import { Folder, ArrowRight, ExternalLink, RotateCcw } from 'lucide-react';
import { SyntaxCard, Tag, KeyValue } from '@/components/UI';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/pages/_home.module.scss';
import { clsx } from 'clsx';

export default function ClientHome({ projects }: { projects: any[] }) {
  const featuredProject = projects[0];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className={styles.home__hero}>
        <div className={styles.home__heroTag} style={{ gap: '12px', marginBottom: '2rem' }}>
          <Folder size={14} />
          <div>
            <Link href="/" className="hover:text-primary transition-colors">~</Link>
            <span className="opacity-50 mx-1">/</span>
            <Link href="/" className="hover:text-primary transition-colors">root</Link>
            <span className="opacity-50 mx-1">/</span>
            <span className="text-primary">projects</span>
          </div>
        </div>
        
        <h1 className={styles.home__title}>
          Compiled <span>Visions.</span>
        </h1>
        
        <KeyValue 
          k="const mission" 
          v="UX/UI designer with over 14 years of experience."
          className="italic"
        />
      </section>

      <div className={styles.home__grid}>
        {/* Sidebar Filters */}
        <aside className={styles.home__sidebar}>
          <SyntaxCard label="Filters" className="p-8">
            <div className={styles.home__filterGroup}>
              <div className={styles.home__filterTags}>
                <Tag active>All Output</Tag>
                <Tag>UI/UX Eng</Tag>
                <Tag>Web Dev</Tag>
                <Tag>Mobile App</Tag>
              </div>
              <Tag className="w-fit">Systems</Tag>
            </div>
            
            <div className={styles.home__statusInfo}>
              <KeyValue k="status" v='"available_for_hire",' />
              <KeyValue k="location" v='"remote",' />
              <KeyValue k="timezone" v='"EST",' />
            </div>
          </SyntaxCard>
        </aside>

        {/* Project Grid */}
        <div className={styles.home__projects}>
          {/* Featured Project */}
          {featuredProject && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <article className={styles.home__featured}>
                <Link href={`/projects/${featuredProject.slug}`}>
                  <div className={styles.home__featuredGrid}>
                    <div className={styles.home__featuredImageContainer}>
                      {featuredProject.image ? (
                        <Image 
                          src={featuredProject.image} 
                          alt={featuredProject.title} 
                          fill 
                          className={styles.home__featuredImage}
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <Image 
                          src="https://picsum.photos/seed/home-main/1920/1080" 
                          alt={featuredProject.title} 
                          fill 
                          className={styles.home__featuredImage}
                          referrerPolicy="no-referrer"
                        />
                      )}
                    </div>
                    
                    <div className={styles.home__featuredInfo}>
                      <div className={styles.home__featuredMeta}>
                        <span>{"⟡"}</span> {featuredProject.year} {"//"} {featuredProject.type}
                      </div>
                      
                      <h2 className={styles.home__featuredTitle}>
                        {featuredProject.title}
                      </h2>
                      
                      <p className={styles.home__featuredDesc}>
                        {featuredProject.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-10">
                        {Array.isArray(featuredProject.stack) && featuredProject.stack.map((s: string) => (
                          <Tag key={s}>{s}</Tag>
                        ))}
                      </div>
                      
                      <div className={styles.home__featuredCTA}>
                        READ OUTPUT <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            </motion.div>
          )}

          <div className={styles.home__projectGrid}>
            {projects.slice(1).map((project, i) => (
              <motion.div 
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/projects/${project.slug}`} className="h-full block">
                <article className={styles.home__projectCard}>
                  {project.image ? (
                    <div className={styles.home__projectCardImageContainer}>
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className={styles.home__projectCardImage}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className={styles.home__projectCardCode}>
                       <pre>
                        <code>{project.codeSnippet}</code>
                       </pre>
                    </div>
                  )}
                  
                  <div className={styles.home__projectCardBody}>
                    <div className={styles.home__projectCardMeta}>
                       <span className={clsx(project.slug === 'aura-meditation' ? 'tertiary-text' : 'primary-text')}>
                         {project.slug === 'aura-meditation' ? "🗏" : "⟡"}
                       </span> {project.year}
                    </div>
                    
                    <h3 className={styles.home__projectCardTitle}>
                      {project.title}
                    </h3>
                    
                    <div className={styles.home__projectCardDetails}>
                      {project.role && <KeyValue k="Role" v={project.role} />}
                      {project.impact && <KeyValue k="Impact" v={project.impact} />}
                      {project.type && <KeyValue k="Type" v={project.type} />}
                      {project.status && <KeyValue k="Status" v={project.status} />}
                    </div>
                    
                    <div className={styles.home__projectCardFooter}>
                       <div className={styles.home__projectCardLink}>
                          {project.slug === 'aura-meditation' ? 'EXECUTE' : 'VIEW LOG'}
                          <span>
                            {project.slug === 'aura-meditation' ? <ExternalLink size={12} /> : <RotateCcw size={12} />}
                          </span>
                       </div>
                    </div>
                  </div>
                </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
