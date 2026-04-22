import Header from '@/components/Header';
import Job from '@/components/Job';
import { getJobsList } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function Home() {
  const allJobs = await getJobsList();

  // Filtramos solo los publicados
  const jobs = allJobs.filter((job) => job.status === 'published');

  // Procesamos el contenido MDX internamente para cada trabajo
  const jobsWithContent = jobs.map((job) => ({
    ...job,
    // Aquí el contenido puede ser null o el texto markdown puro extraído por gray-matter 
  }));

  const designJobs = jobsWithContent.filter((job) => job.category === 'design');
  const otherJobs = jobsWithContent.filter((job) => job.category !== 'design');

  return (
    <main>
      <div className="container">
        <Header />

        <div className="section padding-block-start-10">
          {/* Trabajos de diseño */}
          {designJobs.length > 0 && (
            <>
              <h3 className="job-title margin-block-end-4">UX/UI Web Designer</h3>
              {designJobs.map((job) => (
                <Job
                  key={job.slug}
                  title={job.title}
                  category={job.category}
                  summary={job.summary}
                  slug={job.slug}
                />
              ))}
            </>
          )}

          {/* Otros Trabajos (Marketing, Management, 3D, etc) */}
          {otherJobs.map((job) => (
            <Job
              key={job.slug}
              title={job.title}
              category={job.category}
              summary={job.summary}
              slug={job.slug}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
