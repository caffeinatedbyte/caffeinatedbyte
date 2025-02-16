"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGlobalState } from "@/context/GlobalStateContext";

const Nav = () => {
	const { state, setState } = useGlobalState();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const handleState = (active: string) => {
		setState(active);
		setIsSidebarOpen(false);
	};

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className="fixed top-0 px-10 py-10 h-[10vh] w-[100%] overflow-hidden flex justify-between items-center select-none z-10">
			<Image
				src="/Coffee_icon.webp"
				alt="logo"
				className="h-[5vh] w-auto cursor-pointer"
				width={100}
				height={100}
				onClick={() => handleState("home")}
			/>
			<div className="hidden md:flex space-x-10 text-lg text-navlinks font-bold">
				<ul className="list-none flex space-x-10">
					<li
						className={`cursor-pointer hover:text-white ${
							state == "home" ? "text-white" : ""
						} `}
						onClick={() => handleState("home")}>
						Home
					</li>
					<li
						className={`cursor-pointer hover:text-white ${
							state == "about" || state == "techstack" ? "text-white" : ""
						} `}
						onClick={() => handleState("about")}>
						About
					</li>
					<li
						className={`cursor-pointer hover:text-white ${
							state == "work" ? "text-white" : ""
						} `}
						onClick={() => handleState("work")}>
						Work
					</li>
					<li
						className={`cursor-pointer hover:text-white ${
							state == "contact" ? "text-white" : ""
						} `}
						onClick={() => handleState("contact")}>
						Contact
					</li>
					<li className={`cursor-pointer hover:text-white`}>
						<Link href="https://blog.caffeinatedbyte.com">Blog</Link>
					</li>
				</ul>
			</div>
			<div className="md:hidden flex items-center">
				<button
					onClick={toggleSidebar}
					className="text-white focus:outline-none">
					{isSidebarOpen ? "Close" : "Menu"}
				</button>
			</div>
			{isSidebarOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center space-y-10 text-lg text-navlinks font-bold">
					<ul className="list-none flex flex-col space-y-10">
						<li
							className={`cursor-pointer hover:text-white ${
								state == "home" ? "text-white" : ""
							} `}
							onClick={() => handleState("home")}>
							Home
						</li>
						<li
							className={`cursor-pointer hover:text-white ${
								state == "about" || state == "techstack" ? "text-white" : ""
							} `}
							onClick={() => handleState("about")}>
							About
						</li>
						<li
							className={`cursor-pointer hover:text-white ${
								state == "work" ? "text-white" : ""
							} `}
							onClick={() => handleState("work")}>
							Work
						</li>
						<li
							className={`cursor-pointer hover:text-white ${
								state == "contact" ? "text-white" : ""
							} `}
							onClick={() => handleState("contact")}>
							Contact
						</li>
						<li className={`cursor-pointer hover:text-white`}>
							<Link href="https://blog.caffeinatedbyte.com">Blog</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Nav;
