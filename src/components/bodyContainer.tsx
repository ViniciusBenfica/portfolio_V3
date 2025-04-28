export default function BodyContainer({
	children,
	bgColor,
}: { children: React.ReactNode; bgColor: string }) {
	return (
		<section className={`py-20 ${bgColor} text-white`}>
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="max-w-5xl mx-auto">{children}</div>
			</div>
		</section>
	);
}
