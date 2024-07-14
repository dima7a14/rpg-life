/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import { SecondaryView } from "./common/SecondaryView";
import { Main } from "./views/Main";
import { Character } from "./views/Character";
import App from "./App";

render(
	() => (
		<Router root={App}>
			<Route path="/" component={Main} />
			<Route
				path="/character"
				component={() => (
					<SecondaryView name="Character">
						<Character />
					</SecondaryView>
				)}
			/>
		</Router>
	),
	document.getElementById("root"),
);
