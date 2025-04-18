"use client"
import React, {useState} from 'react';
import styles from '../product/product.module.css';
import { useDispatch } from 'react-redux';
import Image from 'next/image'; 
import { AddItem } from '../../../../redux/cartSlice'; 

function Product({ name, image, price, id }) {
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false); // control toast visibility

  // when clicking Add+, dispatch action and show notification
  const handleAddItem = () => {
    dispatch(AddItem({ id, name, image, price }));
    setShowNotification(true);
    // auto-hide notification after 3s
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className={styles.product}>
      {/* Product image */}
      <Image src={image} alt={name} width={200} height={200} priority />

      {/* Name, price, and Add button */}
      <div className={styles.productDetails}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>$ {price}/-</span>
        <button onClick={handleAddItem}>Add +</button>
      </div>

      {/* Notification overlay when item is added */}
      {showNotification && (
        <div className={styles.notificationOverlay}>
          <div className={styles.notificationBox}>
            <span>🎉 Added to Cart!</span>
            <button
              className={styles.closeButton}
              onClick={() => setShowNotification(false)}
            >
              ×
            </button>
            <div className={styles.progressBar} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
