import db from "@/db";
import * as seeds from "@/db/seeds";
import { logError, logInfo, logSuccess, logWarning, logBreak } from "../chalk";
import * as schema from "@/db/schema";
import resetTable from "./trancateTables";

// reset tables
for (const table of [
	schema.user,
	schema.course,
	schema.module,
    schema.lesson,
    schema.moduleSlot,
    schema.courseSlot,
]) {
	// await db.delete(table); // clear tables without truncating / resetting ids
	await resetTable(db, table);
}

// seed tables
const seed = async () => {
	try {
		await seeds.user(db);
        await seeds.course(db);
        await seeds.module(db);
        await seeds.lesson(db);
        await seeds.moduleSlot(db);
        await seeds.courseSlot(db);
		logBreak();
		logSuccess("Database seeded successfully!");
	} catch (err) {
		console.error("Error seeding database:", err);
	}
};

seed();
