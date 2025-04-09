import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddItem: (state, action) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        
        existingItem.quantity += 1;
      } else {
        
        state.items.push({ ...action.payload, quantity: 1 });
      }

      console.log('Updated cart state:', state.items);
    },
    RemoveItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    UpdateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = Math.max(1, quantity); 
      }
    }
  }
});

export const { AddItem, RemoveItem, UpdateQuantity } = cartSlice.actions;
export default cartSlice.reducer;