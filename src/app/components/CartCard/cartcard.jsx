"use client";

import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from 'next/image';
import styles from './cartcard.module.css'; 
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../../../redux/cartSlice';

function CartCard({ name, price, image, id }) {
  const dispatch = useDispatch(); // get dispatch function

  return (
    <div className={styles.CartCard}>
      {/* Left side: product image and details */}
      <div className={styles.leftCard}>
        <Image src={image} alt={name} width={100} height={100} />
        <div className={styles.namePrice}>
          <span className={styles.name}>{name}</span>
          <span className={styles.price}>${price}/-</span>
        </div>
      </div>

      {/* Right side: remove button */}
      <div className={styles.rightCard}>
        <button onClick={() => dispatch(RemoveItem(id))}>
          <RiDeleteBin6Line /> {/* triggers Redux action to remove this item */}
        </button>
      </div>
    </div>
  );
}

export default CartCard;