import React from 'react';
import './Products.css';
import MainNavigation from '../components/MainNavigation';
import ShopContext from '../context/shop-context';


const Products = props => {
  return (
    <ShopContext.Consumer>
        {context => (
    <React.Fragment>
<MainNavigation 
  cartItemNumber ={context.cart.reduce((count, curtItem) => {
    return count + curtItem.quantity;
  }, 0)}
/>
<main className='products'>
    <ul>
        {context.products.map(product => (
           <li key={product.id}>
            <div>
                <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
                <button
                onClick={context.addProductToCart.bind(this, product)}
                >
                Add to Cart
                </button>
            </div>
        </li>

        ))}
     
    </ul>
</main>



    </React.Fragment>
    )}
  

</ShopContext.Consumer>
  )
}

export default Products