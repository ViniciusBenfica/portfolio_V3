"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);

			const sections = ["home", "experiences", "projects", "contact"];
			for (const section of sections.reverse()) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= 150) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ name: "Home", href: "#home" },
		{ name: "Experiences", href: "#experiences" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<header
			className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 lg:px-8 ${
				isScrolled ? "bg-black/40 backdrop-blur-md py-3" : "bg-transparent py-5"
			}`}
		>
			<div className="max-w-[1280px] mx-auto">
				<div className="flex items-center justify-between">
					<Link
						href="#home"
						className="text-2xl font-bold bg-gradient-to-r from-[#06daff] via-[#6A3DE8] to-[#df2c8e] bg-clip-text text-transparent"
					>
						<span className="text-3xl">&lt;</span>VB<span className="text-3xl">/&gt;</span>
					</Link>

					<nav className="hidden md:flex items-center space-x-1">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className={`px-4 py-2 text-base relative transition-colors rounded-md ${
									activeSection === link.href.substring(1)
										? "text-[#06daff] bg-white/5"
										: "text-[#c2c4c7] hover:text-white hover:bg-white/5"
								}`}
							>
								{link.name}
								{activeSection === link.href.substring(1) && (
									<span className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 h-0.5 bg-[#06daff]" />
								)}
							</Link>
						))}
					</nav>

					<div className="hidden md:block">
						<Link
							href="#contact"
							className="bg-[#6039D2] py-2 px-3 font-medium text-sm cursor-pointer rounded-md hover:opacity-80 text-white transition-opacity"
						>
							Contact
						</Link>
					</div>

					<button
						type="button"
						className="md:hidden cursor-pointer hover:bg-[#7e41e6] w-8 h-8  flex items-center justify-center transition-colors rounded-md"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? (
							<X className="w-6 h-6 text-white" />
						) : (
							<Menu className="w-6 h-6 text-white" />
						)}
					</button>
				</div>

				{mobileMenuOpen && (
					<nav className="md:hidden py-4 flex flex-col space-y-1 mt-4 border-t bg-white/5 backdrop-blur-md border border-white/10">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className={`px-4 py-3 font-medium text-sm ${
									activeSection === link.href.substring(1)
										? "text-[#06daff] bg-white/5"
										: "text-[#c2c4c7]"
								}`}
								onClick={() => setMobileMenuOpen(false)}
							>
								{link.name}
							</Link>
						))}
						<div className="px-4 py-2 flex">
							<Link
								href="#message"
								onClick={() => setMobileMenuOpen(false)}
								className="bg-[#6039D2] py-2 w-full text-center font-medium text-sm cursor-pointer rounded-md hover:opacity-80 text-white transition-opacity"
							>
								Send a message
							</Link>
						</div>
					</nav>
				)}
			</div>
		</header>
	);
}
