/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./CricketShop.module.css";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

const products = [
  {
    id: 1,
    name: "Softball Cricket Bat Low Weight",
    price: 10,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/20f025ab28018581e43e66dcbbd9a2b1097a99a73c2bccf7e3a7698879d24067?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33",
    rating: 4,
  },
  {
    id: 2,
    name: "Cricket Ball One Piece Nassau",
    price: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/75ddde6f23c895f6eb8099eaded4e7fa5500ebe554e178d24bb9f6d067f87290?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33",
    rating: 5,
  },
  {
    id: 3,
    name: "Speed Cricket Batting Gloves",
    price: 14,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9c66db9f3e2c9948b85c346793c0740e84cb8eae31b476687d09d5d03c39918e?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33",
    rating: 4,
  },
  {
    id: 4,
    name: "Branded Cricket wheel bag",
    price: 50,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/95ab136c6521e35d9534317f834f3a4b2e0895fe78fafbdc0e68b2531046e5f3?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33",
    rating: 5,
  },
];

const CricketShop = () => {
  return (
    <div className={styles.cricketShop}>
      <header className={styles.heroSection}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7314c628367f71bb396c50492c55757e840947dd96acb173ed18fe4af3229c9?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
          alt="Cricket field background"
          className={styles.heroBackground}
        />
        <Header />
        <div className={styles.heroContent}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed8413dcd605c106155cabb0c7de64815d557853f089a5c1710a2c014fdb60ea?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
            alt="Cricket player"
            className={styles.heroImage}
          />
          <form className={styles.searchForm}>
            <label htmlFor="searchInput" className={styles.visuallyHidden}>
              Search for cricket items
            </label>
            <input
              type="text"
              id="searchInput"
              placeholder="Search cricket items"
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/728315a4dee7886052f73849805a080167688f2df94a767b1b67861977e91d84?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
                alt="Search"
                className={styles.searchIcon}
              />
            </button>
          </form>
        </div>
      </header>

      <main className={styles.mainContent}>
        <h1 className={styles.sectionTitle}>Cricket</h1>
        <section className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </section>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cd3e6e4a77de3ae28b23c40b74a76657c40cf203c21ca0aacecf3ee74fcc306?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
          alt="Cricket equipment banner"
          className={styles.bannerImage}
        />

        <section className={styles.additionalProducts}>
          <div className={styles.productRow}>
            <ProductCard
              name="MAS Cricket Bottoms"
              price={12}
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/83d2e9d7bcf4783d4b873228c4ce17e89f83ff349700070a103c3deb1ad0a57c?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
            />
            <ProductCard
              name="Cricket shoe naile (sega)"
              price={120}
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/30aa5edc46392151ffbb91efd8bc87e4fc05d6392c1c7bde36fac79bdd2850f9?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
            />
            <ProductCard
              name="Official Sri Lanka Cricket Jersey"
              price={120}
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/27abfe62b8e9dd10eb4022c31e092411449b7dcfb8030c7d4ce387dc4105f9d1?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
            />
          </div>
          <aside className={styles.sideProduct}>
            <ProductCard
              name="1 Pcs Wrist Sweatband Sports Hand Band"
              price={2}
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/d709e22b89f7d934dcac022a5c6e40ebb26e5df81cb5b64c6389b9089338564a?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
            />
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CricketShop;
