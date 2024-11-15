import { Table, getTableName, sql } from "drizzle-orm";
import type { db } from "@/db";
import * as schema from "@/db/schema";

// Reset tables
async function resetTable(db: db, table: Table) {
	return db.execute(
		sql.raw(
			`TRUNCATE TABLE ${getTableName(table)} RESTART IDENTITY CASCADE`
		)
	);
}

export default resetTable;