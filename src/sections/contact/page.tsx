import BodyContainer from "@/components/bodyContainer";
import Title from "@/components/title";
import FormContact from "@/sections/contact/form/form";
import { Github, Linkedin, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
	return (
		<BodyContainer id="contact" bgColor="bg-[#0f1624]">
			<Title
				title="Get in Touch"
				subtitle="Let's work together? Contact me through the form or my social media"
			/>
			<div className="grid md:grid-cols-2 items-start justify-items-center max-w-[1050px] gap-10 mx-auto">
				<div className="bg-[#1b222f] w-full border border-white/10 overflow-hidden rounded-lg relative max-w-[490px]">
					<div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#01d8ff] via-[#6A3DE8] to-transparent" />
					<div className="p-8 space-y-6">
						<div>
							<h3 className="text-xl font-medium mb-6 text-[#06daff]">Contact Information</h3>
						</div>

						<div className="flex items-start">
							<Mail className="mr-4 mt-1 text-[#00D9FF] h-5 w-5" />
							<div>
								<h4 className="font-medium mb-1">Email</h4>
								<Link
									href="mailto:vinicius.benfica.ruy@gmail.com"
									className="text-[#c2c4c7] hover:text-[#00D9FF] transition-colors"
								>
									vinicius.benfica.ruy@gmail.com
								</Link>
							</div>
						</div>
						<div className="flex items-start">
							<Phone className="mr-4 mt-1 text-[#00D9FF] h-5 w-5" />
							<div>
								<h4 className="font-medium mb-1">Phone</h4>
								<Link
									href="tel:+5527999396493"
									className="text-[#c2c4c7] hover:text-[#00D9FF] transition-colors"
								>
									+55 (27) 99939-6493
								</Link>
							</div>
						</div>
						<div className="flex items-start">
							<MapPin className="mr-4 mt-1 text-[#EF2A82] h-5 w-5" />
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
									aria-label="GitHub"
									className="p-2 bg-[#323844] rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
								>
									<Github className="h-5 w-5" />
								</Link>
								<Link
									href="https://www.linkedin.com/in/vinicius-benfica/"
									target="_blank"
									aria-label="LinkedIn"
									className="p-2 bg-[#323844] rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
								>
									<Linkedin className="h-5 w-5" />
								</Link>
								<Link
									href="mailto:vinicius.benfica.ruy@gmail.com"
									aria-label="Email"
									className="p-2 bg-[#323844] rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
								>
									<Mail className="h-5 w-5" />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-[#1b222f] w-full border border-white/10 overflow-hidden rounded-lg max-w-[490px]">
					<div className="p-8">
						<h3 className="text-xl font-medium mb-6 flex items-center">
							<MessageSquare className="mr-4 mt-1 h-5 w-5 text-[#00D9FF]" />
							Send a message
						</h3>

						<FormContact />
					</div>
				</div>
			</div>
		</BodyContainer>
	);
}
