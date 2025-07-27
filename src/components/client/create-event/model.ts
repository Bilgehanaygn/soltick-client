import { z } from 'zod';

export const createEventSchema = z.object({
  price: z.number().min(0, { message: 'Price must be non-negative' }),
  tickets_total: z
    .number()
    .min(1, { message: 'At least one ticket is required' }),
  event_name: z
    .string()
    .min(1, { message: 'Event name is required' })
    .max(48, { message: 'Event name must be 48 characters or fewer' }),
  event_address: z
    .string()
    .min(1, { message: 'Event address is required' })
    .max(48, { message: 'Event address must be 48 characters or fewer' }),
});

export type CreateEventModel = z.infer<typeof createEventSchema>;
