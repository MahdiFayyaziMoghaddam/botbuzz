"use client";
import Loader from "@/components/loader/Loader";
import React from "react";
import { Flip, Icons, ToastContainer } from "react-toastify";

export default function RootProvider({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ToastContainer
				position="bottom-right"
				autoClose={7000}
				limit={3}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				transition={Flip}
				icon={({ isLoading, type }) => {
					if (isLoading || type === "default") {
						return <Loader />;
					} else {
						const Icon = Icons[type as keyof typeof Icons];
						return <Icon type={type} theme="dark" />;
					}
				}}
			/>
			{children}
		</>
	);
}
