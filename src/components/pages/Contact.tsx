"use client";
import { useGlobalState } from "@/context/GlobalStateContext";
import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
	const [flashMessage, setFlashMessage] = useState<string | null>(null);
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (flashMessage) {
			const timer = setTimeout(() => {
				setFlashMessage(null);
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [flashMessage]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const formData = new FormData(e.currentTarget);
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					firstName: formData.get("firstName"),
					lastName: formData.get("lastName"),
					email: formData.get("email"),
					phone: formData.get("phone"),
					message: formData.get("message"),
				}),
			});
			if (response.ok) {
				setFlashMessage("Message sent successfully!");
				if (formRef.current) {
					formRef.current.reset();
				}
			} else {
				const errorData = await response.json();
				setFlashMessage(errorData.error || "Failed to send message");
			}
		} catch (error: unknown) {
			console.error("Error sending message:", error);
			setFlashMessage("Failed to send message. Please try again.");
		}
	};
	const { state } = useGlobalState();

	return (
		<div
			className="flex flex-col justify-center items-center pt-[10vh] min-h-[80vh] px-4"
			style={{ display: state === "contact" ? "flex" : "none" }}>
			{flashMessage && (
				<div
					className={`flashMessage ${
						flashMessage.includes("Failed") ? "bg-red-500" : "bg-green-500"
					} text-white p-4 rounded-lg mb-4 text-sm absolute top-5 cursor-pointer`}>
					{flashMessage}
				</div>
			)}
			<div className="text-4xl md:text-6xl font-bold mb-6">Contact Me</div>
			<div className="contactForm flex flex-col justify-center items-center gap-5 bg-gradient-to-br from-white/15 to-white/4 shadow-white/5 backdrop-blur-lg rounded-lg border-2 border-white/20 h-auto w-full md:w-[70vw] lg:w-[50vw] text-lg md:text-base mx-auto p-4 md:p-8">
				<form
					ref={formRef}
					className="flex flex-col justify-center items-center gap-4 md:gap-8 w-full"
					onSubmit={handleSubmit}>
					<div className="flex flex-col md:flex-row justify-start items-start gap-4 w-full">
						<input
							name="firstName"
							type="text"
							placeholder="First Name"
							required
							autoFocus
							className="w-full md:w-1/2 pt-2 border-b-2 border-white/20 bg-transparent text-xl md:text-lg focus:outline-none focus:border-white"
						/>
						<input
							name="lastName"
							type="text"
							placeholder="Last Name"
							required
							className="w-full md:w-1/2 pt-2 border-b-2 border-white/20 bg-transparent text-xl md:text-lg focus:outline-none focus:border-white"
						/>
					</div>
					<div className="flex flex-col md:flex-row justify-start items-start gap-4 w-full">
						<input
							name="email"
							type="email"
							placeholder="Email"
							required
							className="w-full md:w-1/2 pt-2 border-b-2 border-white/20 bg-transparent text-xl md:text-lg focus:outline-none focus:border-white"
						/>
						<input
							name="phone"
							type="tel"
							placeholder="Phone"
							className="w-full md:w-1/2 pt-2 border-b-2 border-white/20 bg-transparent text-xl md:text-lg focus:outline-none focus:border-white"
						/>
					</div>
					<div className="w-full">
						<textarea
							name="message"
							placeholder="Message"
							required
							className="w-full h-[20vh] p-3 border-2 border-white/20 bg-white/5 text-xl md:text-lg resize-none focus:outline-none focus:border-white"
						/>
					</div>
					<button
						type="submit"
						className="px-8 py-3 w-full md:w-[50%] lg:w-[30%] bg-white/15 hover:bg-white text-white/90 rounded-lg text-xl md:text-lg transition-colors hover:text-black focus:outline-none">
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
