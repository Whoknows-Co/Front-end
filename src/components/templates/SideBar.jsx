import React from "react";
import styles from "./SideBar.module.css";
import ButtonSB from "../atom/ButtonSB";
import { NavLink } from "react-router-dom";
function SideBar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="../../../public/icons/profile-icon.svg" alt="" />
        <div>
          <p>پرنیان خالقی</p>
          <p>09179589395</p>
        </div>
      </div>
      <div className={styles.navBar}>
        <NavLink style={{ textDecoration: "none" }}>
          <ButtonSB
            txt={"حساب کاربری"}
            imgUrl={"../../../public/icons/personOrange.svg"}
            bColor={"rgba(251, 133, 0, 0.21)"}
          ></ButtonSB>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }}>
          <ButtonSB
            txt={"ویرایش اطلاعات حساب"}
            imgUrl={"../../../public/icons/editPersonBlue.svg"}
            bColor={"#F4F2EA"}
          ></ButtonSB>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }}>
          <ButtonSB
            txt={"نوبت های من"}
            imgUrl={"../../../public/icons/calenderBlue.svg"}
            bColor={"#F4F2EA"}
          ></ButtonSB>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }}>
          <ButtonSB
            txt={"مشاوران من"}
            imgUrl={"../../../public/icons/EducatoinBlue.svg"}
            bColor={"#F4F2EA"}
          ></ButtonSB>
        </NavLink>

        <ButtonSB
          txt={"خروج از حساب"}
          imgUrl={"../../../public/icons/exit-icon.svg"}
          bColor={"#F4F2EA"}
        ></ButtonSB>
      </div>
      <div className={styles.footer}>
        <div className={styles.bBack}></div>
        <div className={styles.oBack}></div>
        <p>موجودی کیف پول</p>
        <span> 0 تومان</span>
        <button>افزایش موجودی</button>
      </div>
    </div>
  );
}

export default SideBar;
