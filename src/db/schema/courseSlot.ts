import { pgTable, serial, integer } from "drizzle-orm/pg-core";
import course from "./course";
import { timestamps } from "./columns/helpers";
import module from "./module";
import lesson from "./lesson";

const courseSlot = pgTable("course_slots", {
	id: serial().primaryKey(),
	courseId: integer("course_id")
		.notNull()
		.references(() => course.id),
	moduleId: integer("module_id").references(() => module.id),
	lessonId: integer("lesson_id").references(() => lesson.id),
	ordering: integer("ordering"),
	...timestamps,
});

export default courseSlot;
