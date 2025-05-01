"use server";
import { createTransport } from "nodemailer";

export type FormState = {
	name: string;
	email: string;
	subject: string;
	message: string;
	success?: boolean;
	error?: string;
};

export async function handleSubmit(prevState: FormState, formData: FormData): Promise<FormState> {
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const subject = formData.get("subject") as string;
	const message = formData.get("message") as string;

	const newState: FormState = {
		name,
		email,
		subject,
		message,
	};

	try {
		const transporter = createTransport({
			service: "gmail",
			auth: {
				user: "vinicius.benfica.ruy@gmail.com",
				pass: process.env.APP_PASSWORD,
			},
		});

		await transporter.sendMail({
			from: "vinicius.benfica.ruy@gmail.com",
			to: "vinicius.benfica.ruy@gmail.com",
			subject: `Contact Form: ${subject}`,
			text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
			html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Subject:</strong> ${subject}</p>
				<p><strong>Message:</strong> ${message}</p>
			`,
		});

		return {
			name: "",
			email: "",
			subject: "",
			message: "",
			success: true,
			error: undefined,
		};
	} catch (error) {
		return {
			...newState,
			success: false,
			error: "Failed to send email. Please try again.",
		};
	}
}
