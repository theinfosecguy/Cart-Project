import React from 'react';
import CartItem from './CartItem';

const Cart = (props) =>{
   

        const arr = [1,2,3,4,5];
        const {products} = props;
        return(
            <div className='cart'> 
                {products.map((product)=>{
                    return (
                    <CartItem 
                        product={product} 
                        key={product.id}
                        onIncreaseQty={props.onIncreaseQty}
                        onDecreaseQty={props.onDecreaseQty}
                        onDelete={props.onDelete}
                        />
                    )
                })}
            </div>
        );

    
     

}
export default Cart;