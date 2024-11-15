import { defineConfig } from "drizzle-kit";
import { env } from "./src/env";

const databaseUrl = env.DATABASE_URL;

export default defineConfig({
	dialect: "postgresql", // 'mysql' | 'sqlite' | 'turso'
	schema: "./src/db/schema/index.ts", // Path to schema file
	out: "./src/db/migrations", // Directory to store migration files
	dbCredentials: {
		url: databaseUrl,
	},
	verbose: true,
});
