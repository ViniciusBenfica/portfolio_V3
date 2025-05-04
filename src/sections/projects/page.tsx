"use client";

import BodyContainer from "@/components/bodyContainer";
import Title from "@/components/title";
import Link from "next/link";

interface Project {
	title: string;
	subtitle: string;
	description: string;
	icon: React.ReactNode;
	bgColor: string;
	tags: string[];
	liveUrl: string;
	githubUrl: string;
}

export default function Projects() {
	const projects: Project[] = [
		{
			title: "TextIATransform",
			subtitle: "TRANSFORMAÇÃO DE TEXTO COM IA",
			description:
				"Aplicação web moderna que demonstra o poder da IA na transformação de texto. Desenvolvida com Next.js 15, integra o Groq AI SDK para manipulação de texto de forma inteligente.",
			icon: <div className="h-full w-full" />,
			bgColor: "",
			tags: ["Next.js", "TypeScript", "Tailwind CSS", "Groq AI"],
			liveUrl: "https://text-ia-transform.vercel.app",
			githubUrl: "https://github.com/ViniciusBenfica/TextIATransform",
		},
		{
			title: "Contact Input Component",
			subtitle: "COMPONENTE REUTILIZÁVEL",
			description:
				"Componente React para entrada de contatos com suporte a autocomplete, múltiplas seleções e avatares personalizados. Ideal para formulários de contato modernos.",
			icon: <div className="h-full w-full" />,
			bgColor: "",
			tags: ["React", "TypeScript", "Componentes Reutilizáveis"],
			liveUrl: "",
			githubUrl: "https://github.com/ViniciusBenfica/contact-input-component",
		},
		{
			title: "Watermark Frontend",
			subtitle: "APLICAÇÃO WEB PARA MARCA D'ÁGUA",
			description:
				"Aplicação web desenvolvida com Next.js para adicionar marcas d'água a imagens de forma interativa e eficiente.",
			icon: <div className="h-full w-full" />,
			bgColor: "",
			tags: ["Next.js", "TypeScript", "Tailwind CSS"],
			liveUrl: "https://watermark-frontend.vercel.app",
			githubUrl: "https://github.com/ViniciusBenfica/watermark-frontend",
		},
		{
			title: "Watermark Backend",
			subtitle: "API PARA PROCESSAMENTO DE MARCA D'ÁGUA",
			description:
				"API desenvolvida com Node.js e Prisma para processar imagens e adicionar marcas d'água, integrando-se com o frontend para fornecer uma solução completa.",
			icon: <div className="h-full w-full" />,
			bgColor: "",
			tags: ["Node.js", "TypeScript", "Prisma", "Docker"],
			liveUrl: "",
			githubUrl: "https://github.com/ViniciusBenfica/watermark-backend",
		},
		{
			title: "Discord Telepathy",
			subtitle: "FERRAMENTA DE ANÁLISE PARA DISCORD",
			description:
				"Ferramenta desenvolvida para análise de dados em servidores Discord, permitindo coleta e processamento de informações para estudos de comportamento e interações.",
			icon: <div className="h-full w-full" />,
			bgColor: "",
			tags: ["TypeScript", "Discord API", "Data Analysis"],
			liveUrl: "",
			githubUrl: "https://github.com/ViniciusBenfica/discord-telepathy",
		},
	];

	return (
		<BodyContainer id="projects" bgColor="bg-[#0f1624]">
			<Title
				title="Professional Experience"
				subtitle="Know a little more about my experience and skills as a developer"
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project, index) => (
					<div
						key={index}
						className="bg-white/5 backdrop-blur-md border border-white/10 group rounded-md h-full flex flex-col hover:border-cyan-500 transition-all duration-300"
					>
						<div className={`${project.bgColor} h-32 flex items-center justify-center`}>
							<div className="text-white/90 h-20 w-20">{project.icon}</div>
						</div>
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

							<div className="flex flex-wrap gap-2 mb-4">
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
									href={project.liveUrl}
									className="bg-cyan-500 py-2 px-3 font-medium text-[12px] cursor-pointer rounded-md hover:opacity-80 text-white transition-opacity"
								>
									Live Demo
								</Link>
							)}

							{project.githubUrl && (
								<Link
									href={project.githubUrl}
									className="bg-[#041124] py-2 px-3 text-[#00D9FF] border border-cyan-500 font-medium text-[12px] cursor-pointer rounded-md hover:opacity-80 transition-opacity flex items-center justify-center"
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
