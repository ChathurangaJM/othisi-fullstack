/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Header.module.css";

function Header() {
  const navItems = ["HOME", "PRODUCT", "ABOUT US", "CONTACT US", "LOGIN"];

  return (
    <nav className={styles.nav}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c79b8763bb0a6cecd57576686d0b1a53f108100cd7dcc10f141d2862be493e31?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
        alt="Logo"
        className={styles.logo}
      />
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            {item}
          </li>
        ))}
      </ul>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ea635d4c7c2ab665312eea7b0d2b1418fbb3bc8aa4e3be854541c436bb2e0f5?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
        alt="Menu"
        className={styles.menuIcon}
      />
    </nav>
  );
}

export default Header;
