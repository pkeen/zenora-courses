import type { db } from "@/db";
import * as schema from "@/db/schema";
import { faker } from "@faker-js/faker";

const seedUsers = async (db: db) => {
	const spoofUserArray = [];

	for (let i = 0; i < 10; i++) {
		const spoofUser = {
			name: faker.person.fullName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
		};
		spoofUserArray.push(spoofUser);
	}

	try {
		await db.insert(schema.user).values(spoofUserArray);
		console.log("users succesfully seeded...");
	} catch (error) {
		console.error("Error inserting user:", error);
	}
};
// seedUsers();

export default seedUsers;
