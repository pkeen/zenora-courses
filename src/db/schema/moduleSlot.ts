import { pgTable, serial, integer } from "drizzle-orm/pg-core";
import { timestamps } from "./columns/helpers";
import module from "./module";
import lesson from "./lesson";

const moduleSlot = pgTable("module_slots", {
	id: serial().primaryKey(),
	moduleId: integer("module_id").references(() => module.id),
	lessonId: integer("lesson_id").references(() => lesson.id),
	ordering: integer("ordering"),
	...timestamps,
});

export default moduleSlot;
