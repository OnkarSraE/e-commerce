"use client"
import React, {useState} from 'react';
import styles from '../product/product.module.css';
import { useDispatch } from 'react-redux';
import Image from 'next/image'; 
import { AddItem } from '../../../../redux/cartSlice'; 

function Product({ name, image, price, id }) {
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);
  

  const handleAddItem = () => {
    
    dispatch(AddItem({ id, name, image, price }));
    setShowNotification(true);
    
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className={styles.product}>
      <Image src={image} alt={name} width={200} height={200} priority/> 
      <div className={styles.productDetails}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>$ {price}/-</span>
        <button onClick={handleAddItem}>Add +</button>
      </div>
      
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