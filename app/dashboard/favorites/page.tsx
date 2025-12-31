import {
	FavoritePokemons,
	PokemonGrid,
	PokemonResponse,
	SimplePokemon,
} from "@/app/pokemons";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

export const metadata = {
	title: "Pokemon Favorites",
	description: "Pokemon Favorites",
};

export default async function PokemonsFavoritesPage() {
	// const pokemons = await getPokemons(100, 0);

	return (
		<div className="flex flex-col">
			<span className="text-3xl text-center my-5">
				Pokemon List
				<small className="text-sm text-blue-500"> Static Content </small>
			</span>
			<FavoritePokemons />
		</div>
	);
}
