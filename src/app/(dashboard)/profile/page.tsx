"use client";
import Button from "@/components/button/Button";
import ArrowRight from "@/components/icons/arrow-right";
import Edit from "@/components/icons/edit";
import Image from "@/components/image/Image";
import Textbox from "@/components/input/Textbox";
import { useDashboardContext } from "@/contexts/DashboardContext";
import { ChangeEvent } from "react";

export default function Profile() {
	const { state, dispatch, isPending, setPendingMessage, updateUserAvatarAction, updateUserInfoAction } =
		useDashboardContext();
	const inputHandler = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) =>
		dispatch({ type: "SET_USER_INFO", payload: { [e.target.name]: e.target.value } });

	return (
		<form
			className="flex flex-col items-start p-24 max-xl:p-20 max-lg:p-16 max-md:p-12 max-sm:p-10 max-xs:p-8"
			onSubmit={(e) => {
				e.preventDefault();
				setPendingMessage("Update user information ...");
				updateUserInfoAction(state.userInfo);
			}}
		>
			<div className="relative">
				<Image
					src={state.userAvatar}
					alt="profile"
					loading="eager"
					className="relative size-112 max-xl:size-100 max-lg:size-88 max-md:size-72 max-sm:size-60 max-xs:size-50 rounded-[1rem] max-lg:rounded-[0.85rem] max-md:rounded-[0.7rem] max-sm:rounded-[0.6rem] max-xs:rounded-[0.5rem] bg-typo-dark-gray"
					unoptimized
					preload
				/>
				<label className="absolute -bottom-14 max-xl:-bottom-12 max-lg:-bottom-10 max-md:-bottom-8 max-sm:-bottom-7 max-xs:-bottom-6 -right-14 max-xl:-right-12 max-lg:-right-10 max-md:-right-8 max-sm:-right-7 max-xs:-right-6 text-icon-black p-8 max-lg:p-7 max-md:p-6 max-sm:p-5 max-xs:p-4 rounded-[0.4rem] max-lg:rounded-[0.35rem] max-md:rounded-[0.3rem] max-sm:rounded-[0.25rem] max-xs:rounded-[0.2rem] bg-typo-main-white outline-none cursor-pointer">
					<input
						type="file"
						accept="image/*"
						className="sr-only"
						disabled={isPending}
						onChange={(e) => {
							if (e.target.files && e.target.files.length === 1) {
								setPendingMessage("Upload user avatar ...");
								updateUserAvatarAction(e.target.files[0]);
							}
						}}
					/>
					<Edit className="size-12 max-lg:size-10 max-md:size-9 max-sm:size-8 max-xs:size-7" />
				</label>
			</div>
			<h5 className="mt-40 max-xl:mt-35 max-lg:mt-30 max-md:mt-24 max-sm:mt-20 max-xs:mt-16">Personal Information</h5>
			<div className="flex gap-24 max-xl:gap-20 max-lg:gap-16 max-md:flex-col max-md:gap-12 max-sm:gap-10 max-xs:gap-8 mt-32 max-xl:mt-28 max-lg:mt-24 max-md:mt-20 max-sm:mt-16 max-xs:mt-12 w-full max-w-914 max-xl:max-w-800 max-lg:max-w-700 max-md:max-w-full">
				<Textbox
					name="name"
					value={state.userInfo.name}
					onChange={inputHandler}
					label="Your fullname"
					placeholder="Enter your fullname"
					required
					className="grow"
				/>
				<Textbox
					name="email"
					value={state.userInfo.email}
					onChange={inputHandler}
					label="Your email"
					placeholder="Enter your email"
					required
					className="grow"
				/>
			</div>
			<h5 className="mt-40 max-xl:mt-35 max-lg:mt-30 max-md:mt-24 max-sm:mt-20 max-xs:mt-16">Password</h5>
			<div className="flex gap-24 max-xl:gap-20 max-lg:gap-16 max-md:flex-col max-md:gap-12 max-sm:gap-10 max-xs:gap-8 mt-32 max-xl:mt-28 max-lg:mt-24 max-md:mt-20 max-sm:mt-16 max-xs:mt-12 w-full max-w-914 max-xl:max-w-800 max-lg:max-w-700 max-md:max-w-full">
				<Textbox
					name="password"
					value={state.userInfo.password}
					onChange={inputHandler}
					label="Password"
					type="password"
					placeholder="Enter your Password"
					required
					className="grow"
				/>
				<Textbox
					name="confirm"
					value={state.userInfo.confirm}
					onChange={inputHandler}
					label="Confirm password"
					type="password"
					placeholder="Enter your Password"
					required
					className="grow"
				/>
			</div>
			<Button
				variant="solid"
				className="mt-40 max-xl:mt-35 max-lg:mt-30 max-md:mt-24 max-sm:mt-20 max-xs:mt-16 font-semibold max-lg:text-[1.2rem] max-md:text-[1rem] max-sm:text-[0.9rem]"
				disabled={isPending}
			>
				Update
				<ArrowRight className="size-26 max-xl:size-23 max-lg:size-20 max-md:size-18 max-sm:size-16 max-xs:size-14" />
			</Button>
		</form>
	);
}
