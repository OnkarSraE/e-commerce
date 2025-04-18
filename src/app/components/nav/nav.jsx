"use client"; 

import React, { useState, useEffect } from "react";
import { FaShopify } from "react-icons/fa"; 
import { IoSearchOutline } from "react-icons/io5"; 
import { FiShoppingCart } from "react-icons/fi"; 
import Link from "next/link"; 
import { useRouter } from "next/navigation"; // to programmatically navigate on search
import styles from "./nav.module.css"; 
import { useSelector } from "react-redux"; // to read cart count from Redux store

function Nav() {
  // fix SSR hydration mismatch by delaying until mounted
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // search input state and router
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // read number of items in cart from Redux
  const itemsCount = useSelector((state) => state.cart.items.length);

  // handle form submission: navigate to shop with query param
  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.trim();
    if (term) {
      router.push(`/shop?category=${encodeURIComponent(term)}`);
      setSearchTerm(""); // clear input after search
    }
  };

  if (!isClient) {
    return null; // avoid rendering until client
  }

  return (
    <div className={styles.nav}>
      <div className={styles.topNav}>
        {/* Logo and home link */}
        <Link href="/">
          <div className={styles.logo}>
            <span className={styles.slogo}>ShopSwift</span>
            <FaShopify />
          </div>
        </Link>

        {/* Search form */}
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

        {/* Cart icon with counter */}
        <Link href="/cart" className={styles.cartIcon}>
          <FiShoppingCart />
          {itemsCount > 0 && (
            <span className={styles.cartCounter}>{itemsCount}</span>
          )}
        </Link>
      </div>

      {/* Secondary navigation links */}
      <div className={styles.bottomNav}>
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/cart">Cart</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </div>
    </div>
  );
}

export default Nav;

