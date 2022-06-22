export default function setPassportReducer(state, action) {
  console.log(action.payload);
  state.island = action.payload.island;
  state.code = action.payload.code;
}
