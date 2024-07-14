import { CharacterCard } from "./CharacterCard";

export function Main() {
	return (
		<div className="grid grid-cols-3 gap-4 w-full h-full">
			<CharacterCard />
			<div>Date Time</div>
			<div className="bg-gray-100 text-center">Goals</div>
		</div>
	);
}
