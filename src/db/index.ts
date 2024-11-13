import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

// config({ path: ".env" }); // or .env.local

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined");
}

const sql = neon(databaseUrl);

// const options = {casing: "snake_case"};

// Drizzle configuration
export const db = drizzle(sql, {
  casing: "snake_case", // Example option; adjust based on your needs
});

