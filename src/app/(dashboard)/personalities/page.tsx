import CharacterCard from "@/components/dashboard/CharacterCard";
import { getPersonalities } from "@/database/personalities";

export default async function Personalities() {
	const { data } = await getPersonalities();
	return (
		<div className="p-27 max-xl:p-23 max-lg:p-19 max-md:p-15 max-sm:p-12 max-xs:p-10 overflow-auto">
			<p className="text-typo-medium-gray text-[1.4rem] max-xl:text-[1.3rem] max-lg:text-[1.2rem] max-md:text-[1.1rem] max-sm:text-[1rem] max-xs:text-[0.9rem]">
				Chat with AI
			</p>
			<h3 className="bg-gradient-text text-transparent bg-clip-text! mt-12 max-xl:mt-10 max-lg:mt-9 max-md:mt-8 max-sm:mt-7 max-xs:mt-6">
				AI Personalities
			</h3>
			<p className="mt-6 max-xl:mt-5 max-lg:mt-4.5 max-md:mt-4 max-sm:mt-3.5 max-xs:mt-3 text-[1.4rem] max-xl:text-[1.3rem] max-lg:text-[1.2rem] max-md:text-[1.1rem] max-sm:text-[1rem] max-xs:text-[0.9rem]">
				Explore diverse AI personalities tailored to meet your unique needs, preferences, and interests.
			</p>
			<div className="mt-56 max-xl:mt-48 max-lg:mt-40 max-md:mt-32 max-sm:mt-24 max-xs:mt-20">
				<h5>All Characters</h5>
				<div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-xs:grid-cols-1 items-start gap-24 max-xl:gap-20 max-lg:gap-16 max-md:gap-12 max-sm:gap-10 max-xs:gap-8 mt-32 max-xl:mt-28 max-lg:mt-24 max-md:mt-20 max-sm:mt-16 max-xs:mt-12">
					{data.map(({ id, image, name, description, skills }) => (
						<CharacterCard key={id} imgSrc={image} title={name} description={description} skills={skills} />
					))}
				</div>
			</div>
		</div>
	);
}
