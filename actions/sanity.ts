"use server";

import { client } from "@/lib/sanity";
import { RegistrationFormData } from "@/lib/zod";

export const createRegistration = async (data: RegistrationFormData) => {
	const event = await client.fetch(
		`*[_type == "event" && slug.current == "awakenation-futsal-sports-fest-2025"][0]`
	);

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

	const registration = await client.create({
		_type: "registration",
		event: { _ref: event._id, _type: "reference" },
		submittedAt: new Date().toISOString(),
		registrationData: {
			participantName: data.managerName,
			participantEmail: data.managerEmail,
			teamName: data.teamName,
			institutionName: data.institutionName,
			managerName: data.managerName,
			managerPhoneNumber: data.managerPhone,
			managerWhatsAppNumber: data.managerWhatsApp,
			managerEmail: data.managerEmail,
			players: data.players,
			universityOfficialLogo: {
				_type: "file",
				asset: { _ref: logoAsset._id, _type: "reference" },
			},
			paymentReceipt: {
				_type: "file",
				asset: { _ref: receiptAsset._id, _type: "reference" },
			},
		},
	});

	console.log(registration);
};
