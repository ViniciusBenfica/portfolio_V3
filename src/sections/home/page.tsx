import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section
			id="home"
			className="h-screen min-h-[750px] flex items-center justify-center relative bg-[#1c2435]"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
				<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
					<div
						className="mb-6 animate-fadeIn opacity-0 p-2 hide-on-short rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
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
						<h2 className="text-xl md:text-2xl text-[#00D9FF] mb-1">Hi, I'm</h2>
					</div>

					<h1
						className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn opacity-0"
						style={{ animationDelay: "0.6s" }}
					>
						<span className="bg-gradient-to-r from-[#06daff] via-[#6A3DE8] to-[#df2c8e] bg-clip-text text-transparent">
							Vinicius Benfica
						</span>
					</h1>

					<div className="animate-fadeIn opacity-0 mb-8" style={{ animationDelay: "0.8s" }}>
						<p className="text-xl md:text-2xl text-[#c2c4c7] animate-typing">FullStack Developer</p>
					</div>

					<p
						className="text-sm md:text-lg text-[#c2c4c7] max-w-xl mb-10 animate-fadeIn opacity-0"
						style={{ animationDelay: "1s" }}
					>
						Creating modern and intuitive digital experiences. Specialized in web and mobile
						development with a focus on performance and usability.
					</p>

					<div
						className="flex flex-col sm:flex-row gap-4 w-2/6 justify-center animate-fadeIn opacity-0"
						style={{ animationDelay: "1.2s" }}
					>
						<Link
							href="https://github.com/viniciusbenfica"
							target="_blank"
							className="bg-cyan-500 py-2 w-full font-medium text-xs md:text-sm cursor-pointer rounded-md hover:opacity-80 text-white transition-opacity flex items-center justify-center"
						>
							My projects
						</Link>
						<Link
							href="#contact"
							className="bg-[#041124] py-2 w-full text-[#00D9FF] border border-cyan-500 font-medium text-xs md:text-sm cursor-pointer rounded-md hover:opacity-80 transition-opacity flex items-center justify-center"
						>
							Contact me
						</Link>
					</div>

					<div className="mt-20 md:mt-32 animate-float">
						<Link
							href="#experiences"
							className="flex flex-col items-center text-[#c2c4c7] hover:text-[#00D9FF] transition-colors opacity-0 animate-fadeIn"
							style={{ animationDelay: "1.4s" }}
						>
							<span className="mb-2 text-xs">Conheça mais</span>
							<div className="p-2 rounded-full border border-cyan-500 animate-pulse rotate-180">
								<Image src="/arrow2.svg" alt="Arrow" width={15} height={15} />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
