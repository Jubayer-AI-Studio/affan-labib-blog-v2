import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string(),
    category: z.enum(['chinta', 'pathalap', 'itihas', 'boi-alochona', 'onubad']),
    tags: z.array(z.string()).default([]),
    featuredImage: z.string().optional(),
    isPinned: z.boolean().default(false),
    previouslyPublished: z.string().optional(), // যেমন: 'দৈনিক প্রথম আলো, ১০ই জানুয়ারি'
    originalAuthor: z.string().optional(), // যদি অনুবাদ হয়
    
    // বই-আলোচনা সংক্রান্ত মেটাডাটা
    bookInfo: z.object({
      bookTitle: z.string(),
      author: z.string(),
      publisher: z.string().optional(),
      publishedYear: z.string().optional(),
      pages: z.string().optional(),
      ratingIndicator: z.string().optional(),
      coverImage: z.string().optional(),
      purchaseUrl: z.string().optional(),
    }).optional(),

    // ইতিহাসের রেফারেন্স/ফুটনোট
    footnotes: z.array(
      z.object({
        id: z.number(),
        text: z.string(),
      })
    ).optional(),
  }),
});

export const collections = { posts };
