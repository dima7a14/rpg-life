import { createSignal, createEffect, For } from "solid-js";
import { TextField } from "@kobalte/core/text-field";
import { Button } from "@kobalte/core/button";

import { character } from "../../mocks";
import { Exp } from "../../common/Exp";
import { AddNewSkill } from "./AddNewSkill";
import "./Character.css";

export function Character() {
	const [values, setValues] = createSignal(character);
	const name = () => values().name;
	const hp = () => values().hp;
	const money = () => values().money;

	const handleNameChange = (e) => {
		setValues({ ...values(), name: e.target.value });
	};

	const handleMoneyChange = (e) => {
		let money = Number.parseInt(e.target.value, 10);

		if (Number.isNaN(money)) {
			money = 0;
		}

		setValues({
			...values(),
			money,
		});
	};

	const reset = () => {
		const prevValues = values();
		setValues({
			...prevValues,
			money: 0,
			skills: prevValues.skills.map((skill) => ({ ...skill, level: 0 })),
		});
	};

	const save = (e) => {
		e.preventDefault();
		console.log(JSON.stringify(values(), null, 4));
	};

	createEffect(() => {
		console.log(JSON.stringify(values(), null, 4));
	});

	return (
		<div className="size-full flex flex-col justify-center items-center">
			<form
				className="container w-1/5 mx-auto p-4 bg-gray-200 flex flex-col gap-4 border-2 border-gray-800"
				onSubmit={save}
			>
				<TextField className="field">
					<TextField.Label className="text-center text-4xl">
						Name
					</TextField.Label>
					<TextField.Input
						className="px-2 py-1 text-lg outline-none bg-white border-2 border-gray-800 text-gray-800 hover:border-violet-400 transition-all kb-invalid:border-red-400"
						value={name()}
						onChange={handleNameChange}
						type="text"
						required
					/>
				</TextField>
				<TextField className="field max-w-24 mx-auto">
					<TextField.Label className="text-center text-4xl">
						Money
					</TextField.Label>
					<TextField.Input
						className="px-2 py-1 text-lg outline-none bg-white border-2 border-gray-800 text-gray-800 hover:border-violet-400 transition-all kb-invalid:border-red-400"
						value={money()}
						onChange={handleMoneyChange}
						type="number"
						step={0.01}
					/>
				</TextField>
				{/* <Exp value={values().exp.current} level={values().exp.level} /> */}
				<h4 className="text-center text-4xl">Skills</h4>
				<div className="grid grid-cols-2 gap-2">
					<For each={values().skills}>
						{(skill, index) => {
							const level = Math.floor(skill.exp / 100);
							const currentExp = skill.exp % 100;

							return (
								<div>
									<h5 className="text-center text-2xl font-display">
										{skill.name}
									</h5>
									<Exp value={currentExp} level={level} />
								</div>
							);
						}}
					</For>
				</div>
				<AddNewSkill />
				<div className="flex flex-row justify-between">
					<Button
						type="button"
						onClick={reset}
						className="text-xl p-2 bg-red-300 border-2 border-gray-800 transition-all hover:bg-red-400"
					>
						Reset
					</Button>
					<Button
						type="submit"
						className="text-xl p-2 bg-green-200 border-2 border-gray-800 transition-all hover:bg-green-300"
					>
						Save
					</Button>
				</div>
			</form>
		</div>
	);
}
