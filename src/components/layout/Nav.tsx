"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useGlobalState } from "@/context/GlobalStateContext";

const NavContent = () => {
	const { state, setState } = useGlobalState();

	const handleState = (active: string) => {
		setState(active);
	};

	return (
		<div
			className={`fixed top-0 px-10 py-10 h-[10vh] w-[100%] overflow-hidden flex justify-between items-center select-none  z-10`}>
			<Image
				src="/Coffee_icon.png"
				alt="logo"
				className="h-[5vh] w-auto cursor-pointer"
				width={100}
				height={100}
				onClick={() => handleState("home")}
			/>
			<div className="flex space-x-10 text-lg text-navlinks font-bold">
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
		</div>
	);
};

const Nav = () => {
	return <NavContent />;
};

export default Nav;
