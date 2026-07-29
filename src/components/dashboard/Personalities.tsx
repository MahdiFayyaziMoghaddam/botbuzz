"use client";

import { useDashboardContext } from "@/contexts/DashboardContext";
import CharacterCard from "./CharacterCard";

export default function Personalities() {
	const { state } = useDashboardContext();
	return (
		<>
			{state.personalities?.map(({ id, image, name, description, skills }) => (
				<CharacterCard key={id} id={id} imgSrc={image} title={name} description={description} skills={skills} />
			))}
		</>
	);
}
