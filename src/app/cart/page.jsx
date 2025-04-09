"use client";
import React from 'react';
import styles from './cart.module.css'; 
import CartCard from '../components/CartCard/cartcard';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import ec from '../../../assets/emptycart.png';

function Cart() {
   
const cartItems = useSelector((state) => {
  console.log('Current cart state:', state.cart.items); 
  return state.cart.items;
});
  

    const total = cartItems.reduce((a, b) => a + b.price, 0);
  
    return (
      <div className={styles.cart}>
        {cartItems.length <= 0 ? (
          <div className={styles.emptyCart}>
            <Image src={ec} alt="Empty Cart" width={300} height={300} />
            <h1>Empty Cart</h1>
          </div>
        ) : (
          <div className={styles.cartCardSection}>
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.uniqueIdentifier}`}>
                <CartCard name={item.name} price={item.price} image={item.image} id={item.id} />
              </div>
            ))}
            <div className={styles.priceSection}>
              <span>Total Products: {cartItems.length}</span>
              <span>Total Price: $ {total}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Cart;