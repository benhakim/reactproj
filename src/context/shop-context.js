import React from "react";


export default React.createContext({
    products: [
        { id: 'p1', title: 'Gaming Mouse', price: 29.99},
        { id: 'p2', title: 'Harry Potter', price: 9.99},
        { id: 'p3', title: 'Used plastic bottle', price: 0.29},
        { id: 'p4', title: 'Half-dried plant', price: 2.29}

    ],
    cart: [],
    addProductToCart: product => {},
    removeProductFromCart: productId => {}
});