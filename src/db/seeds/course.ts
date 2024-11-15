import type { db } from "@/db";
import * as schema from "@/db/schema";
import { faker } from "@faker-js/faker";

const seed = async (db: db) => {
	const spoofCourseArray = [];

	for (let i = 0; i < 20; i++) {
		const spoofCourse = {
			userId: Math.floor(Math.random() * 10) + 1,
			name: faker.company.buzzPhrase(), // 'cultivate synergistic e-markets'
			description: faker.lorem.sentences(),
			publishedStatus: "published",
			price: Math.random() < 0.5 ? 0 : faker.commerce.price({ max: 200 }),
		};
		spoofCourseArray.push(spoofCourse);
	}

	try {
		await db.insert(schema.course).values(spoofCourseArray);
		console.log("users succesfully seeded...");
	} catch (error) {
		console.error("Error inserting courses:", error);
	}
};

export default seed;
