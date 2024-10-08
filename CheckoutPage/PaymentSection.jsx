/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./PaymentSection.module.css";

const PaymentSection = () => {
  return (
    <section className={styles.paymentSection}>
      <h2 className={styles.paymentTitle}>Payment</h2>
      <button className={styles.addCardButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e4891a46b9f6b9181e688a75b1e15aaa37fcef9d07cc187e69d12b25b5e5b06?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
          alt=""
          className={styles.addCardIcon}
        />
        Add payment card
      </button>
      <div className={styles.paymentMethods}>
        <div className={styles.paymentMethod}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/04146cc46806e468f4a5e64caa48bd9172b830dbc385a52b6d60ce4470ac43a9?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
            alt="Visa"
            className={styles.cardLogo}
          />
          <span className={styles.cardType}>Visa Debit Card</span>
          <span className={styles.cardNumber}>**** **** **** 6996</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a64ea6bb16afcbad2b3554f715bc8945890a0e485ef4b1ad8e2274ef2eaf7ca0?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
            alt="Selected"
            className={styles.selectedIcon}
          />
        </div>
        <div className={styles.paymentMethod}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1577ab58a1a7a613d4a146442ea2dc528142a4077d20d2fd4ebdca9e1d7a8d2?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
            alt="Mastercard"
            className={styles.cardLogo}
          />
          <span className={styles.cardType}>Mastercard</span>
          <span className={styles.cardNumber}>**** **** **** 9669</span>
          <div
            className={styles.radioButton}
            role="radio"
            aria-checked="false"
            tabIndex="0"
          ></div>
        </div>
      </div>
      <button className={styles.payButton}>Pay</button>
      <button className={styles.giftCardButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d76b2d48ef798bbabaf317255c871e6b0bfed8d815a86bb382bfe3d4d6326bca?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
          alt=""
          className={styles.giftCardIcon}
        />
        Pay with gift card
      </button>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f014d1bf2629b1be0b71d4ac978855cb453720237a51c2780c5b56b9dbdf510?placeholderIfAbsent=true&apiKey=27c8773822ca4ac8b9cf93169b3bed33"
        alt="Decorative checkout image"
        className={styles.checkoutImage}
      />
    </section>
  );
};

export default PaymentSection;
