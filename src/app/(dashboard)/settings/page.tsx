"use client";
import Switch from "@/components/input/Switch";
import { useDashboardContext } from "@/contexts/DashboardContext";

export default function Settings() {
	const { state, isPending, updateUserNotificationAction } = useDashboardContext();

	return (
		<div className="p-24 max-xl:p-20 max-lg:p-16 max-md:p-12 max-sm:p-10 max-xs:p-8">
			<div className="flex justify-between items-center">
				<h5>Notifications</h5>
				<Switch
					checked={state.notification}
					disabled={isPending}
					onChange={(e) => {
						updateUserNotificationAction(e.target.checked);
					}}
				/>
			</div>
		</div>
	);
}
