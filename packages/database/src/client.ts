import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../drizzle/schema.drizzle.js';
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
import { z } from 'zod';

expand(config());

const ENVSchema = z.object({
	DATABASE_URL: z.string(),
});

export type env = z.infer<typeof ENVSchema>;

// eslint-disable-next-line ts/no-redeclare, node/no-process-env
const { data: env, error } = ENVSchema.safeParse(process.env);

if (error) {
	console.error('❌ Invalid env:');
	console.error(JSON.stringify(error.flatten().fieldErrors, null, 2));
	process.exit(1);
}

const sql = neon(env!.DATABASE_URL);
export const database = drizzle({ client: sql, schema });
