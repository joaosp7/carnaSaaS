import { z } from 'zod';
import { config } from 'dotenv';

config();

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().default(3000),
  MONGO_STR: z.string(),
});

const envParse = envSchema.safeParse(process.env);

if (!envParse.success) {
  console.error(envParse.error.format());
  throw new Error('Invalid environment variables');
}

export const env = envParse.data;
