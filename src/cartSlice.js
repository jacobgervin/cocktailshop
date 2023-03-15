import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}
const cartSlice = createSlice({
    name: "cart", 
    initialState,
    reducers: {
        addTooCart(state, action){
            state.cartItems.push(action.payload)
        },
    },
});

export const { addTooCart } = cartSlice.actions;

export default cartSlice.reducer;