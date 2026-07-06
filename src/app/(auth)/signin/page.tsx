"use client";
import Button from "@/components/button/Button";
import Google from "@/components/icons/google";
import Image from "@/components/image/Image";
import Checkbox from "@/components/input/Checkbox";
import Textbox from "@/components/input/Textbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
	const router = useRouter();
	const [isAgreeWithTerms, setIsAgreeWithTerms] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});
	const resetFormData = () =>
		setFormData({
			email: "",
			password: ""
		});
	return (
		<div className="grid grid-cols-[30vw_51vw] max-lg:grid-cols-1 justify-between items-start bg-onboarding py-[2.2vw] px-[4.4vw] min-h-dvh">
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					if (isAgreeWithTerms && formData.email && formData.password) {
						setIsLoading(true);
						resetFormData();
						const response = await fetch("/api/signin", {
							method: "POST",
							body: JSON.stringify(formData)
						});
						const { data, error } = await response.json();
						if (data) {
							router.replace("/chat");
						}
						setIsLoading(false);
					}
				}}
			>
				<div className="flex items-center gap-[0.8rem] max-lg:gap-7 max-md:gap-6 max-sm:gap-5 max-xs:gap-4 select-none justify-self-start">
					<Image
						src={"/images/logo.png"}
						alt="icon"
						className="relative w-[3.6rem] max-lg:w-[3rem] max-md:w-[2.4rem] max-sm:w-[1.8rem] aspect-[1/1.09] shrink-0"
					/>
					<p className="text-[2.4rem] max-lg:text-[2rem] max-md:text-[1.6rem] max-sm:text-[1.2rem]">BotBuzz</p>
				</div>
				<h3 className="mt-64 max-xl:mt-55 max-lg:mt-50 max-md:mt-40 max-sm:mt-30 max-xs:mt-20 text-nowrap">Sign in</h3>
				<p className="text-typo-medium-gray text-[1.8rem] max-xl:text-[1.6rem] max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.9rem] text-nowrap">
					Add your credentials to sign in
				</p>
				<div className="flex flex-col gap-24 max-xs:gap-16 mt-40 max-md:mt-30 max-sm:mt-25 max-xs:mt-20">
					<Textbox
						type="email"
						name="email"
						value={formData.email}
						onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
						label="Your email"
						placeholder="Enter your email"
						required
					/>
					<Textbox
						name="password"
						value={formData.password}
						onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
						type="password"
						label="Your password"
						placeholder="Enter your password"
						required
					/>
					<Checkbox
						label="I agree to terms & conditions"
						checked={isAgreeWithTerms}
						onChange={(e) => setIsAgreeWithTerms(e.target.checked)}
					/>
				</div>
				<Button
					variant="solid"
					className="mt-40 max-md:mt-30 max-sm:mt-25 max-xs:mt-20 w-full"
					disabled={!isAgreeWithTerms}
					isLoading={isLoading}
				>
					Sign in
				</Button>
				<div className="flex items-center w-full mt-40 max-md:mt-30 max-sm:mt-25 max-xs:mt-20 select-none">
					<hr className="w-full" />
					<p className="px-32 max-lg:px-28 max-md:px-26 max-sm:px-18 max-xs:px-10 text-[1.6rem] max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.9rem] text-typo-light-gray">
						Or
					</p>
					<hr className="w-full" />
				</div>
				<Button
					variant="solid"
					className="bg-btn-black! text-typo-light-white mt-40 max-md:mt-30 max-sm:mt-25 max-xs:mt-20 w-full gap-56! max-md:gap-44! max-sm:gap-35! max-xs:gap-23! shadow-black/25 shadow-[0_4px_4px_0]"
				>
					<Google className="size-26 max-lg:size-23 max-md:size-20 max-sm:size-18 max-xs:size-15" />
					Register with Google
				</Button>
				<p className="mt-40 max-md:mt-30 max-sm:mt-25 max-xs:mt-20 text-center text-[1.6rem] text-typo-light-gray max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.9rem]">
					Don’t have an Account?
					<Link href={"/signup"} className="text-btn-purple link-underline ml-4 max-lg:ml-3 max-md:ml-2">
						Sign up
					</Link>
				</p>
			</form>
			<Image
				src="/images/sign-banner.png"
				alt="ai"
				className="relative aspect-[0.75/1] rounded-[1vw] size-full mx-auto max-lg:hidden justify-self-end"
			/>
		</div>
	);
}
