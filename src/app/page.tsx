import Footer from "@/components/footer";
import Navbar from "@/components/navBar";
import Contact from "@/sections/contact/page";
import Experience from "@/sections/experience/page";

export default function Home() {
	return (
		<>
			<Navbar />
			<Experience />
			<Contact />
			<Footer />
		</>
	);
}
