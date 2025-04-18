"use client";

import React, { useState, useEffect } from "react";
import { FaShopify } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./nav.module.css";
import { useSelector } from "react-redux";

function Nav() {
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const itemsCount = useSelector((state) => state.cart.items.length);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.trim();
    if (term) {
      router.push(`/shop?category=${encodeURIComponent(term)}`);
      setSearchTerm("");
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.nav}>
      <div className={styles.topNav}>
        <Link href="/">
          <div className={styles.logo}>
            <span className={styles.slogo}>ShopSwift</span>
            <FaShopify />
          </div>
        </Link>

        <form onSubmit={handleSearch} className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search Category…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <IoSearchOutline />
          </button>
        </form>

        <Link href="/cart" className={styles.cartIcon}>
          <FiShoppingCart />
          {itemsCount > 0 && (
            <span className={styles.cartCounter}>{itemsCount}</span>
          )}
        </Link>
      </div>
      <div className={styles.bottomNav}>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </div>
    </div>
  );
}

export default Nav;
