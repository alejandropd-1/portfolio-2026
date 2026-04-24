'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Download, ChevronRight, Check, X } from 'lucide-react';
import { SyntaxCard, Tag, KeyValue } from '@/components/UI';
import styles from '@/styles/pages/_resume.module.scss';
import { clsx } from 'clsx';

const experiences = [
  {
    role: 'Lead Product Designer',
    company: 'TechNova Inc;',
    period: '2021 — Present',
    description: 'Spearheaded the redesign of the core enterprise dashboard, leading a team of 4 designers and collaborating closely with front-end engineers to establish a scalable React-based component library.',
    points: [
      "Developed 'The Compiled Soul' design system, reducing design-to-dev handoff time by 40% and increasing visual consistency across 5 product lines.",
      "Conducted extensive user research, translating complex data structures into intuitive, asymmetric layouts that improved user task completion rates by 25%."
    ],
    stack: ['Figma', 'Design Systems', 'React', 'SASS']
  },
  {
    role: 'Senior UX Designer',
    company: 'Creative Logic;',
    period: '2018 — 2021',
    type: 'Agency',
    stack: ['Prototyping', 'User Research', 'UI/UX']
  },
  {
    role: 'UI Developer',
    company: 'DataStream;',
    period: '2015 — 2018',
    type: 'Startup',
    stack: ['HTML/CSS', 'JavaScript', 'Web Dev']
  }
];

const skills = [
  { category: 'DESIGN ARCHITECTURE', items: [
    { name: 'Design Systems', value: '95%' },
    { name: 'Interaction Design', value: '90%' },
    { name: 'Wireframing', value: '95%' },
    { name: 'Prototyping (Figma)', value: '98%' },
  ]},
  { category: 'FRONT-END EXECUTION', items: [
    { name: 'HTML/Semantic DOM', value: '95%' },
    { name: 'CSS/SASS/Tokens', value: '98%' },
    { name: 'JavaScript (ES6+)', value: '85%' },
    { name: 'React Basics', value: '75%' },
  ]},
  { category: 'METHODOLOGIES', items: [
    { name: 'Agile/Scrum', value: 'Yes' },
    { name: 'Atomic Design', value: 'Yes' },
    { name: 'A/B Testing', value: 'Yes' },
    { name: 'WCAG Accessibility', value: 'Yes' },
  ]}
];

