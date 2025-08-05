"use client";
import BodyContainer from "@/components/bodyContainer";
import Title from "@/components/title";
import { Calendar } from "lucide-react";
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
			"Contributed to the architecture and development of 4 custom solutions using React, Node, PostgreSQL, MySQL, Prisma, TypeScript, and Azure to deliver scalable Web and Mobile (PWA) applications.",
			"Designed and implemented a job scheduler with Cron and BullMQ allowing clients to create, manage, and monitor scheduled jobs with real-time logging and execution tracking.",
			"Migrated the event-driven architecture from Azure Event Hubs to Google Cloud Pub/Sub, reducing operational costs.",
			"Reduced Express API vulnerabilities from 97 to 3 by applying security best practices and managing dependency versions effectively.",
		],
		skills: [
			"React",
			"Node",
			"TypeScript",
			"Azure",
			"Next",
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
			"Participated from the ground up in the development and launch of 11 web projects using Next, React, Tailwind CSS, Styled Components, React Query, Bootstrap, and SCSS.",
			"Built custom landing pages in WordPress and implementing responsive design.",
			"Contributed to backend enhancements using Node, Nest, and Strapi, improving API performance and maintainability.",
			"Achieved 95+ SEO scores in Google Lighthouse across multiple projects by applying best practices in accessibility, metadata structure, and performance.",
		],
		skills: [
			"Next",
			"Tailwind",
			"Styled Components",
			"React-query",
			"Bootstrap",
			"SCSS",
			"WordPress",
			"Node",
			"Nest",
		],
	},
	{
		company: "Multicast",
		role: "BackEnd Developer",
		period: "Nov 2021 – Aug 2022",
		description: [
			"Participated in the development of a triage system for self-service healthcare kiosks using Node, Vue, Azure, and Docker.",
			"Managed environment setup, deployment workflows, and container versioning using Azure and Docker across the entire development lifecycle.",
		],
		skills: ["Node", "Vue", "Azure", "Docker"],
	},
	{
		company: "Recovery Brazil",
		role: "FrontEnd Developer",
		period: "Nov 2020 – Nov 2021",
		description: [
			"Developed the full frontend for the GTA RP server Recovery City, which serves over 10,000 users, enhancing performance and stability by fixing bugs and delivering new features using HTML, CSS, JavaScript, MariaDB, jQuery, and Lua.",
			"Contributed to the ”Drop Your Jeans” virtual campaign by John John, integrated within Recovery City as an immersive, in-game branded experience",
		],
		skills: ["HTML", "CSS", "JavaScript", "jQuery", "Lua"],
	},
	{
		company: "Freelancer",
		role: "FullStack Developer",
		period: "Jun 2019 – Nov 2020",
		description: [
			"Developed custom Lua scripts and dynamic UI components for GTA RP (FiveM) servers using Lua, HTML, CSS, JavaScript, and jQuery.",
			"Built websites using React to showcase and sell scripts, focusing on modern design and user experience.",
		],
		skills: ["Lua", "HTML", "CSS", "JavaScript", "jQuery", "React"],
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
			<div className="flex flex-col md:flex-row gap-8 min-h-[370px]">
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
											<Calendar className="mr-2 h-4 w-4" />
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
