import { Progress } from "@kobalte/core/progress";

import "./HP.css";

export function HP(props) {
	return (
		<Progress
			value={props.value}
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
	);
}