export default function ClientResume({ frontmatter, content }: { frontmatter: any, content: string }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Extract unique tags from all experiences dynamically
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    experiences.forEach(exp => exp.stack.forEach(s => tags.add(s.toUpperCase())));
    return Array.from(tags).sort();
  }, []);

  const filteredExperiences = useMemo(() => {
    return experiences.filter(exp => {
      const searchTerms = searchQuery.toLowerCase();
      const matchesSearch = 
        exp.role.toLowerCase().includes(searchTerms) ||
        exp.company.toLowerCase().includes(searchTerms) ||
        exp.description?.toLowerCase().includes(searchTerms) ||
        exp.stack.some(s => s.toLowerCase().includes(searchTerms));

      const matchesTags = activeTags.length === 0 || 
        activeTags.every(tag => exp.stack.some(s => s.toUpperCase() === tag.toUpperCase()));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, activeTags]);

  const toggleTag = (tag: string) => {
    setActiveTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearAll = () => {
    setSearchQuery('');
    setActiveTags([]);
  };

  if (!mounted) return null;

  return (
    <div className="page-container">
      <div className={styles.resume}>
        {/* Search Bar Section */}
        <section className={styles.resume__search}>
          <p className={styles.resume__searchLabel}>Refine your search</p>
          <div className={styles.resume__searchBox}>
            <Search size={20} />
            <input 
              type="text" 
              placeholder="Search for keywords, skills, or roles..."
              className={styles.resume__input}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className={styles.resume__filters}>
            <div className={styles.resume__tags}>
              {availableTags.map(tag => (
                <button key={tag} onClick={() => toggleTag(tag)} style={{ background: 'none', border: 'none', padding: 0 }}>
                  <Tag active={activeTags.includes(tag)}>{tag}</Tag>
                </button>
              ))}
              {(searchQuery || activeTags.length > 0) && (
                <button onClick={clearAll} className={styles.resume__clearAll}>
                  Clear All
                </button>
              )}
            </div>
            <div className={styles.resume__downloads}>
               <button className={styles.resume__downloadBtn}>
                  <Download size={14} /> ATS CV
               </button>
               <button className={styles.resume__downloadBtn}>
                  <Download size={14} /> CUSTOM CV
               </button>
            </div>
          </div>
        </section>

        {/* Main Resume Heading */}
        <header className={styles.resume__hero}>
          <h1>
            Senior UI/UX <span>Architect</span>
          </h1>
          <p className={styles.resume__subtitle}>
            Bridging the gap between conceptual editorial design and robust front-end architectures. Specializing in design systems and high-fidelity prototypes.
          </p>
          <div className={styles.resume__meta}>
            <div className={styles.resume__metaGroup}>
              <span>Location =</span>
              <span>San Francisco, CA;</span>
            </div>
            <div className={clsx(styles.resume__metaGroup, styles['resume__metaGroup--primary'])}>
              <span>Email =</span>
              <span>hello@aledesign.com;</span>
            </div>
            <div className={styles.resume__metaGroup}>
              <span>Status =</span>
              <span>Available for new opportunities;</span>
            </div>
          </div>
        </header>

        {/* Sections */}
        <div className="space-y-40">
          {/* 01. Experience Map */}
          <section className={styles.resume__section}>
            <div className={styles.resume__sectionHeader}>
              <span>01.</span>
              <h2>Experience Map</h2>
            </div>

            <div className="space-y-12">
              <AnimatePresence mode='popLayout'>
                {filteredExperiences.map((exp) => (
                  <motion.div 
                    key={exp.company + exp.role}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <SyntaxCard className={styles.resume__expCard}>
                      <div className={styles.resume__expCardHeader}>
                        <div>
                          <h3 className={styles.resume__expCardTitle}>{exp.role}</h3>
                          <div className={styles.resume__expCardCompany}>
                            <span>{exp.type ? exp.type : 'Company'} =</span>
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <Tag active>{exp.period}</Tag>
                      </div>

                      {exp.description && (
                         <>
                          <p className={styles.resume__expCardDesc}>
                            {exp.description}
                          </p>
                          {exp.points && (
                            <ul className={styles.resume__expCardPoints}>
                              {exp.points.map((point, idx) => (
                                <li key={idx} className={styles.resume__expCardPoint}>
                                  <span><ChevronRight size={14} /></span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}
                          <div className="flex flex-wrap gap-2">
                            {exp.stack.map(s => (
                              <Tag key={s} active={activeTags.includes(s.toUpperCase())}>{s}</Tag>
                            ))}
                          </div>
                         </>
                      )}
                    </SyntaxCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>

          {/* 02. System Constraints */}
          <section className={styles.resume__section}>
            <div className={styles.resume__sectionHeader}>
              <span>02.</span>
              <h2>System Constraints</h2>
            </div>

            <div className={styles.resume__skillGrid}>
              {skills.map((skillGroup, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={styles.resume__skillCard}>
                    <h4 className={styles.resume__skillCardCategory}>{skillGroup.category}</h4>
                    <div className={styles.resume__skillCardItems}>
                      {skillGroup.items.map((item, idx) => (
                        <div key={idx} className={styles.resume__skillCardItem}>
                          <span className={styles.resume__skillCardItemName}>{item.name}</span>
                          <span className={styles.resume__skillCardItemVal}>
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 03. Base Compilation */}
          <section className="pb-32">
            <div className={styles.resume__sectionHeader}>
              <span>03.</span>
              <h2>Base Compilation</h2>
            </div>

            <SyntaxCard className={styles.resume__eduCard}>
               <div className={styles.resume__eduCardHeader}>
                  <h3>Bachelor of Fine Arts in Interaction Design</h3>
                  <span>Class of 2015</span>
               </div>
               <div className={styles.resume__expCardCompany}>
                  <span>Institution =</span>
                  <span>California College of the Arts;</span>
               </div>
            </SyntaxCard>
          </section>
        </div>
      </div>
    </div>
  );
}
