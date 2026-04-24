import { loadProjects } from '@/helpers/file-helpers';
import ClientArchive from './ClientArchive';

export default async function Archive() {
  const projects = await loadProjects();
  return <ClientArchive projects={projects} />;
}
