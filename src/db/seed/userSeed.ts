import db from "@/db";
import { users as usersTable } from "@/db/schema";
// const db = require("../../index");
// const { users: usersTable } = require("../../schema");

console.log("Seeding users...");
console.log("database_URL", process.env.DATABASE_URL);

const seedUsers = async () => {
	try {
		console.log("Inserting user...");
		const result = await db.insert(usersTable).values({
			name: "Elon Musk",
			email: "Elon@x.com",
			password: "password",
		});
		console.log("User inserted successfully:", result);
	} catch (error) {
		console.error("Error inserting user:", error);
	} finally {
        console.log("✅ User seeding completed");
    }
};

seedUsers();

export default seedUsers;
