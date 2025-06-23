const { Client } = require('@notionhq/client');

const notionApiKey = process.env.NOTION_API_KEY;
const databaseId = process.env.NOTION_DATABASE_ID;

if (!notionApiKey) {
  throw new Error('请在 .env.local 文件中设置 NOTION_API_KEY');
}
if (!databaseId) {
  throw new Error('请在 .env.local 文件中设置 NOTION_DATABASE_ID');
}

const notion = new Client({
  auth: notionApiKey,
});

const aboutMeCovers = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // AI Research
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', // Full Stack Dev
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80', // Content Creator
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80', // Community Builder
];
const projectDefaultCovers = [
  'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&w=800',
  'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&w=800',
  'https://images.pexels.com/photos/34088/pexels-photo.jpg?auto=compress&w=800',
  'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&w=800',
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=800',
  'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=800',
  'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&w=800',
  'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&w=800',
];
const blogDefaultCovers = [
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1467987506553-8f3916508521?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1461344577544-4e5dc9487184?auto=format&fit=crop&w=800&q=80',
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=800',
  'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=800',
  'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&w=800',
  'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&w=800',
];

const getProjects = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        { property: '分类', select: { equals: 'Projects' } },
        { property: 'Published', checkbox: { equals: true } },
      ],
    },
    sorts: [
      { timestamp: 'created_time', direction: 'descending' },
    ],
  });

  const projects = response.results.map((page, idx) => {
    const cover = projectDefaultCovers[idx % projectDefaultCovers.length];
    return {
      id: page.id,
      title: page.properties.标题?.title[0]?.plain_text || '未命名项目',
      description: page.properties.内容?.rich_text[0]?.plain_text || '',
      tags: page.properties.标签?.multi_select?.map((tag) => tag.name) || [],
      url: page.properties.URL?.url || null,
      cover,
    };
  });

  return projects;
};

const getBlogPosts = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        { property: '分类', select: { equals: 'Blog' } },
        { property: 'Published', checkbox: { equals: true } },
      ],
    },
    sorts: [
      { property: '发布时间', direction: 'descending' },
    ],
  });

  const posts = response.results.map((post, idx) => {
    const cover = blogDefaultCovers[idx % blogDefaultCovers.length];
    return {
      id: post.id,
      title: post.properties.标题?.title[0]?.plain_text || '未命名文章',
      summary: post.properties.内容?.rich_text[0]?.plain_text || '',
      tags: post.properties.标签?.multi_select?.map((tag) => tag.name) || [],
      date: post.properties.发布时间?.date?.start || new Date().toISOString(),
      slug: post.properties.Slug?.rich_text[0]?.plain_text || post.id,
      cover,
    };
  });
  console.log('Notion 博客数据:', posts);
  return posts;
};

module.exports = {
  getProjects,
  getBlogPosts,
  notion,
}; 