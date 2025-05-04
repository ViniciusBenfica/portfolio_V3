import Footer from "@/components/footer";
import Navbar from "@/components/navBar";
import Contact from "@/sections/contact/page";
import Experience from "@/sections/experience/page";
import Hero from "@/sections/home/page";
import Projects from "@/sections/projects/page";

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Experience />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}
