"use client";
import { useGlobalState } from "@/context/GlobalStateContext";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import debounce from "lodash/debounce";

type Page = "home" | "about" | "techstack" | "work" | "contact";

const states: Page[] = ["home", "about", "techstack", "work", "contact"];

const getNextState = (current: Page, direction: "up" | "down"): Page => {
	const index = states.indexOf(current);
	return direction === "down"
		? states[(index + 1) % states.length]
		: states[(index - 1 + states.length) % states.length];
};

const ScrollHandler = () => {
	const { setState, state } = useGlobalState() as {
		setState: (state: Page) => void;
		state: Page;
	};

	const touchStartY = useRef(0);

	useEffect(() => {
		const animateContent = async (
			element: string,
			from: gsap.TweenVars,
			to: gsap.TweenVars,
		) => gsap.fromTo(element, from, to);

		const transitionAnimations = {
			home: {
				in: () =>
					Promise.all([
						animateContent(
							".homeContent",
							{ x: "-100%", opacity: 0 },
							{ x: "0%", opacity: 1, duration: 0.3 },
						),
						animateContent(
							".homeImage",
							{ x: "100%", opacity: 0 },
							{ x: "0%", opacity: 1, duration: 0.3 },
						),
					]),
				out: () =>
					Promise.all([
						animateContent(
							".homeContent",
							{ x: "0%", opacity: 1 },
							{ x: "-100%", opacity: 0, duration: 0.3 },
						),
						animateContent(
							".homeImage",
							{ x: "0%", opacity: 1 },
							{ x: "100%", opacity: 0, duration: 0.3 },
						),
					]),
			},
			about: {
				in: () =>
					animateContent(
						".aboutcontainer",
						{ scale: 0, opacity: 0 },
						{ scale: 1, opacity: 1, duration: 0.3 },
					),
				out: () =>
					animateContent(
						".aboutcontainer",
						{ scale: 1, opacity: 1 },
						{ scale: 0, opacity: 0, duration: 0.3 },
					),
			},
			work: {
				in: () =>
					animateContent(
						".workCards",
						{ scale: 0, opacity: 0 },
						{
							scale: 1,
							opacity: 1,
							duration: 0.2,
							stagger: { each: 0.2, from: "edges" },
						},
					),
				out: () =>
					animateContent(
						".workCards",
						{ scale: 1, opacity: 1 },
						{
							scale: 0,
							opacity: 0,
							duration: 0.3,
							stagger: { each: 0.2, from: "edges" },
						},
					),
			},
			techstack: {
				in: () =>
					animateContent(
						".techstack",
						{ scale: 0, opacity: 0 },
						{
							scale: 1,
							opacity: 1,
							duration: 0.3,
							stagger: { each: 0.1, from: "start" },
						},
					),
				out: () =>
					animateContent(
						".techstack",
						{ scale: 1, opacity: 1 },
						{
							scale: 0,
							opacity: 0,
							duration: 0.2,
							stagger: { each: 0.1, from: "start" },
						},
					),
			},
			contact: {
				in: () =>
					animateContent(
						".contactForm",
						{ y: "-100%", scale: 0, opacity: 0 },
						{ y: "0%", scale: 1, opacity: 1, duration: 0.4, ease: "bounce.in" },
					),
				out: () =>
					animateContent(
						".contactForm",
						{ scale: 1, opacity: 1 },
						{
							scale: 0,
							opacity: 0,
							duration: 0.2,
							stagger: { each: 0.1, from: "start" },
						},
					),
			},
		};

		const handleTransition = async (direction: "up" | "down") => {
			const nextState = getNextState(state, direction);
			await transitionAnimations[state].out();
			setState(nextState);
			await transitionAnimations[nextState].in();
		};

		const debouncedTransition = debounce(
			(direction: "up" | "down") => handleTransition(direction),
			500,
		);

		const handleWheel = (event: WheelEvent) => {
			if (event.deltaY > 0) {
				debouncedTransition("down");
			} else if (event.deltaY < 0) {
				debouncedTransition("up");
			}
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			if (["ArrowDown", "PageDown"].includes(event.key)) {
				debouncedTransition("down");
			} else if (["ArrowUp", "PageUp"].includes(event.key)) {
				debouncedTransition("up");
			}
		};

		const handleTouchStart = (event: TouchEvent) => {
			touchStartY.current = event.touches[0].clientY;
		};

		const handleTouchMove = (event: TouchEvent) => {
			const touchEndY = event.touches[0].clientY;
			const deltaY = touchStartY.current - touchEndY;
			if (deltaY > 0) {
				debouncedTransition("down");
			} else if (deltaY < 0) {
				debouncedTransition("up");
			}
		};

		window.addEventListener("wheel", handleWheel, { passive: true });
		window.addEventListener("touchstart", handleTouchStart, { passive: true });
		window.addEventListener("touchmove", handleTouchMove, { passive: true });
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("wheel", handleWheel);
			window.removeEventListener("touchstart", handleTouchStart);
			window.removeEventListener("touchmove", handleTouchMove);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [setState, state]);

	return null;
};

export default ScrollHandler;
