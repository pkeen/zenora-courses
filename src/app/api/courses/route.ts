import db from "@/db";
import { courses as coursesTable } from "@/db/schema";

export async function GET(req: Request) {
	try {
		const courses = await db.select().from(coursesTable); // Select query
		return new Response(JSON.stringify(courses), { status: 200 });
	} catch (err) {
		console.error("Error fetching courses:", err);
		return new Response("Failed to fetch courses", { status: 500 });
	}
}
