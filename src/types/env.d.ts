import "next";

declare module "next" {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "development" | "production" | "test" | "green";
		}
	}
}
