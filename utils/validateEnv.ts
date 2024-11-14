// Currently unused

const dotenv = require("dotenv");
const fs = require("fs");

if (!process.env.NODE_ENV) {
	throw new Error("NODE_ENV is not set! Aborting.");
}

// Determine the correct .env file
const envFile = process.env.ENV_FILE || ".env";
// console.log("Using environment file:", envFile); // for debugging

if (!fs.existsSync(envFile)) {
	throw new Error(`Environment file ${envFile} does not exist`);
}

// Load the environment variables
dotenv.config({ path: envFile });

// Validate NODE_ENV
if (!process.env.NODE_ENV) {
	throw new Error("NODE_ENV is not set!");
}

// // Display the current environment
// console.log(`Running in ${process.env.NODE_ENV} environment`);

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set!");
}

// console.log("Database URL:", process.env.DATABASE_URL);


// Warn if running in production
if (process.env.NODE_ENV === "production") {
	console.log(
		"WARNING: You are about to apply migrations to the PRODUCTION database."
	);
	const prompt = require("prompt-sync")();
	const confirmation = prompt("Type 'yes' to continue: ");
	if (confirmation !== "yes") {
		console.log("Migration aborted.");
		process.exit(1);
	}
}


// Debug information
console.log(`Environment File Loaded: ${envFile}`);
console.log(`Running in ${process.env.NODE_ENV} environment`);
console.log(`Database URL: ${process.env.DATABASE_URL}`);