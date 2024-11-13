import { pgEnum, pgTable as table, timestamp, serial, text, numeric, integer } from "drizzle-orm/pg-core";


// columns.helpers.ts
const timestamps = {
	updated_at: timestamp(),
	created_at: timestamp().defaultNow().notNull(),
	deleted_at: timestamp(),
};

export const users = table("users", {
	id: serial().primaryKey(),
	name: text().notNull(),
	email: text("email").notNull().unique(), // Unique email column
	password: text("password").notNull(), // Password column
	...timestamps,
});

const publishedStatusEnum = pgEnum("published_status", ["draft", "published"]);

export const courses = table("courses", {
	id: serial().primaryKey(),
	userId: integer()
		.notNull()
		.references(() => users.id), // Foreign key reference
	name: text().notNull(),
	description: text().notNull(),
	publishedStatus: publishedStatusEnum().notNull().default("draft"), // Enum column
	price: numeric("price", { precision: 10, scale: 2 }).default("0").notNull(), // Decimal with default value
	...timestamps,
});

