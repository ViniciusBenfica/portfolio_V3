import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative bg-[#20293c]"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
				<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
					<div
						className="mb-6 animate-fadeIn opacity-0 p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
						style={{ animationDelay: "0.2s" }}
					>
						<div className="flex items-center justify-center space-x-4">
							<Link
								href="https://github.com/viniciusbenfica"
								target="_blank"
								className="transition-colors p-2 rounded-full hover:bg-white/20"
							>
								<Image src="/github.svg" alt="Github" width={16} height={16} />
							</Link>
							<Link
								href="https://www.linkedin.com/in/vinicius-benfica/"
								target="_blank"
								className="transition-colors p-2 rounded-full hover:bg-white/20"
							>
								<Image src="/linkedin.svg" alt="Linkedin" width={16} height={16} />
							</Link>
							<Link
								href="mailto:vinicius.benfica.ruy@gmail.com"
								className="transition-colors p-2 rounded-full hover:bg-white/20"
							>
								<Image src="/email2.svg" alt="Email" width={17} height={16} />
							</Link>
						</div>
					</div>

					<div className="mb-2 animate-fadeIn opacity-0" style={{ animationDelay: "0.4s" }}>
						<h2 className="text-xl md:text-xl text-[#00D9FF] mb-1">Hi, I'm</h2>
					</div>

					<h1
						className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn opacity-0"
						style={{ animationDelay: "0.6s" }}
					>
						<span className="bg-gradient-to-r from-[#06daff] via-[#6A3DE8] to-[#df2c8e] bg-clip-text text-transparent">
							Vinicius Benfica
						</span>
					</h1>

					<div className="animate-fadeIn opacity-0 mb-8" style={{ animationDelay: "0.8s" }}>
						<p className="text-xl md:text-xl text-[#c2c4c7] animate-typing">Full Stack Developer</p>
					</div>

					<p
						className="text-sm text-[#c2c4c7] max-w-2xl mb-10 animate-fadeIn opacity-0"
						style={{ animationDelay: "1s" }}
					>
						Creating modern and intuitive digital experiences with the best technologies on the
						market. Specialized in web and mobile development with a focus on performance and
						usability.
					</p>

					<div
						className="flex flex-col sm:flex-row gap-4 w-2/5 justify-center animate-fadeIn opacity-0"
						style={{ animationDelay: "1.2s" }}
					>
						<Link
							href="#projects"
							className="bg-cyan-500 py-2 w-full font-medium text-[12px] cursor-pointer rounded-md hover:opacity-90 text-white transition-opacity flex items-center justify-center"
						>
							Meus Projetos
						</Link>
						<Link
							href="#contact"
							className="bg-[#041124] py-2 w-full text-[#00D9FF] border border-cyan-500 font-medium text-[12px] cursor-pointer rounded-md hover:opacity-90 transition-opacity flex items-center justify-center"
						>
							Entre em Contato
						</Link>
					</div>

					<div className="mt-20 md:mt-32 animate-float">
						<Link
							href="#about"
							className="flex flex-col items-center text-[#c2c4c7] hover:text-[#00D9FF] transition-colors"
						>
							<span className="mb-2 text-[12px]">Conheça mais</span>
							<div className="p-2 rounded-full border border-cyan-500 animate-pulse rotate-180">
								<Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
