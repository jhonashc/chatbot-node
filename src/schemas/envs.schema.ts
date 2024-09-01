import { z } from 'zod';

export const envsSchema = z.object({
  PORT: z
    .string()
    .min(1, 'PORT is required')
    .refine((value) => !isNaN(Number(value)), 'PORT must be a valid number'),
});
