import Image from "next/image";
import Link from 'next/link';
import { getProjects } from '../../src/lib/notion';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-h1 text-white text-center mb-12">All Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="card-link-wrapper block">
            <div className="card h-full">
              {project.cover && (() => {
                const coverUrl = decodeURIComponent(project.cover);
                return (
                  <img
                    src={coverUrl}
                    alt={project.title}
                    className="rounded-t-lg w-full h-48 object-cover"
                    width={400}
                    height={225}
                    loading="lazy"
                  />
                );
              })()}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-h3 text-white">{project.title}</h3>
                <p className="text-subtext my-2 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 