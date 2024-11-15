import { NextResponse } from "next/server";

import seedUsers from "@/db/seed/userSeed";
import db from "@/db";
import { users as usersTable } from "@/db/schema";

export const GET = async (req) => {
	try {
		seedUsers();
		const users = await db.select().from(usersTable); // Select query
		console.log(users);
		return new Response(JSON.stringify(users), { status: 200 });
	} catch (err) {
		console.error("Error fetching courses:", err);
		return new Response("Failed to fetch courses", { status: 500 });
	}
};
