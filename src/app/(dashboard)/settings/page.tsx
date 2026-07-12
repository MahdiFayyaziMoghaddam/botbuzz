import { getUser } from "@/auth/actions";
import Client from "./_client";

export default async function Settings() {
	const { user } = await getUser();
	return <Client userPermission={user?.user_metadata.notification} />;
}
