import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function getJobsList() {
  const fileNames = await readDirectory('/src/content/jobs');

  const jobs = [];

  for (let fileName of fileNames) {
    if (!fileName.endsWith('.md') && !fileName.endsWith('.mdx')) continue;

    const rawContent = await readFile(
      `/src/content/jobs/${fileName}`
    );

    const { data: frontmatter } = matter(rawContent);

    jobs.push({
      slug: fileName.replace(/\.mdx?$/, ''),
      ...frontmatter,
    });
  }

  // Ordenar por la propiedad 'order' si existe, de menor a mayor
  return jobs.sort((p1, p2) => {
    if (p1.order !== undefined && p2.order !== undefined) {
      return p1.order - p2.order;
    }
    return 0;
  });
}

export async function loadJob(slug) {
  let rawContent;
  try {
    rawContent = await readFile(`/src/content/jobs/${slug}.mdx`);
  } catch (e) {
    try {
      rawContent = await readFile(`/src/content/jobs/${slug}.md`);
    } catch (err) {
      throw new Error(`Job post for slug ${slug} not found`);
    }
  }

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
}

function readFile(localPath) {
  return fs.readFile(
    path.join(process.cwd(), localPath),
    'utf8'
  );
}

function readDirectory(localPath) {
  return fs.readdir(
    path.join(process.cwd(), localPath)
  );
}

export async function loadPage(filename) {
  let rawContent;
  try {
    rawContent = await readFile(`/src/content/${filename}.mdx`);
  } catch (e) {
    try {
      rawContent = await readFile(`/src/content/${filename}.md`);
    } catch (err) {
      throw new Error(`Page content for ${filename} not found`);
    }
  }

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
}
