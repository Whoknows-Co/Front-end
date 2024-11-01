import styles from "./Footer.module.css";
import cities from "../constants/cities";
function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <h3>شهر های منتورو</h3>
        {cities.map((city) => (
          <p>{city.name}</p>
        ))}
      </div>
      <div>
        <h3>درباره منتورو</h3>
        <p>مشاوره تحصیلی آنلاین</p>
        <p>درباره‌ی ما</p>
        <p>سوالات متداول</p>
        <p>ثبت‌نام مشاوران</p>
        <p>قوانین و مقررات</p>
        <p>قوانین ثبت نظر</p>
        <p>تماس با ما</p>
      </div>
      <div className={styles.contactUs}>
        <h3>با ما در ارتباط باشید</h3>
        <p>mentoro.ac@gmail.com</p>
        <img src="../../public/logo.svg" alt="" />
      </div>
      <div>
        <h3>منتورو را در شبکه های اجتماعی دنبال کنید</h3>
      </div>
    </div>
  );
}

export default Footer;
