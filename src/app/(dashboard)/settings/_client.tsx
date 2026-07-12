"use client";
import { updateUser } from "@/auth/actions";
import Switch from "@/components/input/Switch";
import { useState } from "react";

export default function Client({ userPermission }: { userPermission: boolean }) {
	const [permission, setPermission] = useState(userPermission);
	const [isLoading, setIsLoading] = useState(false);
	return (
		<div className="p-24 max-xl:p-20 max-lg:p-16 max-md:p-12 max-sm:p-10 max-xs:p-8">
			<div className="flex justify-between items-center">
				<h5>Notifications</h5>
				<Switch
					checked={permission}
					disabled={isLoading}
					onChange={async () => {
						if (Notification.permission !== "denied") {
							if (permission) {
								setPermission(false);
								setIsLoading(true);
								const { error } = await updateUser({ notification: false });
								setIsLoading(false);
								if (error) {
									setPermission(true);
									// Show toast
								}
							} else {
								if (Notification.permission === "granted") {
									setPermission(true);
									setIsLoading(true);
									const { error } = await updateUser({ notification: true });
									setIsLoading(false);
									if (error) {
										setPermission(false);
										// Show toast
									}
								} else {
									const response = await Notification.requestPermission();
									setPermission(response === "granted");
									setIsLoading(true);
									const { error } = await updateUser({ notification: response === "granted" });
									setIsLoading(false);
									if (error && response !== "denied") {
										setPermission(false);
										// Show toast
									}
								}
							}
						} else {
							// Show toast
						}
					}}
				/>
			</div>
		</div>
	);
}
