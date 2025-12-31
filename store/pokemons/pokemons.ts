import { SimplePokemon } from "@/app/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
	favorites: { [pokemonName: string]: SimplePokemon };
}

// const getInitialState = (): PokemonState => {
// 	//if (typeof localStorage === "undefined") return {};
// 	return JSON.parse(localStorage.getItem("favorite-pokemons") ?? "{}");
// };

const initialState: PokemonState = {
	favorites: {},
	// getInitialState(),
	// ...getInitialState(),
};

const pokemonsSlice = createSlice({
	name: "pokemons",
	initialState,
	reducers: {
		setFavorites: (
			state,
			action: PayloadAction<{
				favorites: { [pokemonName: string]: SimplePokemon };
			}>
		) => {
			console.log("SET VALUE", action.payload.favorites);
			state.favorites = action.payload.favorites;
		},

		toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
			const pokemon = action.payload;
			if (state.favorites[pokemon.id]) {
				delete state.favorites[pokemon.id];
			} else {
				state.favorites[pokemon.id] = pokemon;
			}
		},
	},
});

export const { toggleFavorite, setFavorites } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
