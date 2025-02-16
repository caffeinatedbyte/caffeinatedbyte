"use client";
import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const LetsVibe: React.FC = () => {
	const [animationData, setAnimationData] = useState<object | null>(null);
	const [isHovered, setIsHovered] = useState(false);
	const songBoxRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const fetchLottieData = async () => {
			try {
				const response = await fetch("/Lets_vibe.json");
				if (!response.ok) {
					throw new Error("Failed to load Lottie data");
				}
				const data = await response.json();
				setAnimationData(data);
			} catch (error) {
				console.error("Error loading Lottie animation:", error);
			}
		};

		fetchLottieData();
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				songBoxRef.current &&
				!songBoxRef.current.contains(event.target as Node)
			) {
				setIsHovered(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [songBoxRef]);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid meet",
		},
	};

	return (
		<div className="fixed bottom-16 right-14 w-[20vw] md:w-[15vw] lg:w-[10vw] flex flex-col items-center select-none">
			<div
				className={`transition-transform duration-300 ${
					isHovered ? "scale-110" : "scale-100"
				}`}
				onClick={() => setIsHovered(!isHovered)}>
				{animationData && (
					<Lottie options={defaultOptions} isClickToPauseDisabled={true} />
				)}
			</div>
			<div
				className="text-white text-[4vw] md:text-[3vw] lg:text-[2vw]"
				onClick={() => setIsHovered(!isHovered)}>
				Let&apos;s Vibe
			</div>
			<div
				ref={songBoxRef}
				className={`text-white text-[2vw] md:text-[1.5vw] lg:text-[1vw] fixed h-[50vh] md:h-[60vh] lg:h-[70vh] w-[60vw] md:w-[50vw] lg:w-[40vh] border-2 border-[color(display-p3_0_0.039_0.176)] bg-[#000a2d] bottom-48 right-5 transition-transform duration-300 z-10 rounded-lg transform shadow-2xl ${
					isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
				}`}
				style={{ transformOrigin: "bottom right" }}>
				<div className="bg-gradient-to-r from-[#000a2d] to-[#001045] p-4 rounded-t-lg">
					<h2 className="text-[3vw] md:text-[2vw] lg:text-[1.5vw] text-blue-100 font-semibold flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6 mr-1">
							<path d="M12 3v10.55a4 4 0 1 0 1.5 3.95V7h4V3h-5.5z" />
						</svg>
						Let&apos;s Vibe
					</h2>
				</div>
				{[
					{
						song: "Jaana Samjho Na",
						artist: "Aditya Rikahari",
						songURL: "https://www.youtube.com/watch?v=wedxycztUAs",
					},
					{
						song: "Admirin'You",
						artist: "Karan Aujla",
						songURL: "https://www.youtube.com/watch?v=V44Gq2tdGac",
					},
					{
						song: "Aa Toh Sahi",
						artist: "Meet Bros, Neha Kakkar",
						songURL: "https://www.youtube.com/watch?v=60-noky755g",
					},
					{
						song: "Popular	",
						artist: "The Weeknd",
						songURL: "https://www.youtube.com/watch?v=nAuiHB6azV0",
					},
					{
						song: "Rockabye",
						artist: "Clean Bandit",
						songURL: "https://www.youtube.com/watch?v=2VDdP7lYiiI",
					},
					{
						song: "New Rules",
						artist: "Dua Lipa",
						songURL: "https://www.youtube.com/watch?v=k2qgadSvNyU",
					},
				].map((item, index) => (
					<MusicItem
						key={index}
						song={item.song}
						artist={item.artist}
						songURL={item.songURL}
					/>
				))}
			</div>
		</div>
	);
};

export default LetsVibe;

const MusicItem: React.FC<{
	song: string;
	artist: string;
	songURL: string;
}> = ({ song, artist, songURL }) => {
	return (
		<div className="flex justify-between items-center w-full p-4">
			<div className="flex flex-col items-start gap-1">
				<div className="text-[3vw] md:text-[2vw] lg:text-[1.5vw]">{song}</div>
				<div className="text-gray-400 text-[2vw] md:text-[1.5vw] lg:text-[1vw]">
					{artist}
				</div>
			</div>
			<Link href={songURL} target="_blank">
				<button
					className="p-2 rounded-full hover:bg-white/20 transition-all duration-300"
					aria-label="Play song">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-8 h-8">
						<path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
					</svg>
				</button>
			</Link>
		</div>
	);
};
