import { Link } from "@kobalte/core/link";
import { Icon } from "solid-heroicons";
import { arrowLeft } from "solid-heroicons/solid";

export function SecondaryView(props) {
	return (
		<div className="size-full flex flex-col flex-nowrap ">
			<div className="bg-gray-800 text-center text-gray-100 font-semibold text-2xl relative p-2">
				<Link
					href="/"
					className="absolute top-0 left-0 size-12 hover:bg-gray-700 p-2"
				>
					<Icon path={arrowLeft} className="" />
				</Link>
				<h2>{props.name}</h2>
			</div>
			<div className="flex-grow">{props.children}</div>
		</div>
	);
}
