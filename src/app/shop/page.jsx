"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./shop.module.css";
import Image from "next/image";
import { category } from "../category";
import { dummydata } from "../dummydata";
import Product from "../components/product/product";

function Shop() {
  const searchParams = useSearchParams();
  const rawCategory = searchParams.get("category") || ""; // get the category query
  
  const [cate, setCate] = useState(dummydata); // state for filtered products

  // filter function: show all if empty or 'all', else case-insensitive match
  function filterProducts(selectedCategory) {
    const cat = (selectedCategory || "").trim().toLowerCase();
    if (!cat || cat === "all") {
      setCate(dummydata);
    } else {
      const updatedData = dummydata.filter(
        (item) => item.category.toLowerCase() === cat
      );
      setCate(updatedData);
    }
  }

  // apply filter when URL query changes
  useEffect(() => {
    filterProducts(rawCategory);
  }, [rawCategory]);

  return (
    <div className={styles.shop}>
      <div className={styles.categorySection}>
        {category.map((item) => (
          <div
            key={item.name}
            className={styles.categoryCard}
            onClick={() => filterProducts(item.name)} // filter by clicking category
          >
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
            />
            {item.name} {/* display category name */}
          </div>
        ))}
      </div>

      {cate.length > 0 ? (
        <div className={styles.productSection}>
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
      ) : (
        <div className={styles.noResults}>
          No results found for “{rawCategory}” {/* message when no matches */}
        </div>
      )}
    </div>
  );
}

export default Shop;
