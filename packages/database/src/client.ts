import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../drizzle/schema.drizzle';
import env from './env';

const sql = neon(env.DATABASE_URL);
export const database = drizzle({ client: sql, schema });
