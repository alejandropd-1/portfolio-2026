import { loadProjects } from '@/helpers/file-helpers';
import ClientHome from './ClientHome';

export default async function Home() {
  const projects = await loadProjects();

  return <ClientHome projects={projects} />;
}
