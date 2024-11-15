import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { timestamps } from "./columns/helpers";

const users = pgTable("users", {
	id: serial().primaryKey(),
	name: text().notNull(),
	email: text("email").notNull().unique(), // Unique email column
	password: text("password").notNull(), // Password column
	...timestamps,
});

export default users;
