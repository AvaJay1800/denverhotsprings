import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const springs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/springs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    drive_time_hours: z.number(),
    drive_time_label: z.string(),
    type: z.enum(['commercial', 'primitive', 'resort', 'clothing-optional']),
    cost: z.string(),
    rating: z.number().min(0).max(5),
    last_verified: z.string(),
    town: z.string(),
    region: z.string(),
    hero_image: z.string().optional(),
    best_season: z.array(z.string()),
    crowd_level: z.enum(['low', 'medium', 'high']),
    family_friendly: z.boolean(),
    dog_friendly: z.boolean(),
    reservations_required: z.boolean(),
    affiliate_hotel_url: z.string().optional(),
    affiliate_booking_url: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['beginner', 'seasonal', 'gear', 'itinerary', 'tips']),
    published_date: z.string(),
    hero_image: z.string().optional(),
  }),
});

export const collections = { springs, guides };
