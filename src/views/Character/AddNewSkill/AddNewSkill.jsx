import { Button } from "@kobalte/core/button";

export function AddNewSkill() {
	return (
		<div className="text-center">
			<Button
				type="button"
				className="text-xl p-2 bg-gray-100 border-2 border-gray-800 transition-all hover:bg-violet-400"
			>
				Add new skill
			</Button>
		</div>
	);
}
