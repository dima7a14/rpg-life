import { Progress } from "@kobalte/core/progress";
import { Link } from "@kobalte/core/link";
import { Icon } from "solid-heroicons";
import { pencilSquare } from "solid-heroicons/solid";

import { Money } from "../../../common/Money";
import "./CharacterCard.css";

export function CharacterCard() {
	const skills = [
		{ name: "Programming", level: 2 },
		{ name: "Drawing", level: 0 },
		{ name: "Gaming", level: 13 },
		{ name: "Football", level: 4 },
	];

	return (
		<div className="text-center border-2 border-gray-800">
			<h6 className="bg-gray-800 text-gray-100 font-semibold text-2xl mb-2 p-2 relative">
				Character info
				<Link
					href="/character"
					className="absolute top-0 right-0 size-12 p-3 hover:bg-gray-700"
				>
					<Icon path={pencilSquare} />
				</Link>
			</h6>
			<div className="flex flex-col gap-4">
				<h2 className="font-display text-4xl">Dima</h2>
				<Progress
					value={70}
					minValue={0}
					maxValue={100}
					getValueLabel={({ value, max }) => `${value}/${max}`}
					className="max-w-40 mx-auto"
				>
					<Progress.Track className="progress__track">
						<Progress.Fill className="hp-progress__fill" />
					</Progress.Track>
					<div className="flex flex-row justify-center gap-2 items-center">
						<Progress.Label className="text-2xl font-bold">
							HP
						</Progress.Label>
						<Progress.ValueLabel className="text-2xl font-bold font-number" />
					</div>
				</Progress>
				<div className="flex flex-row justify-center gap-2 text-center items-center">
					<span className="text-2xl font-bold">Money</span>
					<Money value={13} />
				</div>
				<Progress
					value={30}
					minValue={0}
					maxValue={100}
					getValueLabel={({ value, max }) => `${value}/${max}`}
					className="max-w-40 mx-auto"
				>
					<Progress.Track className="progress__track">
						<Progress.Fill className="exp-progress__fill" />
					</Progress.Track>
					<div className="flex flex-row justify-center gap-2 items-center">
						<Progress.Label className="text-2xl font-bold">
							Exp
						</Progress.Label>
						<Progress.ValueLabel className="text-2xl font-bold font-number" />
					</div>
					<div className="text-2xl font-bold">
						Level <span className="font-number">4</span>
					</div>
				</Progress>
				<h5 className="text-2xl">Skills</h5>
				<ul className="grid grid-cols-2 px-2 gap-x-2">
					{skills.map((skill, index) => (
						<li key={index} className="text-xl font-bold">
							Level{" "}
							<span className="font-number">{skill.level}</span>{" "}
							{skill.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
