"use client";

import { IoFootball } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetGrid = () => {
	const count = useAppSelector((state) => state.counter.counter);

	return (
		<div className="flex flex-wrap p-2 justify-center align-center">
			<SimpleWidget
				label="Counter"
				title={count.toString()}
				subtitle="Current Counter State"
				icon={<IoFootball size={50} className="text-blue-600" />}
				link="dashboard/counter"
			/>
		</div>
	);
};
