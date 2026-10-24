import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL }) {
  const posts = await getCollection('posts');
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.publishedAt).getTime() - new Date(a.data.publishedAt).getTime()
  );

  return rss({
    title: 'আফফান লাবীব | চিন্তা ও পাঠের নিভৃত আঙিনা',
    description: 'সরল চিন্তা, পাঠের আনন্দ, ইতিহাসচর্চা ও বই-আলোচনার ব্যক্তিগত ঘর।',
    site: context.site || 'https://affanlabib.me',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishedAt),
      description: post.data.description,
      link: `/${post.slug}/`,
    })),
    customData: `<language>bn</language>`,
  });
}
