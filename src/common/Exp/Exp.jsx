import { Progress } from "@kobalte/core/progress";

import "./Exp.css";

export function Exp(props) {
	return (
		<Progress
			value={props.value}
			minValue={0}
			maxValue={100}
			getValueLabel={({ value, max }) => `${value}/${max}`}
			className="max-w-40 mx-auto text-center"
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
				Level <span className="font-number">{props.level}</span>
			</div>
		</Progress>
	);
}
