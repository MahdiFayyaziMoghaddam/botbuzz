import Accordion from "@/components/accordion/Accordion";
import Button from "@/components/button/Button";
import Automation from "@/components/icons/automation";
import Cast from "@/components/icons/cast";
import Check from "@/components/icons/check";
import Group from "@/components/icons/group";
import Layout from "@/components/icons/layout";
import Reload from "@/components/icons/reload";
import Vital from "@/components/icons/vital";
import Image from "@/components/image/Image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<nav className="grid grid-cols-[1fr_2fr_1fr] items-center place-content-evenly px-64 py-24 max-md:py-20 max-sm:py-18 max-xs:py-14 max-xl:px-48 max-lg:px-32 max-md:px-16 max-sm:px-12 max-xs:px-11">
				<div className="flex items-center gap-[0.8rem] max-lg:gap-7 max-md:gap-6 max-sm:gap-5 max-xs:gap-4 select-none justify-self-start">
					<Image
						src={"/images/logo.png"}
						alt="icon"
						className="relative w-[3.6rem] max-lg:w-[3rem] max-md:w-[2.4rem] max-sm:w-[1.8rem] aspect-[1/1.09] shrink-0"
					/>
					<p className="text-[2.4rem] max-lg:text-[2rem] max-md:text-[1.6rem] max-sm:text-[1.2rem]">BotBuzz</p>
				</div>
				<div className="flex items-center py-[1.6rem] max-lg:py-[1.3rem] max-md:py-[1rem] max-sm:py-[0.7rem] px-57 max-xl:px-48 max-lg:px-36 max-md:px-24 max-sm:px-12 max-xs:px-10 gap-48 max-xl:gap-41 max-lg:gap-34 max-md:gap-27 max-sm:gap-20 max-xs:gap-11 justify-self-center border-1 border-glass-stroke rounded-[7rem] max-lg:rounded-[5.5rem] max-md:rounded-[4rem] max-sm:rounded-[3.6rem]">
					<Link href={"#FAQ"} className="link-underline max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem]">
						FAQ
					</Link>
					<Link
						href={"#pricing"}
						className="link-underline max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem]"
					>
						Pricing
					</Link>
					<Link
						href={"/signin"}
						className="link-underline max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem]"
					>
						Sign in
					</Link>
				</div>
				<p className="badge">Get Started</p>
			</nav>
			<Image
				src="/images/landing-lines.png"
				alt="bruh"
				loading="eager"
				className="absolute w-full aspect-[1.7/1] -z-100"
			/>
			<header className="mt-90 max-xl:mt-75 max-lg:mt-60 max-md:mt-35 max-sm:mt-30 max-xs:mt-25">
				<h1 className="text-center max-lg:text-[3.6rem] max-md:text-[2.8rem] max-sm:text-[2.2rem]">
					Unlock The Power Of <span className="text-icon-purple text-nowrap">BotBuzz AI</span> <br /> With Smartest
					AI{" "}
				</h1>
				<p className="text-center mt-[1.6rem] max-md:mt-[1.2rem] max-sm:mt-[0.8rem] text-typo-dark-gray max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.8rem]">
					Your Personal AI, Tailored for Every Conversation, Anytime, Anywhere
				</p>
				<Button className="font-normal! px-[4.3rem] max-lg:px-[3.5rem] max-md:px-[2.8rem] mt-40 max-xl:mt-35 max-lg:mt-30 max-md:mt-20 max-sm:mt-15 mx-auto max-lg:text-[1.2rem] max-md:text-[1rem]">
					Start Conversation for free
				</Button>
				<div className="flex justify-center items-center gap-[1.6rem] max-md:gap-[1.2rem] max-sm:gap-[0.8rem] text-center mt-[1.8rem] max-md:mt-[1.4rem] max-sm:mt-[1rem] text-typo-dark-gray select-none max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.9rem]">
					<Image
						src="/images/credit-card.png"
						alt="card"
						className="relative w-24 aspect-[1.33/1] max-lg:w-21 max-md:w-18 max-sm:w-15 max-xs:w-13"
					/>
					No credit card required
				</div>
				<Image
					src="/images/landing.png"
					alt="landing-image"
					className="relative w-full aspect-[2.3/1] mt-[1.6rem] max-md:mt-[1.2rem] max-sm:mt-[0.8rem] mx-auto"
				/>
			</header>
			<section className="flex flex-col mt-90 max-xl:mt-75 max-lg:mt-60 max-md:mt-35 max-sm:mt-30 px-[6.4rem] max-xl:px-[4.8rem] max-lg:px-[3.2rem] max-md:px-[1.6rem]">
				<p className="inline-block badge mx-auto">Get in touch for free</p>
				<h2 className="text-center mt-[1.6rem] max-md:mt-[1.2rem] max-sm:mt-[0.8rem]">
					Instant Content Generation with AI
				</h2>
				<p className="text-center mt-[1.4rem] max-lg:mt-[0.9rem] max-md:mt-[1rem] max-sm:mt-[0.75rem] max-xs:mt-[0.5rem] text-typo-medium-gray max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem]">
					Provide Descriptions, Get Instant AI Generated Content
				</p>
				<div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[3.2rem] max-lg:gap-[2.4rem] max-md:gap-[1.6rem] mt-60 max-xl:mt-48 max-lg:mt-36 max-md:mt-30 max-sm:mt-24">
					<div className="py-[5.1rem] max-lg:py-[4rem] max-md:py-[3rem] px-[1.6rem] max-md:px-[1.2rem] border-1 border-glass-stroke rounded-[1.2rem] max-lg:rounded-[1rem] max-md:rounded-[0.8rem] bg-linear-0 from-white/0 to-white/5 shadow-[0_-4px_4px_0] shadow-light-pink/14">
						<Vital className="size-40 max-lg:size-32 max-md:size-28 text-btn-purple mx-auto" />
						<p className="text-center mt-[1.6rem] max-md:mt-[1.2rem] font-semibold text-[2rem] max-lg:text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.4rem]">
							Effortless Content AI
						</p>
						<p className="text-typo-medium-gray mt-[1.6rem] max-md:mt-[1.2rem] text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem] max-w-[27rem] mx-auto text-center">
							Let our AI-powered service the hard work out of content creation. Get started today with AI.
						</p>
					</div>
					<div className="py-[5.1rem] max-lg:py-[4rem] max-md:py-[3rem] px-[1.6rem] max-md:px-[1.2rem] border-1 border-glass-stroke rounded-[1.2rem] max-lg:rounded-[1rem] max-md:rounded-[0.8rem] bg-linear-0 from-white/0 to-white/5 shadow-[0_-4px_4px_0] shadow-light-pink/14">
						<Layout className="size-40 max-lg:size-32 max-md:size-28 text-btn-purple mx-auto" />
						<p className="text-center mt-[1.6rem] max-md:mt-[1.2rem] font-semibold text-[2rem] max-lg:text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.4rem]">
							Real Time Web References
						</p>
						<p className="text-typo-medium-gray mt-[1.6rem] max-md:mt-[1.2rem] text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem] max-w-[27rem] mx-auto text-center">
							Access up-to-date information on any topic during your conversations with Ai-Con.
						</p>
					</div>
					<div className="py-[5.1rem] max-lg:py-[4rem] max-md:py-[3rem] px-[1.6rem] max-md:px-[1.2rem] border-1 border-glass-stroke rounded-[1.2rem] max-lg:rounded-[1rem] max-md:rounded-[0.8rem] bg-linear-0 from-white/0 to-white/5 shadow-[0_-4px_4px_0] shadow-light-pink/14">
						<Automation className="size-40 max-lg:size-32 max-md:size-28 text-btn-purple mx-auto" />
						<p className="text-center mt-[1.6rem] max-md:mt-[1.2rem] font-semibold text-[2rem] max-lg:text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.4rem]">
							Emotional Intelligence
						</p>
						<p className="text-typo-medium-gray mt-[1.6rem] max-md:mt-[1.2rem] text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem] max-w-[27rem] mx-auto text-center">
							Enhances the empathetic aspect of your interactions, making your conversations more meaningful.
						</p>
					</div>
					<div className="py-[5.1rem] max-lg:py-[4rem] max-md:py-[3rem] px-[1.6rem] max-md:px-[1.2rem] border-1 border-glass-stroke rounded-[1.2rem] max-lg:rounded-[1rem] max-md:rounded-[0.8rem] bg-linear-0 from-white/0 to-white/5 shadow-[0_-4px_4px_0] shadow-light-pink/14">
						<Group className="size-40 max-lg:size-32 max-md:size-28 text-btn-purple mx-auto" />
						<p className="text-center mt-[1.6rem] max-md:mt-[1.2rem] font-semibold text-[2rem] max-lg:text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.4rem]">
							Multiple Personalities
						</p>
						<p className="text-typo-medium-gray mt-[1.6rem] max-md:mt-[1.2rem] text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem] max-w-[27rem] mx-auto text-center">
							Ai-Con offers a variety of personalities for your AI companion, such as a Explorer, Sage and etc.
						</p>
					</div>
					<div className="py-[5.1rem] max-lg:py-[4rem] max-md:py-[3rem] px-[1.6rem] max-md:px-[1.2rem] border-1 border-glass-stroke rounded-[1.2rem] max-lg:rounded-[1rem] max-md:rounded-[0.8rem] bg-linear-0 from-white/0 to-white/5 shadow-[0_-4px_4px_0] shadow-light-pink/14">
						<Reload className="size-40 max-lg:size-32 max-md:size-28 text-btn-purple mx-auto" />
						<p className="text-center mt-[1.6rem] max-md:mt-[1.2rem] font-semibold text-[2rem] max-lg:text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.4rem]">
							Dynamic Suggestions
						</p>
						<p className="text-typo-medium-gray mt-[1.6rem] max-md:mt-[1.2rem] text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem] max-w-[27rem] mx-auto text-center">
							Ai-Con provides dynamic topic suggestions based on your interests and previous conversations.
						</p>
					</div>
					<div className="py-[5.1rem] max-lg:py-[4rem] max-md:py-[3rem] px-[1.6rem] max-md:px-[1.2rem] border-1 border-glass-stroke rounded-[1.2rem] max-lg:rounded-[1rem] max-md:rounded-[0.8rem] bg-linear-0 from-white/0 to-white/5 shadow-[0_-4px_4px_0] shadow-light-pink/14">
						<Cast className="size-40 max-lg:size-32 max-md:size-28 text-btn-purple mx-auto" />
						<p className="text-center mt-[1.6rem] max-md:mt-[1.2rem] font-semibold text-[2rem] max-lg:text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.4rem]">
							Personalized Responses
						</p>
						<p className="text-typo-medium-gray mt-[1.6rem] max-md:mt-[1.2rem] text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem] max-w-[27rem] mx-auto text-center">
							Personalization makes your interactions more engaging and tailored to your unique needs.
						</p>
					</div>
				</div>
			</section>
			<section
				className="flex flex-col mt-80 max-xl:mt-65 max-lg:mt-50 max-md:mt-35 max-sm:mt-25 pt-40 max-xl:pt-32 max-lg:pt-24 max-md:pt-16"
				id="pricing"
			>
				<p className="inline-block badge mx-auto">Plan & Pricing</p>
				<h2 className="text-center mt-[1.6rem] max-md:mt-[1.2rem] max-sm:mt-[0.8rem]">
					Choose the Plan that&apos;s Right For You
				</h2>
				<p className="text-center mt-[1.4rem] max-lg:mt-[0.9rem] max-md:mt-[1rem] max-sm:mt-[0.75rem] max-xs:mt-[0.5rem] text-typo-medium-gray max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem]">
					Provide Descriptions, Get Instant AI Generated Content
				</p>
				<div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[3.2rem] max-lg:gap-[2.4rem] max-md:gap-[1.6rem] mt-[5.6rem] max-lg:mt-[4rem] max-md:mt-[3rem] px-[17rem] max-xl:px-[4rem] max-md:px-[1.6rem] max-sm:px-[6rem] max-xs:px-[2rem]">
					<div className="flex flex-col justify-between bg-glass-white py-20 max-lg:py-16 max-md:py-12 px-[1.6rem] max-md:px-[1.2rem] rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] border-1 border-glass-stroke">
						<div>
							<Image
								src="/images/free-plan.png"
								alt="free-plan"
								className="relative w-full aspect-[2/1] rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] overflow-hidden"
							/>
							<h5 className="mt-[1.6rem] max-md:mt-[1.2rem] max-lg:text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.6rem]! max-xs:text-[1.4rem]!">
								Free
							</h5>
							<p className="mt-[0.8rem] max-md:mt-[0.6rem] text-typo-medium-gray text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem]">
								USD $0/month
							</p>
							<ul className="flex flex-col gap-20 max-lg:gap-16 max-md:gap-12 mt-[3.2rem] max-lg:mt-[2.4rem] max-md:mt-[1.6rem] text-[1.4rem] max-lg:text-[1.2rem] max-md:text-[1rem] max-w-[28rem]">
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Limited access to Multiple Personalities (3 personalities)
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Basic Dynamic Suggestions
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Multi-platform Integration (limited to 1 device)
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Multilingual Support (2 languages)
								</li>
							</ul>
						</div>

						<Button
							variant="solid"
							className="mt-[3.2rem] max-lg:mt-[2.4rem] max-md:mt-[1.8rem] text-[1.2rem]! max-lg:text-[1rem]!"
							disabled
						>
							Your Current Plan
						</Button>
					</div>
					<div className="flex flex-col justify-between bg-[#1E2024] py-20 max-lg:py-16 max-md:py-12 px-[1.6rem] max-md:px-[1.2rem] rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] border-1 border-glass-stroke">
						<div>
							<Image
								src="/images/plus-plan.png"
								alt="plus-plan"
								className="relative w-full aspect-[2/1] rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] overflow-hidden"
							/>
							<div className="flex items-center justify-between mt-[1.6rem] max-md:mt-[1.2rem]">
								<h5 className="max-lg:text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.6rem]! max-xs:text-[1.4rem]!">
									Plus
								</h5>
								<div className="text-btn-purple border-1 py-[0.4rem] px-[0.7rem] text-[1.2rem] max-lg:text-[1rem] max-md:text-[0.8rem] p-10 rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.45rem]">
									Best Selling
								</div>
							</div>
							<p className="mt-[0.8rem] max-md:mt-[0.6rem] text-typo-medium-gray text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem]">
								USD $20/month
							</p>
							<ul className="flex flex-col gap-20 max-lg:gap-16 max-md:gap-12 mt-[3.2rem] max-lg:mt-[2.4rem] max-md:mt-[1.6rem] text-[1.4rem] max-lg:text-[1.2rem] max-md:text-[1rem] max-w-[28rem]">
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Access to Multiple Personalities (10 personalities)
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Real-time Web References (unlimited queries)
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Multi-platform Integration (up to 5 devices)
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Multilingual Support (10 languages)
								</li>
							</ul>
						</div>
						<Button
							variant="solid"
							className="mt-[3.2rem] max-lg:mt-[2.4rem] max-md:mt-1.2rem] text-[1.2rem]! max-lg:text-[1rem]!"
						>
							Upgrade to Plus
						</Button>
					</div>
					<div className="flex flex-col justify-between bg-icon-black py-20 max-lg:py-16 max-md:py-12 px-[1.6rem] max-md:px-[1.2rem] rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] border-1 border-glass-stroke">
						<div>
							<Image
								src="/images/team-plan.png"
								alt="team-plan"
								className="relative w-full aspect-[2/1] rounded-[1.6rem] max-lg:rounded-[1.2rem] max-md:rounded-[0.8rem] overflow-hidden"
							/>
							<h5 className="mt-[1.6rem] max-md:mt-[1.2rem] max-lg:text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.6rem]! max-xs:text-[1.4rem]!">
								Team
							</h5>
							<p className="mt-[0.8rem] max-md:mt-[0.6rem] text-typo-medium-gray text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem]">
								USD $40/month (per user)
							</p>
							<ul className="flex flex-col gap-20 max-lg:gap-16 max-md:gap-12 mt-[3.2rem] max-lg:mt-[2.4rem] max-md:mt-[1.6rem] text-[1.4rem] max-lg:text-[1.2rem] max-md:text-[1rem] max-w-[28rem]">
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Advanced Generated Images (limited to 100 images/month for the team)
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Multilingual Support (15 languages)
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Advanced Feedback Mechanism
								</li>
								<li className="flex gap-[1.2rem] max-md:gap-[0.8rem]">
									<Check className="size-[2.4rem] max-lg:size-[2rem] max-md:size-[1.6rem] shrink-0" />
									Collaborative conversation features for team projects
								</li>
							</ul>
						</div>

						<Button
							variant="solid"
							className="mt-[3.2rem] max-lg:mt-[2.4rem] max-md:mt-1.2rem] text-[1.2rem]! max-lg:text-[1rem]!"
						>
							Upgrade to Team
						</Button>
					</div>
				</div>
			</section>
			<section
				id="personalize"
				className="flex justify-between items-center max-lg:flex-col max-lg:gap-[4rem] mt-120 max-xl:mt-90 max-lg:mt-60 max-md:mt-35 max-sm:mt-30 px-[14rem] max-xl:px-[4rem] max-md:px-[1.6rem]"
			>
				<div className="max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center">
					<p className="[background:var(--gradient-text)] text-transparent bg-clip-text! max-lg:text-[1.4rem] max-md:text-[1.2rem]">
						AI Features
					</p>
					<h4 className="mt-20 max-lg:mt-16 max-md:mt-12 max-lg:text-[3rem] max-md:text-[2.4rem]">
						Discover Personalities
					</h4>
					<p className="text-typo-medium-gray mt-[1.6rem] max-md:mt-[1.2rem] max-w-520 max-lg:text-[1.4rem] max-md:text-[1.2rem] max-lg:max-w-[45rem]">
						Switch between various personalities to match your mood and make conversations more engaging.
					</p>
					<ul className="flex flex-col gap-[1.5rem] max-md:gap-[1rem] mt-[4.8rem] max-lg:mt-[3.6rem] max-md:mt-[2.4rem] *:flex *:items-center *:gap-[1.5rem] max-md:*:gap-[1rem] *:text-[1.4rem] max-lg:*:text-[1.2rem] max-md:*:text-[1rem] *:*:nth-[1]:size-[1.6rem] max-lg:*:*:nth-[1]:size-[1.4rem] *:*:nth-[1]:rounded-full *:*:nth-[1]:bg-btn-purple max-lg:*:justify-center">
						<li>
							<Check />
							12 different personalities
						</li>
						<li>
							<Check />
							Personalized experience
						</li>
						<li>
							<Check />
							Empathetic interactions
						</li>
					</ul>
				</div>
				<div className="relative flex items-start pt-[2.4rem] pl-[3.72rem] pb-[2.4rem] border-1 border-glass-stroke rounded-[1.2rem] bg-linear-0 from-white/0 to-white/5 shadow-[0_-4px_4px_0] shadow-light-pink/14 select-none max-md:scale-75 max-md:-my-40 max-sm:scale-62 max-sm:-my-75 max-xs:scale-54 max-xs:-my-85">
					<div className="flex">
						<div className="flex flex-col items-center bg-[#27292E] py-[1.4rem] px-20 rounded-[0.8rem] border-[0.08rem] border-typo-dark-gray">
							<Image
								src="/images/sage.png"
								alt="sage"
								className="relative size-[4.8rem] rounded-full overflow-hidden"
							/>
							<p className="mt-[0.8rem] text-[1.2rem]">Sage</p>
							<p className="text-[0.8rem] text-typo-medium-gray max-w-90 text-center mt-[0.9rem]">
								A wise and knowledgeable Ai, perfect for deep discussions, and a trusted com...
							</p>
							<div className="mt-10 bg-btn-dark h-[1.4rem] w-100 rounded-[0.4rem]"></div>
							<div className="mt-[0.4rem] bg-btn-dark h-[1.4rem] w-80 rounded-[0.4rem]"></div>
							<div className="mt-[0.4rem] bg-btn-dark h-[1.4rem] w-60 rounded-[0.4rem]"></div>
						</div>
						<div className="w-150 h-50 mt-50 rounded-tr-[0.4rem] border-dashed border-btn-dark border-t-1 border-r-1" />
					</div>

					<div className="flex gap-[0.3rem] mt-[10rem] -ml-220">
						<div className="bg-[#282A2F] rounded-tl-[0.6rem] rounded-bl-[0.6rem] p-[0.9rem] border-typo-dark-gray border-1 shrink-0">
							<Image src="/images/sage.png" alt="sage" className="relative size-110 rounded-full overflow-hidden" />
							<p className="mt-[0.9rem] text-center font-semibold text-[1.4rem]">Sage</p>
							<div className="mt-[1.6rem] rounded-[0.2rem] bg-btn-dark w-full h-[0.8rem]"></div>
							<div className="mt-[0.4rem] rounded-[0.2rem] bg-btn-dark w-full h-[0.8rem]"></div>
							<Button
								variant="solid"
								className="text-[0.6rem]! rounded-[0.3rem]! py-[0.5rem]! px-[2.5rem]! mx-auto mt-[1.6rem] outline-none! hover:brightness-100! active:brightness-100! cursor-auto! focus:brightness-100!"
							>
								Chat Now
							</Button>
						</div>
						<div className="bg-[#282A2F] pl-[0.9rem] pt-30 pr-20 pb-20 border-typo-dark-gray border-1 border-r-0 shrink w-307">
							<div className="grid grid-cols-[3.2rem_1fr] h-[0.8rem] justify-center">
								<p className="text-[0.6rem]">Role</p>
								<div className="bg-btn-dark rounded-[0.2rem]"></div>
							</div>
							<div className="grid grid-cols-[3.2rem_1fr] h-[0.8rem] justify-center mt-20">
								<p className="text-[0.6rem]">Purpose</p>
								<div className="bg-btn-dark rounded-[0.2rem]"></div>
							</div>
							<h6 className="mt-[2.6rem] text-[0.9rem]!">Character Skills</h6>
							<div className="flex items-start flex-wrap max-w-350 mt-[0.6rem] *:h-[1.4rem] gap-[0.6rem] *:bg-btn-dark *:rounded-[0.3rem] *:shrink-0">
								<div className="w-78"></div>
								<div className="w-79"></div>
								<div className="w-85"></div>
								<div className="w-97"></div>
								<div className="w-100"></div>
								<div className="w-60"></div>
								<div className="w-70"></div>
								<div className="w-60"></div>
								<div className="w-56"></div>
							</div>
							<h6 className="mt-[2.6rem] text-[0.9rem]!">Interaction Style</h6>
							<div className="flex items-start flex-wrap max-w-350 mt-[0.6rem] *:h-[1.4rem] gap-[0.6rem] *:bg-btn-dark *:rounded-[0.3rem] *:shrink-0">
								<div className="w-[6.5rem]"></div>
								<div className="w-[8.5rem]"></div>
								<div className="w-[7.8rem]"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="flex justify-between items-center max-lg:flex-col max-lg:gap-[4rem] mt-120 max-xl:mt-90 max-lg:mt-60 max-md:mt-35 max-sm:mt-30 px-[14rem] max-xl:px-[4rem] max-md:px-[1.6rem]">
				<div className="max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center">
					<p className="[background:var(--gradient-text)] text-transparent bg-clip-text! max-lg:text-[1.4rem] max-md:text-[1.2rem]">
						AI Features
					</p>
					<h4 className="mt-20 max-lg:mt-16 max-md:mt-12 max-lg:text-[3rem] max-md:text-[2.4rem]">
						Seamless Follow-up Questions
					</h4>
					<p className="text-typo-medium-gray mt-[1.6rem] max-md:mt-[1.2rem] max-w-520 max-lg:text-[1.4rem] max-md:text-[1.2rem] max-lg:max-w-[45rem]">
						Keeps the conversation flowing naturally by asking relevant follow-up questions.
					</p>
					<ul className="flex flex-col gap-[1.5rem] max-md:gap-[1rem] mt-[4.8rem] max-lg:mt-[3.6rem] max-md:mt-[2.4rem] *:flex *:items-center *:gap-[1.5rem] max-md:*:gap-[1rem] *:text-[1.4rem] max-lg:*:text-[1.2rem] max-md:*:text-[1rem] *:*:nth-[1]:size-[1.6rem] max-lg:*:*:nth-[1]:size-[1.4rem] *:*:nth-[1]:rounded-full *:*:nth-[1]:bg-btn-purple max-lg:*:justify-center">
						<li>
							<Check />
							Enhanced Engagement
						</li>
						<li>
							<Check />
							Deeper Understanding
						</li>
						<li>
							<Check />
							Smooth Interactions
						</li>
					</ul>
				</div>
				<div className="relative flex items-start py-40 pl-[3.2rem] border-1 border-glass-stroke rounded-[1.2rem] max-lg:rounded-[1rem] max-md:rounded-[0.8rem] bg-linear-0 from-white/0 to-white/5 shadow-[0_-4px_4px_0] shadow-light-pink/14 select-none max-md:scale-75 max-md:-my-40 max-sm:scale-62 max-sm:-my-75 max-xs:scale-54 max-xs:-my-85">
					<div className="flex items-start bg-[#27292E] rounded-tl-[1.6rem] rounded-bl-[1.6rem] border-[0.08rem] border-r-0 border-typo-dark-gray p-40 pr-0">
						<div className="w-30 h-150 border-l-[0.2rem] border-b-[0.2rem] rounded-bl-[1.2rem] border-typo-dark-gray">
							<div className="w-[3.1rem] h-30 border-l-[0.2rem] border-b-[0.2rem] rounded-bl-[1.2rem] border-typo-dark-gray -ml-[0.2rem]"></div>
						</div>
						<div className="p-10 pr-0">
							<div className="flex items-center text-[0.9rem] text-typo-light-gray gap-10 py-10">
								Your Question
								<Image
									src="/images/user.png"
									alt="user"
									className="relative size-20 rounded-[0.5rem] overflow-hidden shrink-0"
								/>
							</div>
							<div className="mt-10 rounded-bl-[0.5rem] rounded-tl-[0.5rem] bg-btn-dark h-[2.3rem] w-[43.56rem]"></div>
							<div className="mt-[0.7rem] rounded-[0.5rem] bg-btn-dark h-[2.3rem] w-290"></div>
							<div className="flex items-center text-[1rem] text-btn-purple gap-5 py-10 mt-[1.65rem]">
								<Image
									src="/images/botbuzz.png"
									alt="user"
									className="relative size-20 rounded-[0.5rem] overflow-hidden shrink-0"
								/>
								Bot Buzz Response
								<span className="ml-[0.5rem] text-typo-light-gray text-[0.5rem]">01 July ▪ 05:12 PM</span>
							</div>
							<div className="mt-10 rounded-bl-[0.5rem] rounded-tl-[0.5rem] bg-btn-dark h-[2.3rem] w-[43.56rem]"></div>
							<div className="mt-[0.7rem] rounded-bl-[0.5rem] rounded-tl-[0.5rem] bg-btn-dark h-[2.3rem] w-[43.56rem]"></div>
							<div className="mt-[0.7rem] rounded-bl-[0.5rem] rounded-tl-[0.5rem] bg-btn-dark h-[2.3rem] w-[43.56rem]"></div>
							<div className="mt-[0.7rem] rounded-bl-[0.5rem] rounded-tl-[0.5rem] bg-btn-dark h-[2.3rem] w-[43.56rem]"></div>
							<div className="flex gap-10 mt-[1.5rem]">
								<div className="text-btn-purple py-[0.6rem] px-[0.9rem] rounded-[0.5rem] border-1 text-[0.85rem]">
									Can our perception of reality be trusted?
								</div>
								<div className="text-btn-purple py-[0.6rem] px-[0.9rem] rounded-[0.5rem] border-1 text-[0.85rem]">
									How do different philosophers define the self?
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				id="FAQ"
				className="flex flex-col px-[25.6rem] max-xl:px-[16rem] max-lg:px-[8rem] max-md:px-[3.2rem] max-sm:px-[1.4rem] max-xs:px-[0.5rem] mt-80 max-xl:mt-55 max-lg:mt-40 max-md:mt-25 max-sm:mt-15 pt-40 max-xl:pt-32 max-lg:pt-24 max-md:pt-16"
			>
				<h2 className="text-center">Everything You Need To Know</h2>
				<p className="text-center mt-[1.4rem] max-lg:mt-[0.9rem] max-md:mt-[1rem] max-sm:mt-[0.75rem] max-xs:mt-[0.5rem] text-typo-medium-gray max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem]">
					Here are some frequently asked questions
				</p>
				<div className="flex flex-col mt-[5.6rem] max-lg:mt-[4rem] max-md:mt-[3rem] max-sm:mt-[2rem] max-xs:mt-[1.5rem]">
					<Accordion
						count={"01"}
						question="Is my data safe with Ai-Con?"
						answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque vel autem excepturi asperiores error minus. Commodi fuga, repudiandae officiis eveniet quidem possimus maxime sunt. Qui, pariatur! Culpa, fuga voluptatibus!"
					/>
					<Accordion
						count={"02"}
						question="What is Botbuzz and how does it work?"
						answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque vel autem excepturi asperiores error minus. Commodi fuga, repudiandae officiis eveniet quidem possimus maxime sunt. Qui, pariatur! Culpa, fuga voluptatibus!"
					/>
					<Accordion
						count={"03"}
						question="Can I customize the personality of my AI companion?"
						answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque vel autem excepturi asperiores error minus. Commodi fuga, repudiandae officiis eveniet quidem possimus maxime sunt. Qui, pariatur! Culpa, fuga voluptatibus!"
					/>
					<Accordion
						count={"04"}
						question="How does the real-time web reference feature work?"
						answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque vel autem excepturi asperiores error minus. Commodi fuga, repudiandae officiis eveniet quidem possimus maxime sunt. Qui, pariatur! Culpa, fuga voluptatibus!"
					/>
					<Accordion
						count={"05"}
						question="What are the benefits of the premium plans compared to the free plan?"
						answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque vel autem excepturi asperiores error minus. Commodi fuga, repudiandae officiis eveniet quidem possimus maxime sunt. Qui, pariatur! Culpa, fuga voluptatibus!"
					/>
				</div>
			</section>
			<section className="flex flex-col items-center gap-[2.4rem] max-lg:gap-[2rem] max-md:gap-[1.6rem] mt-120 max-xl:mt-99 max-lg:mt-68 max-md:mt-48 max-sm:mt-38 rounded-[2rem] max-lg:rounded-[1.6rem] max-md:rounded-[1.2rem] py-[5.6rem] max-lg:py-[4rem] max-md:py-[3rem] px-[14.4rem] max-xl:px-[8rem] max-lg:px-[4rem] max-md:px-[2rem] mx-[14.4rem] max-xl:mx-[8rem] max-lg:mx-[4rem] max-md:mx-[1.6rem] bg-linear-0 from-white/0 to-white/5 shadow-[0_-2px_10px_0_#E9DFFF45,0_-2px_40px_0_#A7A0F822]">
				<h3 className="max-lg:text-[3rem] max-md:text-[2.4rem] max-sm:text-[2rem]">Join Our Community</h3>
				<p className="text-center text-typo-medium-gray max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem]">
					At Bot Buzz, we value connection and shared experiences. Join our vibrant community to enhance your daily
					interactions with AI, share stories, exchange tips, and discover new ways to maximize your Ai-Con experience.
				</p>
				<Button variant="outline" className="max-lg:text-[1.2rem] max-md:text-[1rem]">
					Join Community
				</Button>
			</section>
			<footer className="flex flex-col gap-[4.8rem] max-lg:gap-[3.6rem] max-md:gap-[2.4rem] py-[3.2rem] max-lg:py-[2.4rem] max-md:py-[1.6rem] px-[6.4rem] max-xl:px-[4.8rem] max-lg:px-[3.2rem] max-md:px-[1.6rem] mt-120 max-xl:mt-90 max-lg:mt-60 max-md:mt-35 max-sm:mt-25">
				<div className="grid grid-cols-[460px_repeat(5,max-content)] max-xl:grid-cols-[repeat(3,max-content)] justify-between max-xl:gap-y-40 max-lg:gap-y-36 max-md:gap-y-29 max-sm:gap-y-26 max-xs:gap-y-24 max-xs:w-full w-full">
					<div className="max-xl:justify-self-start">
						<div className="flex items-center gap-[0.8rem] shrink-0">
							<Image
								src="/images/favicon.png"
								alt="icon"
								className="relative size-[4.8rem] max-xl:size-[4rem] max-lg:size-[3.6rem] max-md:size-[3.2rem] max-sm:size-[2.8rem] max-xs:size-[2.4rem]"
							/>
							<p className="font-semibold text-[2.4rem] max-xl:text-[2.1rem] max-lg:text-[1.8rem] max-md:text-[1.6rem] max-sm:text-[1.4rem] max-xs:text-[1.2rem]">
								BotBuzz
							</p>
						</div>
						<p className="mt-7 max-sm:mt-6 max-xs:mt-5 max-lg:text-[1.2rem] max-md:text-[1rem] text-typo-medium-gray">
							Developed by <br className="sm:hidden max-sm:block" />
							<span className="inline-block text-btn-purple max-sm:mt-2">@mhdifyyzi</span>
						</p>
					</div>

					<div className="max-xl:justify-self-start">
						<h6 className="max-xl:text-[1.6rem]! max-lg:text-[1.5rem]! max-md:text-[1.4rem]! max-sm:text-[1.3rem]! max-xs:text-[1rem]!">
							Resources
						</h6>
						<div className="flex flex-col gap-[0.86rem] max-lg:gap-[0.7rem] max-md:gap-[0.6rem] max-sm:gap-[0.5rem] mt-[1.6rem] max-lg:mt-[1.4rem] max-md:mt-[1.2rem] max-sm:mt-[0.7rem] max-xs:mt-[0.5rem] text-typo-medium-gray *:link-underline *:text-[1.4rem] max-xl:*:text-[1.2rem] max-md:*:text-[1rem] max-sm:*:text-[0.9rem]">
							<Link href="#">Updates</Link>
							<Link href="#">Help Center</Link>
							<Link href="#pricing">Pricing</Link>
							<Link href="#">Contact</Link>
						</div>
					</div>

					<div className="max-xl:justify-self-start">
						<h6 className="max-xl:text-[1.6rem]! max-lg:text-[1.5rem]! max-md:text-[1.4rem]! max-sm:text-[1.3rem]! max-xs:text-[1rem]!">
							Pricing
						</h6>
						<div className="flex flex-col gap-[0.86rem] max-lg:gap-[0.7rem] max-md:gap-[0.6rem] max-sm:gap-[0.5rem] mt-[1.6rem] max-lg:mt-[1.4rem] max-md:mt-[1.2rem] max-sm:mt-[0.7rem] max-xs:mt-[0.5rem] text-typo-medium-gray *:link-underline *:text-[1.4rem] max-xl:*:text-[1.2rem] max-md:*:text-[1rem] max-sm:*:text-[0.9rem]">
							<Link href="#pricing">Basic Pricing Plan</Link>
							<Link href="#pricing">Plus Pricing Plan</Link>
							<Link href="#pricing">Teams Pricing Plan</Link>
						</div>
					</div>

					<div className="max-xl:justify-self-start">
						<h6 className="max-xl:text-[1.6rem]! max-lg:text-[1.5rem]! max-md:text-[1.4rem]! max-sm:text-[1.3rem]! max-xs:text-[1rem]!">
							Explore
						</h6>
						<div className="flex flex-col gap-[0.86rem] max-lg:gap-[0.7rem] max-md:gap-[0.6rem] max-sm:gap-[0.5rem] mt-[1.6rem] max-lg:mt-[1.4rem] max-md:mt-[1.2rem] max-sm:mt-[0.7rem] max-xs:mt-[0.5rem] text-typo-medium-gray *:link-underline *:text-[1.4rem] max-xl:*:text-[1.2rem] max-md:*:text-[1rem] max-sm:*:text-[0.9rem]">
							<Link href="#personalize">AI Personalities</Link>
							<Link href="#">Bot Buzz AI</Link>
						</div>
					</div>

					<div className="max-xl:justify-self-start">
						<h6 className="max-xl:text-[1.6rem]! max-lg:text-[1.5rem]! max-md:text-[1.4rem]! max-sm:text-[1.3rem]! max-xs:text-[1rem]!">
							Company
						</h6>
						<div className="flex flex-col gap-[0.86rem] max-lg:gap-[0.7rem] max-md:gap-[0.6rem] max-sm:gap-[0.5rem] mt-[1.6rem] max-lg:mt-[1.4rem] max-md:mt-[1.2rem] max-sm:mt-[0.7rem] max-xs:mt-[0.5rem] text-typo-medium-gray *:link-underline *:text-[1.4rem] max-xl:*:text-[1.2rem] max-md:*:text-[1rem] max-sm:*:text-[0.9rem]">
							<Link href="#">Privacy Policy</Link>
							<Link href="#">Terms and Conditions</Link>
						</div>
					</div>

					<div className="max-xl:justify-self-start">
						<h6 className="max-xl:text-[1.6rem]! max-lg:text-[1.5rem]! max-md:text-[1.4rem]! max-sm:text-[1.3rem]! max-xs:text-[1rem]!">
							Others
						</h6>
						<div className="flex flex-col gap-[0.86rem] max-lg:gap-[0.7rem] max-md:gap-[0.6rem] max-sm:gap-[0.5rem] mt-[1.6rem] max-lg:mt-[1.4rem] max-md:mt-[1.2rem] max-sm:mt-[0.7rem] max-xs:mt-[0.5rem] text-typo-medium-gray *:link-underline *:text-[1.4rem] max-xl:*:text-[1.2rem] max-md:*:text-[1rem] max-sm:*:text-[0.9rem]">
							<Link href="#FAQ">FAQs</Link>
							<Link href="#">Support</Link>
						</div>
					</div>
				</div>
				<hr className="border-typo-dark-gray" />
				<div className="flex justify-between items-center select-none max-md:flex-col max-md:gap-[1.6rem] max-md:text-center">
					<div>
						<p className="font-semibold text-[2rem] max-lg:text-[1.6rem] max-md:text-[1.4rem]">
							Copyright © 2026 . All rights reserved
						</p>
					</div>
					<div className="flex items-center gap-[0.8rem] max-md:gap-[0.6rem]">
						<div className="bg-gradient-stroke p-1 rounded-[0.8rem] max-md:rounded-[0.6rem]">
							<div className="rounded-[0.76rem] max-md:rounded-[0.56rem] py-[0.5rem] px-[0.8rem] max-md:py-[0.4rem] max-md:px-[0.6rem] bg-input-dark text-[1.45rem] max-lg:text-[1.2rem] max-md:text-[1rem]">
								Socials
							</div>
						</div>
						<div className="bg-gradient-stroke p-1 rounded-[0.8rem] max-md:rounded-[0.6rem]">
							<div className="rounded-[0.76rem] max-md:rounded-[0.56rem] py-[0.5rem] px-[0.8rem] max-md:py-[0.4rem] max-md:px-[0.6rem] bg-input-dark text-[1.45rem] max-lg:text-[1.2rem] max-md:text-[1rem]">
								Botbuzz Community
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
