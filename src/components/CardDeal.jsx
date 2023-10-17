import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better  <br className="sm:block hidden" /> card deal in few <br className="sm:block hidden" /> easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur repellendus illum totam minus dolorem!
      </p>
      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
