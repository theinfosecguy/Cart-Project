import React from 'react';
import Cart from './cart';
import NavBar from './navBar'


class App extends React.Component{

  constructor(){
    super();
    this.state = {
        products : [
        {
            price:99,
            title:'Watch',
            qty:0,
            img:'',
            id:1
        },
        {
            price:999,
            title:'Smart Watch',
            qty:0,
            img:'',
            id:2
        },
        {
            price:9999,
            title:'Apple Watch',
            qty:0,
            img:'',
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
      </div>
    );
  }
}
export default App;
