import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  items: [],
  toggle: false,
};
const findIndex = (state, id) =>
  state.items.findIndex((item) => item.id === id);

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem(state, action) {
      const index = findIndex(state, action.payload[0].id);

      const existing = state.items[index];
      if (existing) {
        state.items[index].quantity += action.payload[0].quantity;

        state.items[index].total =
          action.payload[0].price * state.items[index]?.quantity;
      } else {
        state.items = [
          ...state.items.filter((items) => items.id !== action.payload[0].id),
          action.payload[0],
        ];
      }
    },
    incrementItem(state, action) {
      const index = findIndex(state, action.payload.id);
      state.items[index].quantity++;

      state.items[index].total += state.items[index].price;
    },
    decrementItem(state, action) {
      const index = findIndex(state, action.payload.id);
      if (state.items[index].quantity <= 1) {
        state.items.splice(index, 1);
      } else {
        state.items[index].quantity--;

        state.items[index].total -= state.items[index].price;
      }
    },
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const {actions} = cartSlice;
export default cartSlice.reducer;
