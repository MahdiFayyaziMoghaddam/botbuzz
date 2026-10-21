"use client";

import { useDashboardStore } from "@/stores/dashboardStore";
import CharacterCard from "./CharacterCard";

export default function Personalities() {
	const personalities = useDashboardStore((state) => state.personalities);
	return (
		<>
			{personalities?.map(({ id, image, name, description, skills }) => (
				<CharacterCard key={id} id={id} imgSrc={image} title={name} description={description} skills={skills} />
			))}
		</>
	);
}
