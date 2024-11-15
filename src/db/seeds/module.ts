import type { db } from "@/db";
import * as schema from "@/db/schema";
import { faker } from "@faker-js/faker";

const seed = async (db: db) => {
	const spoofArray = [];

	for (let i = 0; i < 30; i++) {
		const spoofData = {
			name: faker.company.buzzPhrase(),
			text: faker.lorem.sentences(),
			publishedStatus: "published",
		};
		spoofArray.push(spoofData);
	}

	try {
		await db.insert(schema.module).values(spoofArray);
		console.log("users succesfully seeded...");
	} catch (error) {
		console.error("Error inserting courses:", error);
	}
};

export default seed;
