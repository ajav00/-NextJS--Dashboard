import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async (
	limit = 20,
	offset = 0
): Promise<SimplePokemon[]> => {
	const res: PokemonResponse = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
	).then((res) => res.json());

	const pokemons = res.results.map(
		(pokemon) =>
			({
				id: pokemon.url.split("/").at(-2)!,
				name: pokemon.name,
			} as SimplePokemon)
	);

	return pokemons;
};

export default async function PokemonsPage() {
	const pokemons = await getPokemons(100, 0);

	return (
    <div className="flex flex-col">
      <span className="text-3xl text-center my-5">Pokemon List 
		<small className="text-sm text-blue-500"> Static Content </small></span>
      <PokemonGrid pokemons={pokemons} />
		</div>
	);
}
