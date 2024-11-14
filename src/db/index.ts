import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

// config({ path: ".env" }); // or .env.local

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
	throw new Error("DATABASE_URL is not defined");
}

console.log("DATABASE_URL", databaseUrl); // debugging

const sql = neon(databaseUrl);

// const options = {casing: "snake_case"};

// Drizzle configuration
const db = drizzle(sql, {
	// casing: "snake_case", // Example option; adjust based on your needs
});

export default db;
