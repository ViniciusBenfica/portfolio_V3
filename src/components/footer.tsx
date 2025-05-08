import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="py-8 px-8 border-t border-white/10 bg-[#060b16] relative">
			<div className="flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto">
				<div className="mb-4 md:mb-0">
					<div className="flex items-center">
						<span className="text-2xl font-bold bg-gradient-to-r from-[#06daff] via-[#6A3DE8] to-[#df2c8e] bg-clip-text text-transparent">
							<span className="text-3xl">&lt;</span>VB<span className="text-3xl">/&gt;</span>
						</span>
					</div>
					<p className="text-[#c2c4c7c2] text-xs mt-2">Created by Vinicius Benfica</p>
				</div>

				<div className="flex items-center">
					<Link
						href="#home"
						className="p-3 rounded-full bg-[#1b222f] hover:bg-white/20 transition-colors"
					>
						<Image src="/arrow.svg" alt="Arrow" width={15} height={15} />
					</Link>
				</div>
			</div>
		</footer>
	);
}
