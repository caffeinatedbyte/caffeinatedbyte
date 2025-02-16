"use client";
import React from "react";
import Image from "next/image";
import { useGlobalState } from "@/context/GlobalStateContext";

function TechStack() {
	const { state } = useGlobalState();
	return (
		<div
			className="text-white mt-[15vh] flex flex-col items-center justify-center gap-5 h-full w-full"
			style={{ display: state === "techstack" ? "flex" : "none" }}>
			<div className="text-[8vw] sm:text-[6vw] lg:text-[4vw] font-bold text-center">
				Brewing My Tech Stack
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 pt-10 w-full lg:w-[60vw] justify-items-center">
				{[
					"/Nodejs_icon.webp",
					"/Nextjs_icon.webp",
					"/React_icon.webp",
					"/Python_icon.webp",
					"/Vsc_icon.webp",
					"/Git_icon.webp",
					"/Figma_icon.webp",
					"/Npm_icon.webp",
				].map((imageURL, index) => (
					<CardTech key={index} title="H" imageURL={imageURL} />
				))}
			</div>
		</div>
	);
}

export default TechStack;

const CardTech = ({ title, imageURL }: { title: string; imageURL: string }) => {
	return (
		<div className="techstack relative w-[25vw] h-[25vw] sm:w-[15vw] sm:h-[15vw] lg:w-[12vh] lg:h-[12vh] m-2 lg:m-4 transition-all duration-250 [perspective:500px] group mb-8">
			<div className="absolute inset-0 z-[-1] w-full h-full rounded-[32px] transition-transform duration-250 origin-bottom-right rotate-[15deg] bg-[#292929] shadow-lg group-hover:[transform:translate3d(0,0,20px)_rotate(15deg)_rotateY(-10deg)]"></div>
			<div className="absolute inset-0 z-[1] w-full h-full rounded-[32px] bg-gradient-to-br from-white/15 to-white/4 backdrop-blur-[20px] transition-transform duration-250 origin-top-left flex items-center justify-center group-hover:[transform:translate3d(0,-5px,40px)_rotateX(15deg)_rotateY(10deg)] border-2 border-white/20">
				<Image
					src={imageURL}
					alt={title}
					width={150}
					height={150}
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain p-3"
				/>
			</div>
		</div>
	);
};
