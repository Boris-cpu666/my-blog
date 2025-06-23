import Link from 'next/link';
import { getBlogPosts } from '../../src/lib/notion';
import ImageWithFallback from '../../components/ImageWithFallback';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-h1 text-white text-center mb-12">All Articles</h1>
      <div className="space-y-8 max-w-4xl mx-auto">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="block card-horizontal">
            <div className="flex flex-col md:flex-row">
              {post.cover && (
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <ImageWithFallback
                    src={post.cover}
                    alt={post.title}
                    className="rounded-t-lg md:rounded-l-lg md:rounded-t-none w-full h-48 object-cover"
                    width={400}
                    height={225}
                    loading="lazy"
                  />
                </div>
              )}
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
    </div>
  );
} 