"use client";
import Button from "@/components/button/Button";
import Reload from "@/components/icons/reload";
import Switch from "@/components/input/Switch";
import Textbox from "@/components/input/Textbox";
import { useDashboardStore } from "@/stores/dashboardStore";
import { useEffect, useRef, useState } from "react";

export default function Settings() {
	const notification = useDashboardStore((state) => state.notification);
	const isPending = useDashboardStore((state) => state.isPending);
	const userAPIKey = useDashboardStore((state) => state.userAPIKey);
	const action = useDashboardStore((state) => state.action);
	const [apiKey, setApiKey] = useState(userAPIKey || "");
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!isPending && buttonRef.current) {
			buttonRef.current.classList.remove("*:animate-spin");
		}
	}, [isPending]);

	return (
		<div className="p-24 max-xl:p-20 max-lg:p-16 max-md:p-12 max-sm:p-10 max-xs:p-8 space-y-18 max-lg:space-y-16 max-md:space-y-14 max-sm:space-y-12 max-xs:space-y-10">
			<div className="flex justify-between items-center">
				<h5>API Key</h5>
				<div className="w-[60%] max-xl:w-[75%] max-md:w-[65%] max-sm:w-[75%] flex items-center gap-18 max-lg:gap-16 max-md:gap-14 max-sm:gap-12 max-xs:gap-10">
					<Textbox
						type="password"
						className="grow select-all"
						placeholder="Example: AQ.zaSyPLACEHOLDER_REAL_API_KEY_FROM_GOOGLE"
						value={apiKey}
						onChange={(e) => setApiKey(e.target.value)}
						disabled={isPending}
					/>
					<Button
						ref={buttonRef}
						variant="solid"
						title="Sync"
						className="*:size-26 max-lg:*:size-24 max-md:*:size-22 max-sm:*:size-20 max-xs:*:size-18 p-14! max-lg:p-11! max-md:p-8! max-sm:p-6! max-xs:p-5!"
						onClick={(e) => {
							action.updateUserAPIkey(apiKey);
							e.currentTarget.classList.add("*:animate-spin");
						}}
						disabled={isPending}
					>
						<Reload />
					</Button>
				</div>
			</div>
			<div className="flex justify-between items-center">
				<h5>Notifications</h5>
				<Switch
					checked={notification}
					disabled={isPending}
					onChange={(e) => {
						action.updateUserNotification(e.target.checked);
					}}
				/>
			</div>
		</div>
	);
}
