import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = "2023-05-03";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
	throw new Error("Missing Sanity credentials in .env file");
}

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: true,
	token,
});
