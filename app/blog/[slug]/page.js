import React from 'react';
import { getBlogPosts } from '../../../src/lib/notion';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export async function generateMetadata({ params }) {
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      images: post.cover ? [post.cover] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: post.cover ? [post.cover] : [],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return <div className="text-center text-red-500 py-20">文章未找到</div>;
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-h1 text-white mb-4">{post.title}</h1>
      <div className="text-subtext mb-4">{post.date}</div>
      {post.cover && (
        <Zoom>
          <img src={post.cover} alt={post.title} className="rounded-t-lg w-full h-64 object-cover mb-6" width={800} height={256} loading="lazy" />
        </Zoom>
      )}
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown
          children={post.summary}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={materialDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>{children}</code>
              )
            },
            img({node, ...props}) {
              return <Zoom><img {...props} className="rounded-lg my-4" /></Zoom>;
            }
          }}
        />
      </div>
      {/* 可扩展：渲染标签等 */}
    </div>
  );
} 