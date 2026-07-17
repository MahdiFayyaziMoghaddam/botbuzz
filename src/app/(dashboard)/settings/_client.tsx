"use client";
import { updateUser } from "@/auth/actions";
import Switch from "@/components/input/Switch";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Client({ userPermission }: { userPermission: boolean }) {
	const [permission, setPermission] = useState(userPermission);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (Notification.permission === "denied") {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setPermission(false);
			if (permission)
				updateUser({ notification: false }).then(({ error }) => {
					if (error) {
						toast.error(error);
					}
				});
		}
	}, [permission]);

	return (
		<div className="p-24 max-xl:p-20 max-lg:p-16 max-md:p-12 max-sm:p-10 max-xs:p-8">
			<div className="flex justify-between items-center">
				<h5>Notifications</h5>
				<Switch
					checked={permission}
					disabled={isLoading}
					onChange={async () => {
						if (Notification.permission === "denied")
							return toast.error("Notifications are blocked, Please enable them in your browser settings");

						if (Notification.permission === "default") {
							const response = await Notification.requestPermission();
							if (response === "default") return;
							setPermission(response === "granted");
							setIsLoading(true);
							const { error } = await updateUser({ notification: response === "granted" });
							setIsLoading(false);
							if (error) {
								setPermission(response === "granted");
								toast.error(error);
							}
						}

						if (Notification.permission === "granted") {
							setPermission((prev) => !prev);
							setIsLoading(true);
							const { error } = await updateUser({ notification: !permission });
							setIsLoading(false);
							if (error) {
								setPermission((prev) => !prev);
								toast.error(error);
							}
						}
					}}
				/>
			</div>
		</div>
	);
}
