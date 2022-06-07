export default function toggleCaughtReducer(state, action) {
  if (state.caught.includes(action.payload)) {
    state.caught = state.caught.filter(id => action.payload != id);
  } else {
    state.caught = [...state.caught, action.payload];
  }
}
