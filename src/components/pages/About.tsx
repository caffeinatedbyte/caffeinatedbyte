"use client";
import { useGlobalState } from "@/context/GlobalStateContext";
import React from "react";
import Image from "next/image";

const About = () => {
	const { state } = useGlobalState();
	return (
		<div
			className="aboutcontainer flex justify-center items-center gap-10 pt-[10vh] px-20 h-[90vh] w-[90%] overflow-hidden m-auto"
			style={{ display: state === "about" ? "flex" : "none" }}>
			<div className="w-[50%] h-auto">
				<Image src={"/About_image.png"} alt="about" width={500} height={500} />
			</div>
			<div className="w-[50%] flex flex-col justify-start items-start">
				<div className="text-[1.5vw] font-bold">
					Hey! 👋🏻, Glad to see you here!
				</div>
				<div className="text-[1.5vw] text-justify">
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
