import { banner } from "../assets";
import styles, { layout } from "../style";

const Banner = () => (
  <section className={layout.section}>
    <div className={layout.sectionImg}>
      <img src={banner} alt="banner" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Banner;
