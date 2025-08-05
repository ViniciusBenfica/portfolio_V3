import BodyContainer from "@/components/bodyContainer";
import Title from "@/components/title";

export default function Technology() {
	const frontend = [
		{
			name: "React",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		},
		{
			name: "Next",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
		},
		{
			name: "Tailwind",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
		},
		{
			name: "TypeScript",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
		},
		{
			name: "JavaScript",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		},
		{
			name: "HTML",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
		},
		{
			name: "CSS",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
		},
		{
			name: "SASS",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
		},
		{
			name: "Vue",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
		},
		{
			name: "Bootstrap",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
		},
		{
			name: "Styled Components",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg",
		},
	];

	const backend = [
		{
			name: "Node.js",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		},
		{
			name: "Express",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
		},
		{
			name: "Fastify",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-original.svg",
		},
		{
			name: "Lua",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
		},
		{
			name: "Nest",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
		},
		{
			name: "Prisma",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
		},
		{
			name: "TypeScript",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
		},
		{
			name: "JavaScript",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		},
	];

	const infrastructure = [
		{
			name: "Docker",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
		},
		{
			name: "Kubernetes",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
		},
		{
			name: "AWS",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
		},
		{
			name: "Azure",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
		},
	];

	const other = [
		{
			name: "Git",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
		},
		{
			name: "Jest",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
		},
		{
			name: "Vitest",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg",
		},
		{
			name: "Figma",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
		},
		{
			name: "Jira",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
		},
		{
			name: "PostgreSQL",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
		},
		{
			name: "MySQL",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
		},
	];

	return (
		<BodyContainer id="technology" bgColor="bg-[#060d18]">
			<Title title="Stack" subtitle="Technologies I've Worked With" />
			<div className="flex flex-col gap-8">
				<div className="bg-[#1b222f] border border-white/10 overflow-hidden rounded-lg relative w-full">
					<div className="p-6 md:p-8 space-y-10">
						<div>
							<div className="flex items-center gap-4 mb-6">
								<div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6A3DE8] to-[#8a6ae4] flex items-center justify-center text-2xl" />
								<div>
									<h4 className="text-2xl font-bold text-gradient-purple">Frontend</h4>
								</div>
							</div>
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
								{frontend.map((tech) => {
									return (
										<div
											key={tech.name}
											className="group flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
										>
											<img src={tech.icon} alt={tech.name} className="w-10 h-10" />
											<h5 className="font-medium text-sm text-center text-brand-light/80">
												{tech.name}
											</h5>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[#1b222f] border border-white/10 overflow-hidden rounded-lg relative w-full">
					<div className="p-6 md:p-8 space-y-10">
						<div>
							<div className="flex items-center gap-4 mb-6">
								<div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#ef2c82] to-[#fa6e84] flex items-center justify-center text-2xl" />
								<div>
									<h4 className="text-2xl font-bold text-gradient-purple">Backend</h4>
								</div>
							</div>
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
								{backend.map((tech) => {
									return (
										<div
											key={tech.name}
											className="group flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
										>
											<img src={tech.icon} alt={tech.name} className="w-10 h-10" />
											<h5 className="font-medium text-sm text-center text-brand-light/80">
												{tech.name}
											</h5>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[#1b222f] border border-white/10 overflow-hidden rounded-lg relative w-full">
					<div className="p-6 md:p-8 space-y-10">
						<div>
							<div className="flex items-center gap-4 mb-6">
								<div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#01b7ff] to-[#57d8ec] flex items-center justify-center text-2xl" />
								<div>
									<h4 className="text-2xl font-bold text-gradient-purple">Infrastructure</h4>
								</div>
							</div>
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
								{infrastructure.map((tech) => {
									return (
										<div
											key={tech.name}
											className="group flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
										>
											<img src={tech.icon} alt={tech.name} className="w-10 h-10" />
											<h5 className="font-medium text-sm text-center text-brand-light/80">
												{tech.name}
											</h5>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[#1b222f] border border-white/10 overflow-hidden rounded-lg relative w-full">
					<div className="p-6 md:p-8 space-y-10">
						<div>
							<div className="flex items-center gap-4 mb-6">
								<div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#d82cef] to-[#ea6efa] flex items-center justify-center text-2xl" />
								<div>
									<h4 className="text-2xl font-bold text-gradient-purple">Others</h4>
								</div>
							</div>
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
								{other.map((tech) => {
									return (
										<div
											key={tech.name}
											className="group flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
										>
											<img src={tech.icon} alt={tech.name} className="w-10 h-10" />
											<h5 className="font-medium text-sm text-center text-brand-light/80">
												{tech.name}
											</h5>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</BodyContainer>
	);
}
