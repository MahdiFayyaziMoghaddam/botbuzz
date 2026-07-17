import { headers } from "next/headers";

export async function getServerSidePathname() {
	return (await headers()).get("x-pathname")!;
}
