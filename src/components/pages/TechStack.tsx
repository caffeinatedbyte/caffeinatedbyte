"use client";
import React from "react";
import Image from "next/image";
import { useGlobalState } from "@/context/GlobalStateContext";

function TechStack() {
	const { state } = useGlobalState();
	return (
		<div
			className="text-white mt-[10vh] flex flex-col items-center justify-center gap-5 h-[80vh] w-full"
			style={{ display: state === "techstack" ? "flex" : "none" }}>
			<div className="text-[4vw] font-bold">Brewing My Tech Stack</div>
			<div className="flex flex-wrap justify-center items-center pt-10 w-1/2">
				{[
					"/Nodejs_icon.png",
					"/Nextjs_icon.png",
					"/React_icon.png",
					"/Python_icon.png",
					"/Vsc_icon.png",
					"/Git_icon.png",
					"/Figma_icon.png",
					"/Npm_icon.png",
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
		<div className="techstack relative w-[16vh] h-[16vh] m-8 transition-all duration-250 [perspective:500px] group mb-16">
			<div className="absolute inset-0 z-[-1] w-full h-full rounded-[32px] transition-transform duration-250 origin-bottom-right rotate-[15deg] bg-[#292929] shadow-lg group-hover:[transform:translate3d(0,0,20px)_rotate(15deg)_rotateY(-10deg)]"></div>
			<div className=" absolute inset-0 z-[1] w-full h-full rounded-[32px] bg-gradient-to-br from-white/15 to-white/4 backdrop-blur-[20px] transition-transform duration-250 origin-top-left flex items-center justify-center group-hover:[transform:translate3d(0,-5px,40px)_rotateX(15deg)_rotateY(10deg)] border-2 border-white/20">
				<Image
					src={imageURL}
					alt={title}
					width={100}
					height={100}
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				/>
			</div>
		</div>
	);
};
