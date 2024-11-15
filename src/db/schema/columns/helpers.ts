import { timestamp } from "drizzle-orm/pg-core";
import { pgEnum } from "drizzle-orm/pg-core";

export const timestamps = {
	updatedAt: timestamp("updated_at", { mode: "string" })
		.defaultNow()
		.notNull(),
	createdAt: timestamp("created_at", { mode: "string" })
		.defaultNow()
		.notNull(),
	deletedAt: timestamp("deleted_at", { mode: "string" }),
};

// Enums must be exported to be created in SQL
export const publishedStatusEnum = pgEnum("published_status", [
	"draft",
	"published",
]);
