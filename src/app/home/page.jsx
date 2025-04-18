"use client"
import React, { useState } from 'react';
import styles from './home.module.css';
import { category } from '../category';
import { dummydata } from '../dummydata';
import Image from 'next/image';
import Product from '../components/product/product';

function Home() {
  // local state for currently displayed products
  const [cate, setCate] = useState(dummydata);

  // filters products by the clicked category name
  function filterProducts(categoryName) {
    const filtered = dummydata.filter(
      (item) => item.category === categoryName
    );
    setCate(filtered);
  }

  // click handler passing the category object
  const handleCategoryClick = (item) => {
    filterProducts(item.name);
  };

  return (
    <div className={styles.home}>
      <div className={styles.heroBg}>
        {/* hero background image or animation */}
      </div>

      <div className={styles.categorySection}>
        {/* render the first 5 categories as clickable cards */}
        {category.slice(0, 5).map((item) => (
          <div
            key={item.name}
            className={styles.categoryCard}
            onClick={() => handleCategoryClick(item)}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
            />
            {item.name}
          </div>
        ))}
      </div>

      <div className={styles.text}>
        <h1>Trending Products</h1>
      </div>

      <div className={styles.productSection}>
        {/* display up to 7 products from the filtered list */}
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