import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className=" rounded-[20px] box-shadow flex  items-center md:flex-row flex-col sm:mb-16 mb-16 relative">
      <h2 className={styles.heading2}>
       Join our weekly digest
      </h2>
      <div className=" md:mt-15 mt-6">
        <p className={`${styles.paragraph} text-right max-w-[580px]`}>
          Get exclusive promotions & updates straight to your inbox..
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
