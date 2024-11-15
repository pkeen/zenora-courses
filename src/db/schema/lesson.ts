import { integer, PgTable, pgTable, serial, text } from "drizzle-orm/pg-core";
import user from "./user";
import { timestamps, publishedStatusEnum } from "./columns/helpers";

const lesson = pgTable("lessons", {
	id: serial().primaryKey(),
	userId: integer("user_id")
		.references(() => user.id)
		.notNull(),
	name: text().notNull(),
	text: text(),
	videoUrl: text("video_url"),
	publishedStatus: publishedStatusEnum("published_status")
		.notNull()
		.default("draft"), // Enum column
	...timestamps,
});

export default lesson;
