import React from 'react';

class CartItem extends React.Component{

    increaseQuantity(){
        // Set State -- If Previous State is required
        // this.setState((prevState) => {
        //     return {
        //         qty : prevState.qty+1
        //     }
        // });

        // Other Way 
        this.setState({
            qty:this.state.qty+1
        });

    }

    decreaseQuantity(){
        if(this.state.qty === 0){
            return
        }
        this.setState((prevState) => {
            return {
                qty : prevState.qty-1
            }
        });
    }

    clearQuantity(){
        this.setState((prevState) => {
            return {
                qty : 0
            }
        });
    }
    render(){
        const {qty,price,title} = this.props.product;
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
                    onClick={this.increaseQuantity.bind(this)}
                />
                <img 
                    className="icons" 
                    src="https://image.flaticon.com/icons/svg/864/864373.svg"
                    onClick={this.decreaseQuantity.bind(this)}
                />
                <img 
                    className="icons" 
                    src='https://image.flaticon.com/icons/svg/1214/1214428.svg'
                    onClick={this.clearQuantity.bind(this)}

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