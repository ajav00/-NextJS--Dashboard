"use client";
import React from "react";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import Link from "next/link";
import { IoHeart } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props {
	pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
	const { id, name } = pokemon;
	console.log("Pokemon", id, name, pokemon);
	const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);
	const dispatch = useAppDispatch();

	const onToggleFavorite = () => {
		dispatch(toggleFavorite(pokemon));
	};

	return (
		<div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
			<div className="flex items-center justify-center">
				<Image
					className="rounded-t-lg mt-4"
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
					alt={name}
					width={0}
					height={0}
					style={{ width: "170px", height: "170px" }}
					priority={false}
				/>
			</div>
			<div className="py-6 px-8 rounded-lg bg-white">
				<h1 className="text-center text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
					{name}
				</h1>
				<Link
					href={`pokemon/name/${name}`}
					className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
				>
					More Information
				</Link>
			</div>
			<div className="absolute top-2 right-2 py-2 px-4 text-2xl rounded-lg">
				<button className="cursor-pointer" onClick={onToggleFavorite}>
					{isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
				</button>
			</div>
		</div>
	);
};
