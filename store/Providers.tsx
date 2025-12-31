"use client";

import { Provider } from "react-redux";
import { store } from ".";
import { useEffect } from "react";
import { setFavorites } from "./pokemons/pokemons";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	useEffect(() => {
		const favorites = JSON.parse(
			localStorage.getItem("favorite-pokemons") ?? "{}"
		);
		store.dispatch(setFavorites({ favorites }));
	}, []);
	return <Provider store={store}>{children}</Provider>;
};
