"use server";

import { redirect } from "next/navigation";

export const redirectAction = async (url: string) => {
	redirect(url, "replace");
};
