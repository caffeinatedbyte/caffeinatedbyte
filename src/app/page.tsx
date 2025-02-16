import React from "react";
import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Work from "@/components/pages/Work";
import TechStack from "@/components/pages/TechStack";
import Contact from "@/components/pages/Contact";
const HomePage: React.FC = () => {
	return (
		<div>
			<Home />
			<About />
			<TechStack />
			<Work />
			<Contact />
		</div>
	);
};

export default HomePage;
