"use client";
import Image from "next/image";
import Link from "next/link";
import { useGlobalState } from "@/context/GlobalStateContext";

const Home: React.FC = () => {
	const { state } = useGlobalState();

	return (
		<div
			className="flex items-center justify-center pt-[10vh] px-20 w-full max-w-full h-[90vh] overflow-hidden"
			style={{ display: state !== "home" ? "none" : "" }}>
			<div className="w-[60vw] h-auto ml-24 homeContent">
				<div className="flex bg-clip-text uppercase text-transparent bg-gradient-to-b from-[rgba(255,255,255,0.28)] to-[rgba(0,10,45,0.28)] select-none text-[12vw] font-bold -mb-8 -ml-4 p-0">
					Hello
				</div>
				<div className="text-[3vw]">
					I&apos;m&nbsp;<span className="font-bold">Vedant Kamble</span>
				</div>
				<div className="text-[2.5vw]">A Caffeinated Byte</div>
				<div className="text-[2vw] w-[60%] text-disabled">
					Full Stack Developer, Entrepreneur
				</div>
				<div className="flex justify-start items-center w-[50%] mt-12 gap-6">
					<Link href="https://github.com/caffeinatedbyte" target="_blank">
						<Image
							src={"/Github_icon.png"}
							alt="Github Caffeinated Byte"
							width={50}
							height={50}
							className="cursor-pointer"
						/>
					</Link>
					<Link href="https://x.com/vedantkamble26" target="_blank">
						<Image
							src={"/X_icon.png"}
							alt="Twitter (x) Vedant Kamble"
							width={50}
							height={50}
							className="cursor-pointer"
						/>
					</Link>
					<Link href="https://www.linkedin.com/in/vedantk26" target="_blank">
						<Image
							src={"/Linkedin_icon.png"}
							alt="Linkedin Vedant Kamble"
							width={50}
							height={50}
							className="cursor-pointer"
						/>
					</Link>
				</div>
			</div>
			<div className="flex justify-center items-center w-[40vw] homeImage">
				<Image
					src="/Home_image.png"
					alt="Vedant Kamble"
					width={500}
					height={500}
					className="w-[35vw] h-auto object-cover"
				/>
			</div>
		</div>
	);
};

export default Home;
