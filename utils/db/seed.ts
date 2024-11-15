import db from "@/db";
import * as seeds from "@/db/seeds";
import { logError, logInfo, logSuccess, logWarning, logBreak } from "../chalk";

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
