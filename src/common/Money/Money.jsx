import clsx from "clsx";

import "./Money.css";

export function Money(props) {
	return (
		<span
			className={clsx(
				"money",
				"text-amber-300 text-5xl font-number font-bold",
				props.className,
			)}
		>
			{props.value}
		</span>
	);
}
