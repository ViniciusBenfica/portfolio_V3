import Image from "next/image";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className="py-8 border-t border-white/10 bg-[#0f1624] relative">
			<div className="mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<div className="flex items-center">
							<span className="text-2xl font-bold bg-gradient-to-r from-[#06daff] via-[#6A3DE8] to-[#df2c8e] bg-clip-text text-transparent">
								<span className="text-3xl">&lt;</span>VB<span className="text-3xl">/&gt;</span>
							</span>
						</div>
						<p className="text-[#c2c4c7c2] text-[12px] mt-2">Created by Vinicius Benfica</p>
					</div>

					<div className="flex items-center">
						<button
							type="button"
							className="p-3 rounded-full bg-[#1b222f] hover:bg-white/20 transition-colors"
							aria-label="Voltar ao topo"
						>
							<Image src="/arrow.svg" alt="Arrow" width={15} height={15} />
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
}
