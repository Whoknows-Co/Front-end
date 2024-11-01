import React from "react";
import styles from "./ConsultInfoCard.module.css";
function ConsultInfoCard() {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <img
        className={styles.bullets}
        src="../../../public/icons/tirpleBullet.svg"
        alt=""
      />
      <div className={styles.header}>
        <img src="../../../public/icons/profile-icon.svg" alt="" />
        <div className={styles.details}>
          <h2>پرنیان خالقی</h2>
          <h3>مشاور رشته ریاضی</h3>
          <div>
            <img src="../../../public/icons/Location.svg" alt="" />
            <p>شیراز</p>
          </div>
          <div>
            <img src="../../../public/icons/trust.svg" alt="" />
            <p>مشاور موسسه سوتک</p>
          </div>
          <div>
            <img src="../../../public/icons/email.svg" alt="" />
            <p>ParnianKhaleghi94@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}

export default ConsultInfoCard;
