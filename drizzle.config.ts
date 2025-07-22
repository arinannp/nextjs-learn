import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './lib/drizzle',
  schema: './lib/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_jU1ri4YIPhWc@ep-round-surf-a1p4hk3z-pooler.ap-southeast-1.aws.neon.tech/job-seeker?sslmode=require&channel_binding=require', // put connection string  here ...
  },
})
