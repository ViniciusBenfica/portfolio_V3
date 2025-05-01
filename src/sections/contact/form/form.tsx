"use client";
import { type FormState, handleSubmit } from "@/sections/contact/form/formAction";
import Form from "next/form";
import { useActionState } from "react";

export default function FormContact() {
	const [state, formAction, isPending] = useActionState<FormState, FormData>(handleSubmit, {
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	return (
		<>
			{(state.success !== undefined || state.error) && (
				<div
					className={`p-3 mb-4 rounded-md ${state.success ? "bg-green-900/50 text-green-300" : "bg-red-900/50 text-red-300"}`}
				>
					{state.success ? "Message sent successfully! I'll get back to you soon." : state.error}
				</div>
			)}
			<Form action={formAction} className="space-y-4">
				<div>
					<label htmlFor="name" className="block text-sm font-medium mb-1">
						Name
					</label>

					<input
						id="name"
						name="name"
						placeholder="Your name"
						defaultValue={state.name}
						required
						className="bg-white/5 border-white/10 focus:border-[#00D9FF] focus:outline-none h-10 w-full rounded-md border px-3 py-2 md:text-sm"
					/>
				</div>

				<div>
					<label htmlFor="email" className="block text-sm font-medium mb-1">
						Email
					</label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="your.email@example.com"
						defaultValue={state.email}
						required
						className="bg-white/5 border-white/10 focus:border-[#00D9FF] focus:outline-none h-10 w-full rounded-md border px-3 py-2 md:text-sm"
					/>
				</div>

				<div>
					<label htmlFor="subject" className="block text-sm font-medium mb-1">
						Subject
					</label>
					<input
						id="subject"
						name="subject"
						placeholder="Subject of the message"
						defaultValue={state.subject}
						required
						className="bg-white/5 border-white/10 focus:border-[#00D9FF] focus:outline-none h-10 w-full rounded-md border px-3 py-2 md:text-sm"
					/>
				</div>

				<div>
					<label htmlFor="message" className="block text-sm font-medium mb-1">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						placeholder="Your message..."
						rows={5}
						defaultValue={state.message}
						required
						className="bg-white/5 border-white/10 focus:border-[#00D9FF] focus:outline-none w-full rounded-md border px-3 py-2 md:text-sm"
					/>
				</div>

				<button
					type="submit"
					disabled={isPending}
					className="w-full h-10 text-sm font-semibold cursor-pointer rounded-md bg-gradient-to-r from-[#02c6ea] via-[#348df4] to-[#6A3DE8] hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
				>
					{isPending ? "Sending..." : "Send Message"}
				</button>
			</Form>
		</>
	);
}
