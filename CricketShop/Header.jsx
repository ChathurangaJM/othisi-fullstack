/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./CricketShop.module.css";

const Header = () => {
  return (
    <nav className={styles.mainNav}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c79b8763bb0a6cecd57576686d0b1a53f108100cd7dcc10f141d2862be493e31?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
        alt="Cricket Shop Logo"
        className={styles.logo}
      />
      <ul className={styles.navLinks}>
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#product">PRODUCT</a>
        </li>
        <li>
          <a href="#about">ABOUT US</a>
        </li>
        <li>
          <a href="#contact">CONTACT US</a>
        </li>
        <li>
          <a href="#login">LOGIN</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
