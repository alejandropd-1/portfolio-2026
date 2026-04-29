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
    const projectsPath = path.join(process.cwd(), 'src/content/projects');
    const files = await fs.readdir(projectsPath);
    
    const items = await Promise.all(
      files
        .filter(file => file.endsWith('.mdx'))
        .map(async (file) => {
          const filePath = path.join(projectsPath, file);
          const rawContent = await fs.readFile(filePath, 'utf8');
          const { data: frontmatter } = matter(rawContent);
          return {
            ...frontmatter,
            slug: file.replace('.mdx', ''),
          };
        })
    );
    
    // Filter specifically for Resume items (or default true if flag is missing for backward compatibility)
    const jobs = items.filter((item: any) => item.showInResume !== false);
    return jobs.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
  } catch (error) {
    console.error('Error loading jobs:', error);
    return [];
  }
}

export async function loadProjects() {
  try {
    const projectsPath = path.join(process.cwd(), 'src/content/projects');
    const files = await fs.readdir(projectsPath);
    
    const items = await Promise.all(
      files
        .filter(file => file.endsWith('.mdx'))
        .map(async (file) => {
          const filePath = path.join(projectsPath, file);
          const rawContent = await fs.readFile(filePath, 'utf8');
          const { data: frontmatter } = matter(rawContent);
          return {
            ...frontmatter,
            slug: file.replace('.mdx', ''),
          };
        })
    );
    
    // Filter specifically for Portfolio items (Home/Archive)
    const projects = items.filter((item: any) => item.showInPortfolio !== false);
    return projects.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}

export async function loadJob(slug: string) {
  try {
    const filePath = path.join(process.cwd(), `src/content/projects/${slug}.mdx`);
    const rawContent = await fs.readFile(filePath, 'utf8');
    const { data: frontmatter, content } = matter(rawContent);
    return { frontmatter, content };
  } catch (error) {
    console.error(`Error loading job/project ${slug}:`, error);
    return null;
  }
}

export const loadProject = loadJob;
