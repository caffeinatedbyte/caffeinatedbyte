"use client";
import { useGlobalState } from "@/context/GlobalStateContext";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import debounce from "lodash/debounce";

const ScrollHandler = () => {
	const { setState, state } = useGlobalState() as {
		setState: (state: string) => void;
		state: string;
	};

	const touchStartY = useRef(0);

	useEffect(() => {
		const animateContent = async (
			element: string,
			from: gsap.TweenVars,
			to: gsap.TweenVars,
		) => {
			await gsap.fromTo(element, from, to);
		};

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
					Promise.all([
						animateContent(
							".aboutcontainer",
							{
								scale: 0,
								opacity: 0,
							},
							{
								scale: 1,
								opacity: 1,
								duration: 0.3,
							},
						),
					]),
				out: () =>
					Promise.all([
						animateContent(
							".aboutcontainer",
							{
								scale: 1,
								opacity: 1,
							},
							{
								scale: 0,
								opacity: 0,
								duration: 0.3,
							},
						),
					]),
			},
			work: {
				in: () =>
					Promise.all([
						animateContent(
							".workCards",
							{
								scale: 0,
								opacity: 0,
							},
							{
								scale: 1,
								opacity: 1,
								duration: 0.2,
								stagger: {
									each: 0.2,
									from: "edges",
								},
							},
						),
					]),
				out: () =>
					Promise.all([
						animateContent(
							".workCards",
							{
								scale: 1,
								opacity: 1,
							},
							{
								scale: 0,
								opacity: 0,
								duration: 0.3,
								stagger: {
									each: 0.2,
									from: "edges",
								},
							},
						),
					]),
			},
			techstack: {
				in: () =>
					Promise.all([
						animateContent(
							".techstack",
							{
								scale: 0,
								opacity: 0,
							},
							{
								scale: 1,
								opacity: 1,
								duration: 0.3,
								stagger: {
									each: 0.1,
									from: "start",
								},
							},
						),
					]),
				out: () =>
					Promise.all([
						animateContent(
							".techstack",
							{
								scale: 1,
								opacity: 1,
							},
							{
								scale: 0,
								opacity: 0,
								duration: 0.2,
								stagger: {
									each: 0.1,
									from: "start",
								},
							},
						),
					]),
			},
			contact: {
				in: () =>
					Promise.all([
						animateContent(
							".contactForm",
							{
								y: "-100%",
								scale: 0,
								opacity: 0,
							},
							{
								y: "0%",
								scale: 1,
								opacity: 1,
								duration: 0.4,
								ease: "bounce.in",
							},
						),
					]),
				out: () =>
					Promise.all([
						animateContent(
							".contactForm",
							{
								scale: 1,
								opacity: 1,
							},
							{
								scale: 0,
								opacity: 0,
								duration: 0.2,
								stagger: {
									each: 0.1,
									from: "start",
								},
							},
						),
					]),
			},
		};

		if (state === "home") {
			transitionAnimations.home.in();
		} else if (state === "about") {
			transitionAnimations.home.out();
			transitionAnimations.about.in();
		} else if (state === "work") {
			transitionAnimations.about.out();
			transitionAnimations.work.in();
		} else if (state === "techstack") {
			transitionAnimations.work.out();
			transitionAnimations.techstack.in();
		} else if (state === "contact") {
			transitionAnimations.techstack.out();
			transitionAnimations.contact.in();
		}

		const handleWheel = debounce(async (event: WheelEvent) => {
			if (event.deltaY > 0) {
				if (state === "home") {
					await transitionAnimations.home.out();
					setState("about");
					await transitionAnimations.about.in();
				} else if (state === "about") {
					await transitionAnimations.about.out();
					setState("techstack");
					await transitionAnimations.techstack.in();
				} else if (state === "techstack") {
					await transitionAnimations.techstack.out();
					setState("work");
					await transitionAnimations.work.in();
				} else if (state === "work") {
					await transitionAnimations.work.out();
					setState("contact");
					await transitionAnimations.contact.in();
				} else if (state === "contact") {
					await transitionAnimations.contact.out();
					setState("home");
					await transitionAnimations.home.in();
				}
			} else if (event.deltaY < 0) {
				if (state === "home") {
					await transitionAnimations.home.out();
					setState("contact");
					await transitionAnimations.contact.in();
				} else if (state === "about") {
					await transitionAnimations.about.out();
					setState("home");
					await transitionAnimations.home.in();
				} else if (state === "techstack") {
					await transitionAnimations.techstack.out();
					setState("about");
					await transitionAnimations.about.in();
				} else if (state === "work") {
					await transitionAnimations.work.out();
					setState("techstack");
					await transitionAnimations.techstack.in();
				} else if (state === "contact") {
					await transitionAnimations.contact.out();
					setState("work");
					await transitionAnimations.work.in();
				}
			}
		}, 500);

		const handleTouchStart = (event: TouchEvent) => {
			touchStartY.current = event.touches[0].clientY;
		};

		const handleTouchMove = debounce(async (event: TouchEvent) => {
			const touchEndY = event.touches[0].clientY;
			const deltaY = touchStartY.current - touchEndY;

			if (deltaY > 0) {
				if (state === "home") {
					await transitionAnimations.home.out();
					setState("about");
					await transitionAnimations.about.in();
				} else if (state === "about") {
					await transitionAnimations.about.out();
					setState("techstack");
					await transitionAnimations.techstack.in();
				} else if (state === "techstack") {
					await transitionAnimations.techstack.out();
					setState("work");
					await transitionAnimations.work.in();
				} else if (state === "work") {
					await transitionAnimations.work.out();
					setState("contact");
					await transitionAnimations.contact.in();
				} else if (state === "contact") {
					await transitionAnimations.contact.out();
					setState("home");
					await transitionAnimations.home.in();
				}
			} else if (deltaY < 0) {
				if (state === "home") {
					await transitionAnimations.home.out();
					setState("contact");
					await transitionAnimations.contact.in();
				} else if (state === "about") {
					await transitionAnimations.about.out();
					setState("home");
					await transitionAnimations.home.in();
				} else if (state === "techstack") {
					await transitionAnimations.techstack.out();
					setState("about");
					await transitionAnimations.about.in();
				} else if (state === "work") {
					await transitionAnimations.work.out();
					setState("techstack");
					await transitionAnimations.techstack.in();
				} else if (state === "contact") {
					await transitionAnimations.contact.out();
					setState("work");
					await transitionAnimations.work.in();
				}
			}
		}, 500);

		const handleKeyDown = debounce(async (event: KeyboardEvent) => {
			if (event.key === "ArrowDown" || event.key === "PageDown") {
				if (state === "home") {
					await transitionAnimations.home.out();
					setState("about");
					await transitionAnimations.about.in();
				} else if (state === "about") {
					await transitionAnimations.about.out();
					setState("techstack");
					await transitionAnimations.techstack.in();
				} else if (state === "techstack") {
					await transitionAnimations.techstack.out();
					setState("work");
					await transitionAnimations.work.in();
				} else if (state === "work") {
					await transitionAnimations.work.out();
					setState("contact");
					await transitionAnimations.contact.in();
				} else if (state === "contact") {
					await transitionAnimations.contact.out();
					setState("home");
					await transitionAnimations.home.in();
				}
			} else if (event.key === "ArrowUp" || event.key === "PageUp") {
				if (state === "home") {
					await transitionAnimations.home.out();
					setState("contact");
					await transitionAnimations.contact.in();
				} else if (state === "about") {
					await transitionAnimations.about.out();
					setState("home");
					await transitionAnimations.home.in();
				} else if (state === "techstack") {
					await transitionAnimations.techstack.out();
					setState("about");
					await transitionAnimations.about.in();
				} else if (state === "work") {
					await transitionAnimations.work.out();
					setState("techstack");
					await transitionAnimations.techstack.in();
				} else if (state === "contact") {
					await transitionAnimations.contact.out();
					setState("work");
					await transitionAnimations.work.in();
				}
			}
		}, 500);

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
