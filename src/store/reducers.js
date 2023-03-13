import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./actions";

const initialState = {
    products: [
           { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 }
    ],
    cart: []
};

const shopReducer = (state=  initialState, action) => {
    let updatedCart;
    let updatedItemIndex;

    switch (action.type) {
        case ADD_PRODUCT_TO_CART: 
        updatedCart = [...state.cart];
        updatedItemIndex = updatedCart.findIndex(
            item => item.id === action.payload.id
        );
    }
}
export default shopReducer