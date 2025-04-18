"use client";
import React from 'react';
import styles from './cart.module.css'; 
import CartCard from '../components/CartCard/cartcard';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import ec from '../../../assets/emptycart.png';

function Cart() {
  // Retrieve cart items array from Redux state
  const cartItems = useSelector((state) => {
    console.log('Current cart state:', state.cart.items);
    return state.cart.items;
  });

  // Calculate total price of items in cart
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.cart}>
      {cartItems.length <= 0 ? (
        // Show empty cart UI when no items
        <div className={styles.emptyCart}>
          <Image src={ec} alt="Empty Cart" width={300} height={300} />
          <h1>Empty Cart</h1>
        </div>
      ) : (
        // List CartCard components and display total
        <div className={styles.cartCardSection}>
          {cartItems.map((item) => (
            <div key={`${item.id}-${item.uniqueIdentifier}`}>
              <CartCard
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
              />
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
  