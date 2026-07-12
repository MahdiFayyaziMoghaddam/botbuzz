import { getUser } from "@/auth/actions";
import Client from "./_client";

export default async function Profile() {
	const { user } = await getUser();
	return <Client userAvatar={user ? user.user_metadata.image : "/images/user.png"} />;
}
