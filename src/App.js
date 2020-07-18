import React from 'react';
import Cart from './cart';
import NavBar from './navBar'


class App extends React.Component{

  constructor(){
    super();
    this.state = {
        products : [
        {
            price:999,
            title:'Watch',
            qty:0,
            img:'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            id:1
        },
        {
            price:23999,
            title:'iPhone',
            qty:0,
            img:'https://images.pexels.com/photos/265658/pexels-photo-265658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id:2
        },
        {
            price:88234,
            title:'MacBook Air',
            qty:0,
            img:'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id:3

        }
    ]
    }
  }

    handleIncreaseQty = (product)=>{
        console.log('Increase Qty');
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty +=1;
        this.setState({
            products:products
        });
    }

    handleDecreaseQty = (product)=>{
        console.log('Decrease Qty');
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty===0){
            return
        }
        products[index].qty -=1;
        this.setState({
            products:products
        });
    }

    handleDeleteProduct = (id)=>{
        console.log('Delete Qty');

        const {products} = this.state;
        const items = products.filter((item)=>item.id!==id);
        console.log(items)
        this.setState({
            products:items
        })
    }

     getCartCount = ()=>{
      const {products} = this.state;
      let count = 0;
      products.forEach((product)=>{
        count += product.qty;
      })
      return count
    }

    getCartTotal = ()=>{
      const {products} = this.state;
      let cartTotal = 0;
      products.forEach((product)=>{
        cartTotal += cartTotal + product.qty*product.price;
      })
      return cartTotal
    }

  render(){
    const {products} = this.state;
    return (
      <div className="App">
            <NavBar count={this.getCartCount()}/>
            <Cart
              products={products}
              onIncreaseQty={this.handleIncreaseQty}
              onDecreaseQty={this.handleDecreaseQty}
              onDelete={this.handleDeleteProduct}
            />
            <div>
              Total : Rs {this.getCartTotal()}
            </div>
      </div>
    );
  }
}
export default App;
