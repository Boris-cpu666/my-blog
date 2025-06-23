import Image from "next/image";
import { getProjects, getBlogPosts } from "../src/lib/notion";
import Link from "next/link";
import ImageWithFallback from '../components/ImageWithFallback';

export default async function Home() {
  const projects = await getProjects();
  const posts = await getBlogPosts();

  return (
    <main className="container mx-auto px-4 bg-background text-text">
      {/* 强制 Tailwind JIT 生成自定义类 */}
      <div className="hidden bg-background text-text bg-primary text-primary bg-secondary text-secondary bg-dark text-dark bg-light text-light text-subtext rounded-card rounded-btn shadow-soft"></div>

      {/* Hero Section */}
      <section id="hero" className="text-center py-20 md:text-left flex flex-col md:flex-row items-center">
        <div className="max-w-2xl mx-auto md:mx-0 flex-1">
          <h1 className="text-h1 text-white mb-4">
            Hi, I'm <span className="text-primary">Boris</span>
          </h1>
          <p className="text-xl text-subtext mb-8">
            I'm passionate about AI and technology, and I love to share my knowledge and experiences with you.
          </p>
          <a href="#about" className="btn btn-primary">About Me</a>
        </div>
        <div className="hidden md:block flex-1 pl-8">
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1000&q=80"
            alt="AI Technology"
            className="rounded-xl shadow-soft w-full h-80 object-cover"
            width={500}
            height={320}
            loading="lazy"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <h2 className="text-h2 font-bold mb-8 text-center text-white">About Me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="card text-center">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="AI Research"
              className="rounded-t-lg w-full h-32 object-cover mb-3"
              width={400}
              height={128}
              loading="lazy"
            />
            <i className="fas fa-brain text-4xl text-primary mb-3"></i>
            <h3 className="text-h3 text-white">AI Research</h3>
            <p className="text-subtext">Deep learning, NLP, and generative models expertise.</p>
          </div>
          <div className="card text-center">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Full Stack Dev"
              className="rounded-t-lg w-full h-32 object-cover mb-3"
              width={400}
              height={128}
              loading="lazy"
            />
            <i className="fas fa-code text-4xl text-secondary mb-3"></i>
            <h3 className="text-h3 text-white">Full Stack Dev</h3>
            <p className="text-subtext">Building scalable web apps with modern tech stacks.</p>
          </div>
          <div className="card text-center">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
              alt="Content Creator"
              className="rounded-t-lg w-full h-32 object-cover mb-3"
              width={400}
              height={128}
              loading="lazy"
            />
            <i className="fas fa-pen-nib text-4xl text-success mb-3"></i>
            <h3 className="text-h3 text-white">Content Creator</h3>
            <p className="text-subtext">Writing insightful articles and tutorials on AI & tech.</p>
          </div>
          <div className="card text-center">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
              alt="Community Builder"
              className="rounded-t-lg w-full h-32 object-cover mb-3"
              width={400}
              height={128}
              loading="lazy"
            />
            <i className="fas fa-users text-4xl text-error mb-3"></i>
            <h3 className="text-h3 text-white">Community Builder</h3>
            <p className="text-subtext">Organizing events and fostering AI learning groups.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <h2 className="text-h2 font-semibold mb-8 text-center text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a key={project.id} href={project.url || '#'} target="_blank" rel="noopener noreferrer" className="card-link-wrapper">
              <div className="card">
                {project.cover && (() => {
                  const coverUrl = decodeURIComponent(project.cover);
                  console.log('项目封面', project.title, project.cover);
                  return (
                    <ImageWithFallback
                      src={coverUrl}
                      alt={project.title}
                      className="rounded-t-lg w-full h-48 object-cover"
                      width={400}
                      height={225}
                      loading="lazy"
                    />
                  );
                })()}
                <div className="p-6">
                  <h3 className="text-h3 text-white">{project.title}</h3>
                  <p className="text-subtext my-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/projects" className="btn btn-primary">View More Projects</a>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16">
        <h2 className="text-h2 font-semibold mb-8 text-center text-white">Latest Blog Articles</h2>
        <div className="space-y-8">
          {posts.slice(0, 3).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="block card-horizontal">
              <div className="flex flex-col md:flex-row">
                {post.cover && (() => {
                  const coverUrl = decodeURIComponent(post.cover);
                  console.log('博客封面', post.title, post.cover);
                  return (
                    <div className="w-full md:w-1/3 flex-shrink-0">
                      <ImageWithFallback
                        src={coverUrl}
                        alt={post.title}
                        className="rounded-t-lg md:rounded-l-lg md:rounded-t-none w-full h-48 object-cover"
                        width={400}
                        height={225}
                        loading="lazy"
                      />
                    </div>
                  );
                })()}
                <div className="p-6 flex-1">
                  <h3 className="text-h3 text-white mb-2">{post.title}</h3>
                  <p className="text-subtext my-2">{post.summary}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="text-sm text-subtext mt-2">{post.date}</div>
                  <span className="text-primary hover:underline inline-block mt-2">Read More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="btn btn-primary">Browse All Articles</Link>
        </div>
      </section>
    </main>
  );
}
