/*
 * This script is used to push the database schema to the database.
 * It is intended to be used in development and production environments.
 */

import { env } from "@/env";
import {logInfo, logSuccess, logWarning, logError, logBreak} from "../chalk";
import chalk from "chalk";

const { execSync } = require("child_process");
const fs = require("fs");
const readline = require("readline");

// // Helper functions
// const logInfo = (message) => console.log(chalk.blue(message));
// const logSuccess = (message) => console.log(chalk.green(message));
// const logWarning = (message) => console.log(chalk.yellow(message));
// const logError = (message) => console.log(chalk.red(message));
// const logBreak = () => console.log("\n" + "-".repeat(50) + "\n");

// Function to push database schema
const pushDatabaseSchema = () => {
	try {
		logInfo("Pushing database schema...");
		execSync(
			`pnpm exec drizzle-kit push --dialect=postgresql --schema=./src/db/schema.ts --url="${env.DATABASE_URL}"`,
			{ stdio: "inherit" }
		);
		logSuccess("Database schema successfully pushed!");
	} catch (error: any) {
		logError("Error pushing database schema:");
		console.error(error.message);
		process.exit(1);
	}
};

// // Load the specified .env file
// const args = process.argv.slice(2);
// const envFile = args[0] || ".env.development";

// if (!fs.existsSync(envFile)) {
// 	logError(`Environment file ${envFile} does not exist`);
// 	process.exit(1);
// }

// dotenv.config({ path: envFile });

// // Validate environment variables
// if (!process.env.NODE_ENV) {
// 	logError("NODE_ENV is not set! Aborting.");
// 	process.exit(1);
// }

// if (!process.env.DATABASE_URL) {
// 	logError("DATABASE_URL is not set! Aborting.");
// 	process.exit(1);
// }

// // Display environment details
// logBreak();
// logInfo(`Environment File Loaded: ${chalk.bold(envFile)}`);
// logInfo(`NODE_ENV: ${chalk.bold(process.env.NODE_ENV)}`);
// logInfo(`DATABASE_URL: ${chalk.dim(process.env.DATABASE_URL)}`);
// logBreak();

// Safeguard for production mode
if (process.env.NODE_ENV === "production") {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	logWarning(
		"WARNING: You are about to push the database schema in production mode."
	);
	rl.question(
		chalk.yellow("Type 'yes' to confirm and proceed: "),
		(answer: string) => {
			logBreak();
			if (answer.toLowerCase() !== "yes") {
				logError("Operation aborted.");
				rl.close();
				process.exit(0);
			}

			logInfo("Proceeding with database schema push...");
			rl.close();
			pushDatabaseSchema();
		}
	);
} else {
	logInfo("Non-production environment detected. Proceeding...");
	pushDatabaseSchema();
}
