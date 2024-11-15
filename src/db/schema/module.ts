import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { publishedStatusEnum } from "./columns/helpers";
import { timestamps } from "./columns/helpers";

const module = pgTable("modules", {
	id: serial().primaryKey(),
	name: text().notNull(),
	description: text(),
	publishedStatus: publishedStatusEnum("published_status")
		.notNull()
		.default("draft"), // Enum column
});

export default module;
