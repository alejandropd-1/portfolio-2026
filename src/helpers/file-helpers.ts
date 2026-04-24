import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function loadPage(filename: string) {
  try {
    const filePath = path.join(process.cwd(), `src/content/${filename}.mdx`);
    const rawContent = await fs.readFile(filePath, 'utf8');
    const { data: frontmatter, content } = matter(rawContent);
    return { frontmatter, content };
  } catch (error) {
    console.error(`Error loading page ${filename}:`, error);
    return null;
  }
}

export async function loadJobs() {
  try {
    const jobsPath = path.join(process.cwd(), 'src/content/jobs');
    const files = await fs.readdir(jobsPath);
    
    const jobs = await Promise.all(
      files
        .filter(file => file.endsWith('.mdx'))
        .map(async (file) => {
          const filePath = path.join(jobsPath, file);
          const rawContent = await fs.readFile(filePath, 'utf8');
          const { data: frontmatter } = matter(rawContent);
          return {
            ...frontmatter,
            slug: file.replace('.mdx', ''),
          };
        })
    );
    
    return jobs.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
  } catch (error) {
    console.error('Error loading jobs:', error);
    return [];
  }
}

export async function loadJob(slug: string) {
  try {
    const filePath = path.join(process.cwd(), `src/content/jobs/${slug}.mdx`);
    const rawContent = await fs.readFile(filePath, 'utf8');
    const { data: frontmatter, content } = matter(rawContent);
    return { frontmatter, content };
  } catch (error) {
    console.error(`Error loading job ${slug}:`, error);
    return null;
  }
}

// Aliases for backward compatibility or if "projects" term is preferred in UI
export const loadProjects = loadJobs;
export const loadProject = loadJob;
