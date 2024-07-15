import { createSignal, createEffect } from "solid-js";
import { TextField } from "@kobalte/core/text-field";
import { Button } from "@kobalte/core/button";

import { HP } from "../../common/HP";
import { Exp } from "../../common/Exp";
import "./Character.css";

const initialCharacter = {
	name: "Dima",
	hp: 70,
	exp: {
		level: 4,
		current: 30,
	},
	money: 13,
	skills: [
		{
			name: "Programming",
			level: 2,
		},
		{
			name: "Drawing",
			level: 0,
		},
		{
			name: "Gaming",
			level: 13,
		},
		{
			name: "Football",
			level: 4,
		},
	],
};

export function Character() {
	// const [characterForm, { Form, Field }] = createForm();
	const [values, setValues] = createSignal(initialCharacter);
	const name = () => values().name;
	const hp = () => values().hp;
	const expValue = () => values().exp.current;
	const expLevel = () => values().exp.level;
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
			hp: 100,
			money: 0,
			exp: {
				level: 0,
				current: 0,
			},
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
		<div className="flex flex-col size-full justify-center items-center">
			<form
				className="container w-1/5 mx-auto p-4 bg-gray-200 flex flex-col gap-4 border-2 border-gray-800"
				onSubmit={save}
			>
				<TextField className="field">
					<TextField.Label>Name</TextField.Label>
					<TextField.Input
						className="px-2 py-1 text-lg outline-none bg-white border-2 border-gray-800 text-gray-800 hover:border-violet-400 transition-all kb-invalid:border-red-400"
						value={name()}
						onChange={handleNameChange}
						type="text"
						required
					/>
				</TextField>
				<HP value={values().hp} />
				<div>HP: {values().hp}</div>
				<Exp value={values().exp.current} level={values().exp.level} />
				<TextField className="field">
					<TextField.Label>Money</TextField.Label>
					<TextField.Input
						className="px-2 py-1 text-lg outline-none bg-white border-2 border-gray-800 text-gray-800 hover:border-violet-400 transition-all kb-invalid:border-red-400"
						value={money()}
						onChange={handleMoneyChange}
						type="number"
					/>
				</TextField>
				<div className="flex flex-row justify-between">
					<Button
						type="button"
						onClick={reset}
						className="text-xl p-2 bg-red-300 border-2 border-gray-800"
					>
						Reset
					</Button>
					<Button
						type="submit"
						className="text xl p-2 bg-green-200 border-2 border-gray-800"
					>
						Save
					</Button>
				</div>
			</form>
		</div>
	);
}
