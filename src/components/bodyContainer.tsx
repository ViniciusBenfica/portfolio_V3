type BodyContainerProps = {
	children: React.ReactNode;
	bgColor: string;
} & React.HTMLAttributes<HTMLElement>;

export default function BodyContainer({ children, bgColor, ...props }: BodyContainerProps) {
	return (
		<section className={`py-20 ${bgColor} text-white`} {...props}>
			<div className="px-4 lg:px-8">
				<div className="max-w-[1280px] mx-auto">{children}</div>
			</div>
		</section>
	);
}
