import Footer from "@/components/footer";
import Navbar from "@/components/navBar";
import Contact from "@/sections/contact/page";
import Experience from "@/sections/experience/page";
import Home from "@/sections/home/page";
import Projects from "@/sections/projects/page";
import Technology from "@/sections/technology/page";

export default function App() {
	return (
		<>
			<Navbar />
			<Home />
			<Experience />
			<Projects />
			<Technology />
			<Contact />
			<Footer />
		</>
	);
}
