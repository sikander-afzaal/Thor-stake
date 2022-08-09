import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  heim: true,
  freya: true,
  thor: true,
  odin: true,
};
const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      switch (action.payload) {
        case "heim":
          state.heim = !state.heim;
          break;
        case "freya":
          state.freya = !state.freya;
          break;
        case "thor":
          state.thor = !state.thor;
          break;
        case "odin":
          state.odin = !state.odin;
          break;

        default:
          return state;
      }
    },
  },
});

export const { updateFilter } = filterReducer.actions;

export default filterReducer.reducer;
