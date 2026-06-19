import Switch from "@/components/input/Switch";

export default function Settings() {
	return (
		<div className="p-24 max-xl:p-20 max-lg:p-16 max-md:p-12 max-sm:p-10 max-xs:p-8">
			<div className="flex justify-between items-center">
				<h5>Notifications</h5>
				<Switch />
			</div>
		</div>
	);
}
