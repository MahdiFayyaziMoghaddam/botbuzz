"use client";
import { updateUser } from "@/auth/actions";
import Switch from "@/components/input/Switch";
import { useDashboardContext } from "@/contexts/DashboardContext";
import { useEffect, useEffectEvent, useState } from "react";
import { toast } from "react-toastify";

export default function Settings() {
	const { state, dispatch } = useDashboardContext();
	const [isLoading, setIsLoading] = useState(false);

	const onInitialCheck = useEffectEvent(() => {
		if (Notification.permission === "denied" || Notification.permission === "default") {
			dispatch({ type: "TURN_NOTIFICATION_OFF" });
			if (state.notification)
				updateUser({ notification: false }).then(({ error }) => {
					if (error) {
						toast.error(error);
					}
				});
		}
	});

	useEffect(() => {
		onInitialCheck();
	}, []);

	return (
		<div className="p-24 max-xl:p-20 max-lg:p-16 max-md:p-12 max-sm:p-10 max-xs:p-8">
			<div className="flex justify-between items-center">
				<h5>Notifications</h5>
				<Switch
					checked={state.notification}
					disabled={isLoading}
					onChange={async () => {
						if (Notification.permission === "denied")
							return toast.error("Notifications are blocked, Please enable them in your browser settings");

						if (Notification.permission === "default") {
							const response = await Notification.requestPermission();
							if (response === "default") return;
							setIsLoading(true);
							const { error } = await updateUser({ notification: response === "granted" });
							setIsLoading(false);
							if (error) {
								if (response === "granted") {
									dispatch({ type: "TURN_NOTIFICATION_ON" });
								} else {
									dispatch({ type: "TURN_NOTIFICATION_OFF" });
								}
								toast.error(error);
							}
						}

						if (Notification.permission === "granted") {
							if (state.notification) {
								dispatch({ type: "TURN_NOTIFICATION_OFF" });
							} else {
								dispatch({ type: "TURN_NOTIFICATION_ON" });
							}
							setIsLoading(true);
							const { error } = await updateUser({ notification: !state.notification });
							setIsLoading(false);
							if (error) {
								if (state.notification) {
									dispatch({ type: "TURN_NOTIFICATION_OFF" });
								} else {
									dispatch({ type: "TURN_NOTIFICATION_ON" });
								}
								toast.error(error);
							}
						}
					}}
				/>
			</div>
		</div>
	);
}
