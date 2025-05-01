import BodyContainer from "@/components/bodyContainer";
import Title from "@/components/title";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
	return (
		<BodyContainer bgColor="bg-[#0f1624]">
			<Title
				title="Get in Touch"
				subtitle="Let's work together? Contact me through the form or my social media"
			/>
			<div id="contact" className="grid md:grid-cols-2 gap-10 items-start">
				<div>
					<div className="bg-[#1b222f] border border-white/10 overflow-hidden rounded-lg relative">
						<div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#01d8ff] via-[#6A3DE8] to-transparent" />
						<div className="p-8 space-y-6">
							<div>
								<h3 className="text-xl font-medium mb-6 bg-gradient-to-r from-[#06daff] to-[#65e8f9] bg-clip-text text-transparent">
									Contact Information
								</h3>
							</div>

							<div className="flex items-start">
								<Image
									src="/email.svg"
									alt="Email"
									className="mr-4 mt-1"
									width={19.5}
									height={15}
								/>
								<div>
									<h4 className="font-medium mb-1">Email</h4>
									<a
										href="mailto:vinicius.benfica.ruy@gmail.com"
										className="text-[#c2c4c7] hover:text-[#00D9FF] transition-colors"
									>
										vinicius.benfica.ruy@gmail.com
									</a>
								</div>
							</div>
							<div className="flex items-start">
								<Image
									src="/phone.svg"
									alt="Phone"
									className="mr-4 mt-1"
									width={18.75}
									height={18.75}
								/>
								<div>
									<h4 className="font-medium mb-1">Phone</h4>
									<a
										href="tel:+5527999396493"
										className="text-[#c2c4c7] hover:text-[#00D9FF] transition-colors"
									>
										+55 (27) 99939-6493
									</a>
								</div>
							</div>
							<div className="flex items-start">
								<Image
									src="/location.svg"
									alt="Location"
									className="mr-4 mt-1"
									width={16.5}
									height={21}
								/>
								<div>
									<h4 className="font-medium mb-1">Location</h4>
									<p className="text-[#c2c4c7]">Espirito Santo, ES - Brazil</p>
								</div>
							</div>

							<div>
								<h4 className="font-medium mb-3">Social Media</h4>
								<div className="flex space-x-4">
									<Link
										href="https://github.com/viniciusbenfica"
										target="_blank"
										className="p-2 bg-[#323844] rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
									>
										<Image src="/github.svg" alt="Github" width={20.25} height={20.25} />
									</Link>
									<Link
										href="https://www.linkedin.com/in/vinicius-benfica/"
										target="_blank"
										className="p-2 bg-[#323844] rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
									>
										<Image src="/linkedin.svg" alt="Linkedin" width={19.5} height={19.5} />
									</Link>
									<Link
										href="mailto:vinicius.benfica.ruy@gmail.com"
										className="p-2 bg-[#323844] rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
									>
										<Image src="/email2.svg" alt="Email" width={19.5} height={15} />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div className="bg-[#1b222f] border border-white/10 overflow-hidden rounded-lg">
						<div className="p-8">
							<h3 className="text-xl font-medium mb-6 flex items-center">
								<Image src="/chat.svg" alt="Chat" className="mr-4 mt-1" width={19.5} height={18} />
								Send a message
							</h3>

							<form className="space-y-4">
								<div>
									<label htmlFor="name" className="block text-sm font-medium mb-1">
										Name
									</label>

									<input
										id="name"
										name="name"
										placeholder="Your name"
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
										required
										className="bg-white/5 border-white/10 focus:border-[#00D9FF] focus:outline-none w-full rounded-md border px-3 py-2 md:text-sm"
									/>
								</div>

								<button
									type="submit"
									className="w-full h-10 text-sm font-semibold cursor-pointer rounded-md bg-gradient-to-r from-[#02c6ea] via-[#348df4] to-[#6A3DE8] hover:opacity-90"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</BodyContainer>
	);
}
