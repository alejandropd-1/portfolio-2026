import Header from '@/components/Header';
import Job from '@/components/Job';
import { getJobsList } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function Home() {
  const allJobs = await getJobsList();

  // Filtramos solo los publicados
  const jobs = allJobs.filter((job) => job.status === 'published');

  const designJobs = jobs.filter((job) => job.category === 'design');

  return (
    <main className="container">
      <div className="home-layout">
        <Sidebar />

        <div className="home-main">
          <section className="hero">
            <div className="hero__path">~/root/projects</div>
            <h1 className="hero__title">
              Compiled <br />
              <span className="accent">Visions.</span>
            </h1>
            <p className="hero__description">
              Senior UX/UI Designer & Visual Architect. 
              Bridging the gap between pure logic and human soul through code-inspired design.
            </p>
          </section>

          <div className="project-feed">
            <div className="home-section-label">Selected Works</div>
            {designJobs.map((job) => (
              <Job
                key={job.slug}
                {...job}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__section">
        <span className="sidebar__label">Status</span>
        <div className="status-indicator">
          <div className="status-indicator__dot"></div>
          <span>Available for hire</span>
        </div>
      </div>

      <div className="sidebar__section">
        <span className="sidebar__label">Filters</span>
        <ul className="sidebar__list">
          <li className="sidebar__item" data-active="true">All Projects</li>
          <li className="sidebar__item">Product Design</li>
          <li className="sidebar__item">Visual Systems</li>
          <li className="sidebar__item">Experiments</li>
        </ul>
      </div>

      <div className="sidebar__section">
        <span className="sidebar__label">Connect</span>
        <ul className="sidebar__list">
          <li className="sidebar__item">LinkedIn</li>
          <li className="sidebar__item">GitHub</li>
          <li className="sidebar__item">E-mail</li>
        </ul>
      </div>
    </aside>
  );
}
