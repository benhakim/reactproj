 export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
 export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

 export const addProductToCart = prouct => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: ADD_PRODUCT_TO_CART,
                payload: prouct
            });
        }, 700)
    };
 };

 export const removeProductFromCart = prouctId => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: REMOVE_PRODUCT_FROM_CART,
                payload: prouctId
            });
        }, 700)
    }
 }