import React from "react";
import styles from "./StudentPage.module.css";
import SideBar from "../components/templates/SideBar";
function StudentPage() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.content}></div>
    </div>
  );
}

export default StudentPage;
