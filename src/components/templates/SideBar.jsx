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
            imgUrl={"../../../public/icons/Educatoin.svg"}
          ></ButtonSB>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }}>
          <ButtonSB
            txt={"ویرایش اطلاعات حساب"}
            imgUrl={"../../../public/icons/Educatoin.svg"}
          ></ButtonSB>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }}>
          <ButtonSB
            txt={"نوبت های من"}
            imgUrl={"../../../public/icons/Educatoin.svg"}
          ></ButtonSB>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }}>
          <ButtonSB
            txt={"مشاوران من"}
            imgUrl={"../../../public/icons/Educatoin.svg"}
          ></ButtonSB>
        </NavLink>

        <ButtonSB
          txt={"خروج از حساب"}
          imgUrl={"../../../public/icons/Educatoin.svg"}
        ></ButtonSB>
      </div>
      <div className={styles.footer}>
        <p></p>
        <span></span>
        <button></button>
      </div>
    </div>
  );
}

export default SideBar;
