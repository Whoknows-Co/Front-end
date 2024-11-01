import ConsultInfoCard from "../module/ConsultInfoCard";
import ReservationCard from "../module/ReservationCard";
import styles from "./ConsultDetails.module.css";

function ConsultDetails() {
  return (
    <div className={styles.container}>
      <ConsultInfoCard />
      <ReservationCard />
    </div>
  );
}

export default ConsultDetails;
