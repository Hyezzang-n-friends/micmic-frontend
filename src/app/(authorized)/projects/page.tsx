import Projects from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <main>
      <Projects projects={[{ id: '1' }]} />
    </main>
  );
}
