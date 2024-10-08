/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/56ea706442351d4512482cab005ac7ca29fdb531890c87392ffb007a6fda9008?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
        alt="Rugby action shot"
        className={styles.bannerImage}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ee96f423bce90c9935a4eb458e11f88aaa963825404da224805aad0839f3df7?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
        alt="Rugby equipment"
        className={styles.bannerImage}
      />
    </section>
  );
};

export default Banner;
