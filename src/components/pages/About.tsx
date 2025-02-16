"use client";
import { useGlobalState } from "@/context/GlobalStateContext";
import React from "react";
import Image from "next/image";

const About = () => {
	const { state } = useGlobalState();
	return (
		<div
			className="aboutcontainer flex flex-col md:flex-row justify-center items-center gap-10 pt-[10vh] px-5 md:px-20 h-auto md:h-[90vh] w-[90%] overflow-hidden m-auto scale-1"
			style={{ display: state === "about" ? "flex" : "none" }}>
			<div className="w-full md:w-[50%] h-auto flex justify-center">
				<Image src={"/About_image.webp"} alt="about" width={500} height={500} />
			</div>
			<div className="w-full md:w-[50%] flex flex-col justify-start items-start text-center md:text-left">
				<div className="text-[8vw] md:text-[1.5vw] font-bold">
					Hey! 👋🏻, Glad to see you here!
				</div>
				<div className="text-[4vw] sm:text-[4vw] md:text-[1.5vw] text-justify">
					Full-stack developer skilled in JavaScript, HTML, CSS, and Node.js,
					passionate about building innovative tech solutions. Aspiring
					entrepreneur focused on creating and scaling tech-driven ventures to
					solve real-world problems.
				</div>
			</div>
		</div>
	);
};

export default About;
