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
  const rawCategory = searchParams.get("category") || "";
  const queryCategory = rawCategory.trim().toLowerCase();

  const [cate, setCate] = useState(dummydata);

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
            onClick={() => filterProducts(item.name)}
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
          No results found for “{rawCategory}”
        </div>
      )}
    </div>
  );
}

export default Shop;
