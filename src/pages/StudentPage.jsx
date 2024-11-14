import React from "react";
import styles from "./StudentPage.module.css";
import SideBar from "../components/templates/SideBar";
import StudentViewSection from "../components/templates/StudentViewSection";
function StudentPage() {
  return (
    <div className={styles.container}>
      <SideBar />
      <StudentViewSection />
    </div>
  );
}

export default StudentPage;
