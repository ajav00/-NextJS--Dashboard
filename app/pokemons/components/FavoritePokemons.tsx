"use client";

import { PokemonGrid } from "./PokemonGrid";
import { useAppSelector } from "@/store";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
	const pokemons = useAppSelector((state) =>
		Object.values(state.pokemons.favorites)
	);

	console.log(pokemons);
	// const [pokemonsFavorite, setPokemonsFavorite] = useState(pokemons);

	// useEffect(() => {
	// 	setPokemonsFavorite(pokemons);
	// }, [pokemons]);

	return (
		<>
			{pokemons.length === 0 ? (
				<NoFavorites />
			) : (
				<PokemonGrid pokemons={pokemons} />
			)}
		</>
	);
};

export const NoFavorites = () => {
	return (
		<div className="flex flex-col items-center justify-center h-[50vh]">
			<IoHeartOutline className="text-6xl text-red-500" />
			<span className="text-2xl text-gray-500">No Favorites</span>
		</div>
	);
};
