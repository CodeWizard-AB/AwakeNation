"use server";

import { client } from "@/lib/sanity";
import { RegistrationFormData } from "@/lib/zod";
import { v4 as uuidv4 } from "uuid";

export const createRegistration = async (data: RegistrationFormData) => {
	try {
		const event = await client.fetch(
			`*[_type == "event" && slug.current == "awakenation-futsal-sports-fest-2025"][0]`
		);

		if (!event || !event._id) {
			throw new Error("Event not found. Cannot create registration.");
		}

		// ? Upload files and get asset references
		const [logoAsset, receiptAsset] = await Promise.all([
			client.assets.upload("file", data.universityLogo, {
				filename: data.universityLogo.name,
				contentType: data.universityLogo.type,
			}),
			client.assets.upload("file", data.paymentReceipt, {
				filename: data.paymentReceipt.name,
				contentType: data.paymentReceipt.type,
			}),
		]);

		const footballDoc = {
			_id: uuidv4(),
			_type: "football",
			teamName: data.teamName,
			institutionName: data.institutionName,
			managerName: data.managerName,
			managerPhone: data.managerPhone,
			managerWhatsApp: data.managerWhatsApp,
			managerEmail: data.managerEmail,
			players: data.players.map((player) => ({
				_type: "player",
				_key: uuidv4(), // FIX: Use a UUID for a unique key
				...player,
			})),
			universityLogo: {
				_type: "file",
				asset: { _ref: logoAsset._id, _type: "reference" },
			},
			paymentReceipt: {
				_type: "file",
				asset: { _ref: receiptAsset._id, _type: "reference" },
			},
			event: {
				_ref: event._id,
				_type: "reference",
			},
		};

		const submissionDoc = {
			_type: "submission",
			event: {
				_ref: event._id,
				_type: "reference",
			},
			submittedAt: new Date().toLocaleDateString(),
			submissionData: {
				_ref: footballDoc._id,
				_type: "reference",
			},
		};

		// ? Create a transaction to handle multiple document creations
		const transaction = client.transaction();

		// ?Add both documents to the transaction
		transaction.create(footballDoc);
		transaction.create(submissionDoc);

		// ? Commit the entire transaction to Sanity
		await transaction.commit();
		return { success: true, message: "Registration created successfully." };
	} catch (error) {
		throw error;
	}
};
