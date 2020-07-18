import React from 'react';

const NavBar = (props)=>{

        return(
            <div className='nav' style={styles.nav}> 
                <div style={styles.cartIconContainer}>
                    <img src="https://image.flaticon.com/icons/svg/2121/2121815.svg" alt="Waiting" style={styles.cartIcon}></img>
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        );
  
}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#CCC',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'lightgrey',
      border:'1px solid grey',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 5,
      top: -9,
      height:15,
      width:7,
      fontSize:12
    }
  };

export default NavBar;