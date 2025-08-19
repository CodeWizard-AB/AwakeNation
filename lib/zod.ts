import { z } from "zod";

// ? Zod schema for a single player
export const playerSchema = z.object({
	name: z.string().min(1, "Player name is required."),
	jerseySize: z.enum(["M", "L", "XL", "XXL"], {
		required_error: "Player jersey size is required.",
	}),
	position: z.enum(["Goalkeeper", "Defender", "Midfielder", "Striker"], {
		required_error: "Player position is required.",
	}),
});

// ? Zod schema for the entire registration form
export const registrationSchema = z.object({
	teamName: z
		.string()
		.min(1, "Team Name is required.")
		.min(2, "Team Name must be at least 2 characters."),
	institutionName: z
		.string()
		.min(1, "Institution Name is required.")
		.min(2, "Institution Name must be at least 2 characters."),
	managerName: z
		.string()
		.min(1, "Manager Name is required.")
		.min(2, "Manager Name must be at least 2 characters."),
	managerPhone: z
		.string()
		.regex(/^01[3-9]\d{8}$/, "Invalid Bangladeshi phone number format."),
	managerWhatsApp: z
		.string()
		.regex(/^01[3-9]\d{8}$/, "Invalid Bangladeshi phone number format."),
	managerEmail: z
		.string()
		.min(1, "Manager Email is required.")
		.email("Invalid email address."),
	players: z
		.array(playerSchema)
		.min(1, "A minimum of 8 players is required.")
		.max(10, "A maximum of 10 players is allowed."),
	paymentReceipt: z.instanceof(File, {
		message: "Payment receipt file is required.",
	}),
	universityLogo: z.instanceof(File, {
		message: "University official logo is required.",
	}),
});

// ? A utility type to infer the TypeScript type from the schema
export type RegistrationFormData = z.infer<typeof registrationSchema>;
