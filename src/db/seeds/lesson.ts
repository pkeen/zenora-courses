import type { db } from "@/db";
import * as schema from "@/db/schema";
import { faker } from "@faker-js/faker";

const seed = async (db: db) => {
	const spoofArray = [];

	for (let i = 0; i < 60; i++) {
		const spoofData = {
			userId: Math.floor(Math.random() * 10) + 1,
			name: faker.company.buzzPhrase(),
			text: faker.lorem.sentences(),
			isPublished: "published",
			// isFree: faker.datatype.boolean(0.3),
			videoLink: faker.internet.url(),
		};
		spoofArray.push(spoofData);
	}

	try {
		await db.insert(schema.lesson).values(spoofArray);
		console.log("users succesfully seeded...");
	} catch (error) {
		console.error("Error inserting courses:", error);
	}
};

export default seed;
