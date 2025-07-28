import { CollectionColors } from '@/lib/constants';
import { z } from 'zod';

export const createCollectionSchema = z.object({
    name: z.string().min(4, {
        error: (iss) => iss.input === "" ? "Name is required" : "Collection must be at least 4 characters"
    }),
    color: z.string().refine(
        (color) => Object.keys(CollectionColors).includes(color), {
            error: (iss) => iss.input === "" ? "Color is required" : undefined,
        }
    ),
})

export type createCollectionSchemaType = z.infer<typeof createCollectionSchema>;