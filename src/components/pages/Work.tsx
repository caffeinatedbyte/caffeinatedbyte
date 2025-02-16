"use client";
import { useGlobalState } from "@/context/GlobalStateContext";
import React from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
	const { state } = useGlobalState();

	return (
		<div
			style={{
				display: `${state === "work" ? "flex" : "none"}`,
			}}
			className="justify-center items-center mt-[10vh] h-[90vh] w-full">
			<div className="hidden md:block">
				<div className="flex justify-center items-center bg-gradient-to-br from-white/15 to-white/4 shadow-white/5 backdrop-blur-lg rounded-lg border-2 border-white/20 h-[60vh] w-[90vw] md:w-[50vw] text-[6vw] md:text-[3vw] m-auto absolute -mt-32 font-semibold">
					Code & Coffee
				</div>
				<Tilt
					glareEnable
					className="workCards flex justify-center items-center bg-gradient-to-br from-white/15 to-white/4 shadow-white/5 backdrop-blur-lg rounded-lg border-2 border-white/20 h-[18vh] w-[18vh] text-[4vw] md:text-[2vw] m-auto absolute top-[19%] left-[8%] p-6">
					<div className="absolute -top-4 right-4 bg-white shadow-lg backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium tracking-wide text-black transition-all hover:scale-105 hover:text-white hover:bg-[#562B00]">
						Brewing...
					</div>
				</Tilt>
				<Link
					href="https://github.com/Abhivic000/Mentee-pro"
					title="Mentee Pro"
					target="_blank">
					<Tilt
						glareEnable
						className="workCards flex justify-center items-center bg-gradient-to-br from-white/15 to-white/4 shadow-white/5 backdrop-blur-lg rounded-lg border-2 border-white/20 h-[15vh] w-[15vh] text-[4vw] md:text-[2vw] m-auto absolute top-[50%] left-[20%] p-6">
						<div className="absolute -top-4 right-4 bg-white shadow-lg backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium tracking-wide text-black transition-all hover:scale-105 hover:text-white hover:bg-[#562B00]">
							Project
						</div>
						<Image
							src={"/Github_icon.png"}
							width={200}
							height={200}
							alt="Mentee Pro"
						/>
					</Tilt>
				</Link>
				<Tilt
					glareEnable
					className="workCards flex justify-center items-center bg-gradient-to-br from-white/15 to-white/4 shadow-white/5 backdrop-blur-lg rounded-lg border-2 border-white/20 h-[15vh] w-[15vh] text-[4vw] md:text-[2vw] m-auto absolute top-[70%] left-[35%] p-6">
					<div className="absolute -top-4 right-4 bg-white shadow-lg backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium tracking-wide text-black transition-all hover:scale-105 hover:text-white hover:bg-[#562B00]">
						Brewing...
					</div>
				</Tilt>

				<Link
					href="https://github.com/caffeinatedbyte/automobile-price-predection"
					title="Automobile Price Predection"
					target="_blank">
					<Tilt
						glareEnable
						className="workCards flex justify-center items-center bg-gradient-to-br from-white/15 to-white/4 shadow-white/5 backdrop-blur-lg rounded-lg border-2 border-white/20 h-[15vh] w-[15vh] text-[4vw] md:text-[2vw] m-auto absolute top-[70%] left-[60%] p-6">
						<div className="absolute -top-4 right-4 bg-white shadow-lg backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium tracking-wide text-black transition-all hover:scale-105 hover:text-white hover:bg-[#562B00]">
							Project
						</div>
						<Image
							src={"/Github_icon.png"}
							width={200}
							height={200}
							alt="Automobile Price Predection"
						/>
					</Tilt>
				</Link>
				<Tilt
					glareEnable
					className="workCards flex justify-center items-center bg-gradient-to-br from-white/15 to-white/4 shadow-white/5 backdrop-blur-lg rounded-lg border-2 border-white/20 h-[15vh] w-[15vh] text-[4vw] md:text-[2vw] m-auto absolute top-[60%] left-[80%] p-6">
					<div className="absolute -top-4 right-4 bg-white shadow-lg backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium tracking-wide text-black transition-all hover:scale-105 hover:text-white hover:bg-[#562B00]">
						Brewing...
					</div>
				</Tilt>
				<Link href="https://bunchup.in/" title="Buncup" target="_blank">
					<Tilt
						glareEnable
						className="workCards flex justify-center items-center bg-gradient-to-br from-white/15 to-white/4 shadow-white/5 backdrop-blur-lg rounded-lg border-2 border-white/20 h-[22vh] w-[22vh] text-[4vw] md:text-[2vw] m-auto absolute top-[25%] left-[72%] p-6">
						<div className="absolute -top-4 right-4 bg-white shadow-lg backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium tracking-wide text-black transition-all hover:scale-105 hover:text-white hover:bg-[#562B00]">
							Part Time
						</div>
						<Image
							src={"/bunchup_image.png"}
							width={200}
							height={200}
							alt="Bunchup"
						/>
					</Tilt>
				</Link>
				<Link
					href="https://handsintechnology.in/"
					title="Hands In Technology"
					target="_blank">
					<Tilt
						glareEnable
						className="workCards flex justify-center items-center bg-gradient-to-br from-white/15 to-white/4 shadow-white/5 backdrop-blur-lg rounded-lg border-2 border-white/20 h-[15vh] w-[15vh] text-[4vw] md:text-[2vw] m-auto absolute top-[10%] left-[45%] p-6">
						<div className="absolute -top-4 right-4 bg-white shadow-lg backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium tracking-wide text-black transition-all hover:scale-105 hover:text-white hover:bg-[#562B00]">
							1 Month
						</div>
						<Image
							src={"/Hands_in_technology_image.png"}
							width={200}
							height={200}
							alt="Hands In Technology"
						/>
					</Tilt>
				</Link>
			</div>
			<div className="md:hidden flex flex-col justify-center items-center">
				<div className="text-center mb-8 bg-gradient-to-br from-white/15 to-white/4 shadow-white/5 backdrop-blur-lg rounded-lg border-2 border-white/20 p-4 text-[6vw] font-semibold">
					Code & Coffee
				</div>
				<div className="grid grid-cols-2 gap-10 p-4">
					<div className="flex justify-center items-center bg-gradient-to-br from-white/15 to-white/4 shadow-white/5 backdrop-blur-lg rounded-lg border-2 border-white/20 h-[15vh] p-4 relative">
						<div className="absolute -top-4 right-4 bg-white shadow-lg backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium tracking-wide text-black">
							Brewing...
						</div>
					</div>
					<Link
						href="https://github.com/Abhivic000/Mentee-pro"
						title="Mentee Pro"
						target="_blank"
						className="block">
						<div className="flex justify-center items-center bg-gradient-to-br from-white/15 to-white/4 shadow-white/5 backdrop-blur-lg rounded-lg border-2 border-white/20 h-[15vh] p-4 relative">
							<div className="absolute -top-4 right-4 bg-white shadow-lg backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium tracking-wide text-black">
								Project
							</div>
							<Image
								src={"/Github_icon.png"}
								width={100}
								height={100}
								alt="Mentee Pro"
							/>
						</div>
					</Link>
					<Link
						href="https://bunchup.in/"
						title="Buncup"
						target="_blank"
						className="block">
						<div className="flex justify-center items-center bg-gradient-to-br from-white/15 to-white/4 shadow-white/5 backdrop-blur-lg rounded-lg border-2 border-white/20 h-[15vh] p-4 relative">
							<div className="absolute -top-4 right-4 bg-white shadow-lg backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium tracking-wide text-black">
								Part Time
							</div>
							<Image
								src={"/bunchup_image.png"}
								width={100}
								height={100}
								alt="Bunchup"
							/>
						</div>
					</Link>
					<Link
						href="https://handsintechnology.in/"
						title="Hands In Technology"
						target="_blank"
						className="block">
						<div className="flex justify-center items-center bg-gradient-to-br from-white/15 to-white/4 shadow-white/5 backdrop-blur-lg rounded-lg border-2 border-white/20 h-[15vh] p-4 relative">
							<div className="absolute -top-4 right-4 bg-white shadow-lg backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium tracking-wide text-black">
								1 Month
							</div>
							<Image
								src={"/Hands_in_technology_image.png"}
								width={100}
								height={100}
								alt="Hands In Technology"
							/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Work;
