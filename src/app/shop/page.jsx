"use client"
import React, { useState } from 'react';
import styles from './shop.module.css' ;
import Image from 'next/image';
import { category } from '../category';
import { dummydata } from '../dummydata';
import Product from '../components/product/product';


function Shop() {
    const [cate, setCate] = useState(dummydata);

    function filterProducts(selectedCategory) {
        if (selectedCategory === "All") {
            setCate(dummydata);
        } else {
            const updatedData = dummydata.filter((item) => item.category === selectedCategory);
            setCate(updatedData);
        }
    }
    const handleFilterProducts = (item) => {
        filterProducts(item.name);
      };

    return (
        <div className={styles.shop}>

            <div className={styles.categorySection}>
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