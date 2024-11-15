import {
	pgTable,
	serial,
	integer,
	text,
	numeric,
	pgEnum,
} from "drizzle-orm/pg-core";
import { timestamps } from "./columns/helpers";
import users from "./user";

// Enums must be exported to be created in SQL
export const publishedStatusEnum = pgEnum("published_status", [
	"draft",
	"published",
]);

export const courses = pgTable("courses", {
	id: serial().primaryKey(),
	userId: integer("user_id")
		.notNull()
		.references(() => users.id), // Foreign key reference
	name: text().notNull(),
	description: text().notNull(),
	publishedStatus: publishedStatusEnum("published_status")
		.notNull()
		.default("draft"), // Enum column
	price: numeric("price", { precision: 10, scale: 2 }).default("0").notNull(), // Decimal with default value
	...timestamps,
});

export default courses;
