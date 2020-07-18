import React from 'react';

const NavBar = (props)=>{

        return(
            <div className='nav' style={styles.nav}> 
                <div style={styles.cartIconContainer}>
                    <i class="fas fa-cart-plus" style={styles.cartIcon}></i>
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        );
  
}

const styles = {
    cartIcon: {
      color:'white',
      height: 32,
      marginRight: 20,
      fontSize:34
    },
    nav: {
      height: 70,
      background: 'black',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      color:'white'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: '#ECECEC',
      border:'1px solid grey',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 5,
      top: -9,
      height:15,
      width:7,
      fontSize:12,
      color:'black'
    }
  };

export default NavBar;