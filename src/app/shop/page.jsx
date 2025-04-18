"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./shop.module.css";
import Image from "next/image";
import { category } from "../category";
import { dummydata } from "../dummydata";
import Product from "../components/product/product";

function Shop() {
  // state holding products to display
  const [cate, setCate] = useState(dummydata);

  // show all products if "All" selected, otherwise filter by category
  function filterProducts(selectedCategory) {
    if (selectedCategory === 'All') {
      setCate(dummydata);
    } else {
      const updatedData = dummydata.filter(
        (item) => item.category === selectedCategory
      );
      setCate(updatedData);
    }
  }

  // click handler invokes filtering
  const handleFilterProducts = (item) => {
    filterProducts(item.name);
  };

  return (
    <div className={styles.shop}>
      <div className={styles.categorySection}>
        {/* render all categories */}
        {category.map((item) => (
          <div
            key={item.name}
            className={styles.categoryCard}
            onClick={() => handleFilterProducts(item)}
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

      <div className={styles.productSection}>
        {/* display filtered products */}
        {cate.map((item) => (
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

export default Shop;
