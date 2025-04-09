"use client"
import React, { useState } from 'react';
import styles from './home.module.css';
import { category } from '../category';
import { dummydata } from '../dummydata';
import Image from 'next/image';
import Product from '../components/product/product';

function Home() {
  let [cate, setCate] = useState(dummydata);

  function filterProducts(category) {
    const updatedata = dummydata.filter((item) => (item.category === category));
    setCate(updatedata);
  }
  const handleCategoryClick = (item) => {
    filterProducts(item.name);
  };

  return (
    <div className={styles.home}>
      <div className={styles.heroBg}>
      
      </div>
      <div className={styles.categorySection}>
        {category.slice(0, 5).map((item) => (
          <div key={item.name} className={styles.categoryCard} onClick={() => handleCategoryClick(item)}>
            
            <Image
              src={item.image}
              alt={item.name}
              width={100} 
              height={100} 
              priority
            />
            {item.name}
          </div>
        ))}
        </div>
        
        <div className={styles.text}>
        <h1>Trending Products</h1>
        </div>
        
        <div className={styles.productSection}>
        
          {cate.slice(0, 7).map((item) => ( 
            <div key={item.id} className={styles.productCard}>
              <Product 
                name={item.name} 
                price={item.price} 
                image={item.image} 
                id={item.id} 
              />
            </div>
          ))}
        </div>
      </div>
    
  );
}

export default Home;