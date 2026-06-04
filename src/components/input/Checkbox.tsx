import Check from "../icons/check";

export default function Checkbox() {
	return (
		<label className="inline-block cursor-pointer">
			<input type="checkbox" className="sr-only peer" />
			<div className="flex items-center justify-center size-2 rounded-[0.6rem] border-1 text-icon-purple overflow-hidden border-icon-blue peer-checked:border-icon-purple peer-checked:*:visible hover:border-typo-light-white duration-200 peer-checked:hover:border-icon-purple peer-focus:border-icon-purple">
				<Check className="[visibility:hidden] size-full bg-typo-light-white" />
			</div>
		</label>
	);
}
