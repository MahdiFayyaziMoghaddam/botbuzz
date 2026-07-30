"use client";
import { signinWithGoogle, signup } from "@/auth/actions";
import Button from "@/components/button/Button";
import Google from "@/components/icons/google";
import Image from "@/components/image/Image";
import Checkbox from "@/components/input/Checkbox";
import Textbox from "@/components/input/Textbox";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Signup() {
	const [isAgreeWithTerms, setIsAgreeWithTerms] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({
		email: "",
		password: "",
		name: ""
	});
	const resetFormData = () =>
		setData({
			email: "",
			password: "",
			name: ""
		});

	return (
		<>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					if (isAgreeWithTerms && data.email && data.password && data.name) {
						setIsLoading(true);

						const formData = new FormData();
						formData.append("email", data.email);
						formData.append("password", data.password);
						formData.append("name", data.name);

						const { error } = await signup(formData);
						if (error) toast.error(error);

						setIsLoading(false);
						resetFormData();
					}
				}}
			>
				<div className="flex items-center gap-[0.8rem] max-lg:gap-7 max-md:gap-6 max-sm:gap-5 max-xs:gap-4 select-none justify-self-start">
					<Image
						src={"/images/logo.png"}
						alt="icon"
						className="relative w-[3.6rem] max-lg:w-[3rem] max-md:w-[2.4rem] max-sm:w-[1.8rem] aspect-[1/1.09] shrink-0"
					/>
					<p className="text-[2.4rem] max-lg:text-[2rem] max-md:text-[1.6rem] max-sm:text-[1.2rem]" translate="no">
						BotBuzz
					</p>
				</div>
				<h3 className="mt-64 max-xl:mt-55 max-lg:mt-50 max-md:mt-40 max-sm:mt-30 max-xs:mt-20 text-nowrap">
					Create an Account
				</h3>
				<p className="text-typo-medium-gray text-[1.8rem] max-xl:text-[1.6rem] max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.9rem] text-nowrap">
					Kindly fill in your details to create an account
				</p>
				<div className="flex flex-col gap-24 max-xs:gap-16 mt-40 max-md:mt-30 max-sm:mt-25 max-xs:mt-20">
					<Textbox
						value={data.name}
						onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
						name="name"
						label="Your fullname"
						placeholder="Enter your name"
						required
					/>
					<Textbox
						value={data.email}
						onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
						name="email"
						label="Your email"
						placeholder="Enter your email"
						required
					/>
					<Textbox
						value={data.password}
						onChange={(e) => setData((prev) => ({ ...prev, password: e.target.value }))}
						name="password"
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
					isLoading={isLoading}
					disabled={!isAgreeWithTerms}
				>
					Sign up
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
					type="button"
					className="bg-btn-black! text-typo-light-white mt-40 max-md:mt-30 max-sm:mt-25 max-xs:mt-20 w-full gap-56! max-md:gap-44! max-sm:gap-35! max-xs:gap-23! shadow-black/25 shadow-[0_4px_4px_0]"
					onClick={async () => {
						await signinWithGoogle(`${window.location.href}/onboarding`);
					}}
				>
					<Google className="size-26 max-lg:size-23 max-md:size-20 max-sm:size-18 max-xs:size-15" />
					Register with Google
				</Button>
				<p className="mt-40 max-md:mt-30 max-sm:mt-25 max-xs:mt-20 text-center text-[1.6rem] text-typo-light-gray max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.9rem]">
					Already have an Account?{" "}
					<Link href={"/signin"} className="text-btn-purple link-underline ml-4 max-lg:ml-3 max-md:ml-2">
						Sign in
					</Link>
				</p>
			</form>
			<Image
				src="/images/sign-banner.png"
				alt="ai"
				className="relative aspect-[0.75/1] rounded-[1vw] size-full mx-auto max-lg:hidden justify-self-end"
				loading="eager"
			/>
		</>
	);
}
