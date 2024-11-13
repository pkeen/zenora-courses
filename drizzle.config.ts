import { defineConfig } from "drizzle-kit";

const databaseUrl =
	process.env.DATABASE_URL ||
	"postgres://postgres:password@localhost:5432/postgres";

export default defineConfig({
	dialect: "postgresql", // 'mysql' | 'sqlite' | 'turso'
	schema: "./src/db/schema.ts",
	out: "./migrations", // Directory to store migration files
	dbCredentials: {
		url: databaseUrl,
	},
});
