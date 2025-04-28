export default function Title({ title, subtitle }: { title: string; subtitle: string }) {
	const words = title.split(" ");
	const lastWord = words.pop();
	const firstPart = words.join(" ");

	return (
		<div className="text-center mb-16">
			<h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block relative">
				{firstPart}{" "}
				<span className="bg-gradient-to-r from-[#06daff] to-[#65e8f9] bg-clip-text text-transparent">
					{lastWord}
				</span>
			</h2>
			<div className="w-20 h-1 bg-gradient-to-r from-[#01d8ff] to-[#6A3DE8] mx-auto" />
			<p className="text-lg text-[#c2c4c7] max-w-3xl mx-auto mt-6">{subtitle}</p>
		</div>
	);
}
