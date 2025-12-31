import { Action, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";

export const localStorageMiddleware =
	(store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
		next(action);
		if (action.type === "pokemons/toggleFavorite") {
			localStorage.setItem(
				"favorite-pokemons",
				JSON.stringify(store.getState().pokemons.favorites)
			);
			return;
		}
	};
