"use client";

import BodyContainer from "@/components/bodyContainer";
import Title from "@/components/title";
import Link from "next/link";

interface Project {
	title: string;
	subtitle: string;
	description: string;
	tags: string[];
	liveUrl: string;
	githubUrl: string;
}

const projects: Project[] = [
	{
		title: "TextIATransform",
		subtitle: "TEXT TRANSFORMATION WITH AI",
		description:
			"A web application showcasing the power of AI in text transformation. It enables dynamic text manipulation.",
		tags: ["Next", "TypeScript", "Tailwind CSS", "Groq AI"],
		liveUrl: "https://text-ia-transform.vercel.app",
		githubUrl: "https://github.com/ViniciusBenfica/TextIATransform",
	},
	{
		title: "Contact Input Component",
		subtitle: "REUSABLE COMPONENT",
		description:
			"A React component for contact input with support for autocomplete, multiple selections, and custom avatars.",
		tags: ["React", "TypeScript", "NPM"],
		liveUrl: "https://www.npmjs.com/package/contact-input-component",
		githubUrl: "https://github.com/ViniciusBenfica/contact-input-component",
	},
	{
		title: "Watermark Frontend",
		subtitle: "WEB APPLICATION FOR WATERMARKING",
		description:
			"A web application built for adding watermarks to images in an interactive manner.",
		tags: ["Next", "TypeScript", "Tailwind", "Docker"],
		liveUrl: "https://watermark-frontend.vercel.app",
		githubUrl: "https://github.com/ViniciusBenfica/watermark-frontend",
	},
	{
		title: "Watermark Backend",
		subtitle: "API FOR WATERMARK PROCESSING",
		description: "A backend API for processing images and adding watermarks.",
		tags: ["Node", "TypeScript", "Docker"],
		liveUrl: "https://watermark-frontend.vercel.app",
		githubUrl: "https://github.com/ViniciusBenfica/watermark-backend",
	},
	{
		title: "Discord Telepathy",
		subtitle: "MINI GAME FOR DISCORD",
		description:
			"A game built for Discord where players try to guess which League of Legends champion others are thinking of.",
		tags: ["TypeScript", "Discord API"],
		liveUrl: "",
		githubUrl: "https://github.com/ViniciusBenfica/discord-telepathy",
	},
];

export default function Projects() {
	return (
		<BodyContainer id="projects" bgColor="bg-[#0f1624]">
			<Title title="Projects" subtitle="Explore some of the projects I've worked on" />

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project, index) => (
					<div
						key={index}
						className="bg-white/5 backdrop-blur-md border border-white/10 group rounded-md h-full flex flex-col"
					>
						<div className="p-6 flex-grow">
							{project.subtitle && (
								<div className="text-[#6039D2] text-sm font-medium tracking-wider uppercase mb-2">
									{project.subtitle}
								</div>
							)}
							<h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-500 transition-colors">
								{project.title}
							</h3>
							<p className="text-[#c2c4c7] text-sm mb-6">{project.description}</p>

							<div className="flex flex-wrap gap-2">
								{project.tags.map((tag: string) => (
									<div
										key={tag}
										className="bg-white/5 border-white/10 border rounded-full font-medium px-3 py-1 text-sm"
									>
										{tag}
									</div>
								))}
							</div>
						</div>

						<div className="p-6 border-t border-white/10 flex flex-wrap gap-3">
							{project.liveUrl && (
								<Link
									target="_blank"
									href={project.liveUrl}
									className="bg-cyan-500 py-2 px-3 font-medium text-xs cursor-pointer rounded-md hover:opacity-80 text-white transition-opacity"
								>
									Live Demo
								</Link>
							)}

							{project.githubUrl && (
								<Link
									target="_blank"
									href={project.githubUrl}
									className="bg-[#041124] py-2 px-3 text-[#00D9FF] border border-cyan-500 font-medium text-xs cursor-pointer rounded-md hover:opacity-80 transition-opacity flex items-center justify-center"
								>
									GitHub
								</Link>
							)}
						</div>
					</div>
				))}
			</div>
		</BodyContainer>
	);
}
