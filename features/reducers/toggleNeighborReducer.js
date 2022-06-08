export default function toggleNeighborReducer(state, action) {
  if (state.neighbors.includes(action.payload)) {
    state.neighbors = state.neighbors.filter(id => action.payload != id);
  } else if (state.neighbors.length < 10) {
    state.neighbors = [...state.neighbors, action.payload];
  }
}
