// console.log(import.meta.url);
// console.log(new URL("../../../db/index.ts", import.meta.url));

import db from "../../src/db/index";
import { users as usersTable } from "../../src/db/schema/schema";
// const db = require("../../index");
// const { users: usersTable } = require("../../schema");

// need to get the DATABASE_URL from the .env file

const seedUsers = async () => {
	await db.insert(usersTable).values({
		name: "John Doe",
		email: "JohnDoe@gmail.com",
		password: "password",
	});
};

seedUsers();
