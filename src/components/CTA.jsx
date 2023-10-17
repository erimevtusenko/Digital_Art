import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-neutral-700 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Join our weekly digest</h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        Get exclusive promotions & updates straight to your inbox...
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-5 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
