import { createSignal } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";

import { Main } from "./views/Main";
import "./App.css";

function OldApp() {
	const [greetMsg, setGreetMsg] = createSignal("");
	const [name, setName] = createSignal("");

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
		setGreetMsg(await invoke("greet", { name: name() }));
	}

	return (
		<div class="container max-w-full mx-auto">
			<h1 class="text-3xl font-bold unerline">Welcome to RPG-Life!</h1>
			<form
				class="row"
				onSubmit={(e) => {
					e.preventDefault();
					greet();
				}}
			>
				<input
					id="greet-input"
					onChange={(e) => setName(e.currentTarget.value)}
					placeholder="Enter a name..."
				/>
				<button type="submit">Greet</button>
			</form>

			<p>{greetMsg()}</p>
		</div>
	);
}

function App(props) {
	return (
		<div className="container max-w-full w-screen h-screen">
			{props.children}
		</div>
	);
}

export default App;
