export default function toggleFavoriteReducer(state, action) {
  if (state.favorites.includes(action.payload)) {
    state.favorites = state.favorites.filter(id => action.payload != id);
  } else {
    state.favorites = [...state.favorites, action.payload].sort();
  }
}
