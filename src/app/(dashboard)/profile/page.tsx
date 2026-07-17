import { getUser } from "@/auth/actions";
import Client from "./_client";
import Image from "@/components/image/Image";

export default async function Profile() {
	const { user } = await getUser();
	const AvatarElement = (
		<Image
			src={user?.user_metadata.image || "/images/user.png"}
			alt="profile"
			loading="eager"
			className="relative size-112 max-xl:size-100 max-lg:size-88 max-md:size-72 max-sm:size-60 max-xs:size-50 rounded-[1rem] max-lg:rounded-[0.85rem] max-md:rounded-[0.7rem] max-sm:rounded-[0.6rem] max-xs:rounded-[0.5rem] bg-typo-dark-gray"
			unoptimized
		/>
	);
	return <Client AvatarElement={AvatarElement} />;
}
