"use client";
import BodyContainer from "@/components/bodyContainer";
import Title from "@/components/title";
import Image from "next/image";
import { useState } from "react";

type Experience = {
	company: string;
	role: string;
	period: string;
	description: string[];
	skills: string[];
};

const experiences: Experience[] = [
	{
		company: "SenseUp",
		role: "FullStack Developer",
		period: "Dec 2023 – Present",
		description: [
			"Contributed to the architecture and development of 4 custom solutions in the AgroInd project, using React, Node.js, TypeScript, and Azure to build Web and Mobile (PWA) applications.",
			"Optimized internal systems through refactoring and new feature implementation using React, Next.js, Express, Prisma, Azure, GCP, Docker, and Kubernetes.",
			"Applied best practices such as Clean Code, Domain-Driven Design (DDD), Clean Architecture, and Agile methodologies.",
		],
		skills: [
			"React",
			"Node.js",
			"TypeScript",
			"Azure",
			"Next.js",
			"Express",
			"Prisma",
			"GCP",
			"Docker",
			"Kubernetes",
		],
	},
	{
		company: "Growth Venture",
		role: "FrontEnd Developer",
		period: "Aug 2022 – Sep 2023",
		description: [
			"Developed and launched multiple web projects using Next.js, Tailwind, Styled Components, React-query, Bootstrap, and SCSS.",
			"Built customized landing pages in WordPress and contributed to backend improvements using Node.js and Nest.js.",
		],
		skills: [
			"Next.js",
			"Tailwind",
			"Styled Components",
			"React-query",
			"Bootstrap",
			"SCSS",
			"WordPress",
			"Node.js",
			"Nest.js",
		],
	},
	{
		company: "Multicast",
		role: "BackEnd Developer",
		period: "Nov 2021 – Aug 2022",
		description: [
			"Participated in the development of a triage system for self-service healthcare kiosks, using Node.js for the backend and Vue.js for the frontend.",
			"Worked with Azure and Docker for development, deployment, environment configuration, and container versioning.",
		],
		skills: ["Node.js", "Vue.js", "Azure", "Docker"],
	},
	{
		company: "Recovery Brazil",
		role: "FrontEnd Developer",
		period: "Nov 2020 – Nov 2021",
		description: [
			"Developed the full frontend for the GTA RP server 'Recovery City', enhancing performance through bug fixing and new feature implementation using HTML, CSS, JavaScript, jQuery, and Lua.",
			"Contributed to the 'Drop Your Jeans' virtual campaign by John John, designing missions and features to boost player engagement.",
		],
		skills: ["HTML", "CSS", "JavaScript", "jQuery", "Lua"],
	},
	{
		company: "Freelancer",
		role: "FullStack Developer",
		period: "Jun 2019 – Nov 2020",
		description: [
			"Developed custom Lua scripts for GTA RP (FiveM) servers, using HTML, CSS, JavaScript, Lua, and jQuery to deliver tailored gameplay features.",
			"Built websites for showcasing and selling scripts using React.js, focusing on responsiveness, performance, and user experience.",
		],
		skills: ["Lua", "HTML", "CSS", "JavaScript", "jQuery", "React.js"],
	},
];

export default function Experience() {
	const [activeTab, setActiveTab] = useState("0");

	return (
		<BodyContainer id="experiences" bgColor="bg-[#060d18]">
			<Title
				title="Professional Experience"
				subtitle="Know a little more about my experience and skills as a developer"
			/>
			<div className="flex flex-col md:flex-row gap-8 min-h-[360px]">
				<div className="rounded-lg md:w-72 flex flex-wrap h-full gap-2">
					{experiences.map((exp, index) => (
						<button
							type="button"
							key={index}
							onClick={() => setActiveTab(`${index}`)}
							data-state={activeTab === `${index}` ? "active" : "inactive"}
							className="h-14 bg-gradient-to-r data-[state=active]:from-[#231f5f] data-[state=active]:to-[#043a50] data-[state=active]:border-l-4 data-[state=active]:border-l-purple-500 hover:border-l-4 hover:border-l-purple-500 border-l-4 border-l-transparent cursor-pointer rounded-md w-full transition-all duration-300"
						>
							<div className="text-left ml-2">
								<span className="block font-medium">{exp.company}</span>
								<span className="text-xs text-white/50 block">{exp.period}</span>
							</div>
						</button>
					))}
				</div>

				<div className="w-full">
					{experiences.map((exp, index) => (
						<div key={index} className={`${activeTab === `${index}` ? "block" : "hidden"}`}>
							<div className="bg-[#1b222f] border border-white/10 p-6 rounded-xl hover:border-[#7254e08e] transition-all duration-300">
								<div className="flex items-start justify-between mb-4">
									<div>
										<h4 className="text-xl font-semibold text-[#01d2f7] ">{exp.role}</h4>
										<p className="flex items-center">{exp.company}</p>
										<p className="text-[#c2c4c7] text-sm flex items-center mt-2">
											<Image
												src="/calendar.svg"
												className="mr-2"
												alt="Calendar"
												width={17.5}
												height={19}
											/>
											{exp.period}
										</p>
									</div>
								</div>

								{exp.description.map((description, index) => (
									<p key={index} className="text-[#c2c4c7] text-sm mb-4">
										{description}
									</p>
								))}

								<div className="flex flex-wrap gap-2">
									{exp.skills.map((skill) => (
										<div
											key={skill}
											className="bg-[#1c1b37] p-2 text-xs border border-[#362b6d] rounded-xl text-[#7a54e0]"
										>
											{skill}
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</BodyContainer>
	);
}
