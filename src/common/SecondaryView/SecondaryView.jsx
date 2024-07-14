import { Link } from "@kobalte/core/link";
import { Icon } from "solid-heroicons";
import { arrowLeft } from "solid-heroicons/solid";

export function SecondaryView({ name, children }) {
	return (
		<div>
			<div className="bg-gray-800 text-center text-gray-100 font-semibold text-2xl relative p-4">
				<Link
					href="/"
					className="absolute top-0 left-0 size-16 hover:bg-gray-700 p-4"
				>
					<Icon path={arrowLeft} className="" />
				</Link>
				<h2 className="">{name}</h2>
			</div>
			<div>{children}</div>
		</div>
	);
}
