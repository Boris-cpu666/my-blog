import { getProjects } from '../../../src/lib/notion';

export default async function ProjectDetailPage({ params }) {
  const projects = await getProjects();
  const project = projects.find((p) => p.id === params.id);
  if (!project) return <div className="text-center text-red-500 py-20">项目未找到</div>;
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-h1 text-white mb-4">{project.title}</h1>
      <div className="mb-8">{project.description}</div>
      {/* 可扩展：渲染封面、标签等 */}
    </div>
  );
} 