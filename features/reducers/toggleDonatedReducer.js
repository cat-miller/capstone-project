export default function toggleDonatedReducer(state, action) {
  if (state.donated.includes(action.payload)) {
    state.donated = state.donated.filter(id => action.payload != id);
  } else {
    state.donated = [...state.donated, action.payload];
  }
}
