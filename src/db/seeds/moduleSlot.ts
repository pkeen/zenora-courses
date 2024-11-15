import type { db } from "@/db";
import * as schema from "@/db/schema";
import { faker } from "@faker-js/faker";

const seed = async (db: db) => {
	const spoofArray = [];

	for (let i = 0; i < 50; i++) {
		let spoofData = {
			moduleId: Math.floor(Math.random() * 30) + 1,
			ordering: Math.floor(Math.random() * 10) + 1,
			lessonId: Math.floor(Math.random() * 50) + 1,
		};

		spoofArray.push(spoofData);
	}

	try {
		await db.insert(schema.moduleSlot).values(spoofArray);
		console.log("users succesfully seeded...");
	} catch (error) {
		console.error("Error inserting courses:", error);
	}
};

export default seed;
