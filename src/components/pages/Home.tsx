"use client";
import Image from "next/image";
import Link from "next/link";
import { useGlobalState } from "@/context/GlobalStateContext";

const Home: React.FC = () => {
	const { state } = useGlobalState();

	return (
		<div
			className="flex flex-col md:flex-row items-center justify-center pt-[10vh] px-4 md:px-20 w-full max-w-full h-auto overflow-hidden"
			style={{ display: state !== "home" ? "none" : "" }}>
			<div className="w-full md:w-[60vw] h-auto ml-0 md:ml-24 homeContent text-left">
				<div className="flex bg-clip-text uppercase text-transparent bg-gradient-to-b from-[rgba(255,255,255,0.28)] to-[rgba(0,10,45,0.28)] select-none text-[12vw] md:text-[8vw] lg:text-[6vw] font-bold -mb-8 p-0 justify-start">
					Hello
				</div>
				<div className="text-[9vw] md:text-[4vw] mt-4 md:mt-0">
					I&apos;m&nbsp;<span className="font-bold">Vedant Kamble</span>
				</div>
				<div className="text-[7vw] md:text-[3vw]">A Caffeinated Byte</div>
				<div className="text-[5vw] md:text-[2.5vw] w-full md:w-[60%] text-disabled">
					Full Stack Developer, Entrepreneur
				</div>
				<div className="flex flex-wrap justify-center md:justify-start items-center w-full md:w-[50%] mt-12 gap-6">
					<Link href="https://github.com/caffeinatedbyte" target="_blank">
						<Image
							src={"/Github_icon.webp"}
							alt="Github Caffeinated Byte"
							width={40}
							height={40}
							className="cursor-pointer"
						/>
					</Link>
					<Link href="https://x.com/vedantkamble26" target="_blank">
						<Image
							src={"/X_icon.webp"}
							alt="Twitter (x) Vedant Kamble"
							width={40}
							height={40}
							className="cursor-pointer"
						/>
					</Link>
					<Link href="https://www.linkedin.com/in/vedantk26" target="_blank">
						<Image
							src={"/Linkedin_icon.webp"}
							alt="Linkedin Vedant Kamble"
							width={40}
							height={40}
							className="cursor-pointer"
						/>
					</Link>
				</div>
			</div>
			<div className="flex justify-center items-center w-full md:w-[40vw] homeImage mt-8 md:mt-0">
				<Image
					src="/Home_image.webp"
					alt="Vedant Kamble"
					width={400}
					height={400}
					className="w-[80vw] md:w-[35vw] h-auto object-cover"
				/>
			</div>
		</div>
	);
};

export default Home;
