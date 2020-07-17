import React from 'react';

class CartItem extends React.Component{

    render(){
        const {qty,price,title} = this.props.product;
        const {product,onDecreaseQty,onDelete,onIncreaseQty} = this.props;

        return(
        <div className="cart-item">

        <div className="left-block">
            <img style={styles.image}></img>
        </div>
        <div className="right-block">
            <div>{title}</div>
            <div style={{color:'#777'}}>Rs : {price}</div>
            <div style={{color:'#777'}}>Qty : {qty}</div>

            <div className="cart-item-actions">
                <img 
                    className="icons" 
                    src='https://image.flaticon.com/icons/svg/864/864378.svg'
                    onClick={()=>onIncreaseQty(product)}
                />
                <img 
                    className="icons" 
                    src="https://image.flaticon.com/icons/svg/864/864373.svg"
                    onClick={()=>onDecreaseQty(product)}
                />
                <img 
                    className="icons" 
                    src='https://image.flaticon.com/icons/svg/1214/1214428.svg'
                    onClick={()=>onDelete(product.id)}


                />

            </div>
        </div>
  
      </div>
    );
    }
}

const styles={
    image:{
        height:140,
        width:140,
        borderRadius:10,
        background:'#777'
    }
}
export default CartItem;