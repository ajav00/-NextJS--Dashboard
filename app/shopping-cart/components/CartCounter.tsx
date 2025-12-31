"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import {
	decrement,
	increment,
	initCounter,
	resetCounter,
} from "@/store/CounterSlice";
import { useEffect, useState } from "react";

interface Props {
	value?: number;
}

export interface CartCounterProps {
	count: number;
}

const getApiCounter = async () => {
	const response = await fetch("/api/counter").then((resp) => resp.json());
	return response.count;
};

export const CartCounter = ({ value = 0 }: Props) => {
	const count = useAppSelector((state) => state.counter.counter);
	const dispatch = useAppDispatch();

	useEffect(() => {
		getApiCounter().then((count) => dispatch(initCounter(count)));
	}, [dispatch]);

	return (
		<>
			<span className="text-9xl">{count}</span>
			<div className="flex ">
				<button
					onClick={() => dispatch(increment())}
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
				>
					+1
				</button>
				<button
					onClick={() => dispatch(decrement())}
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
				>
					-1
				</button>
			</div>
		</>
	);
};
