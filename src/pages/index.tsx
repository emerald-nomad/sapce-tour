import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <picture className={styles["background"]}>
      <source
        srcSet="images/home/background-home-mobile.jpg"
        media="(max-width: 375px)"
      />
      <source
        srcSet="images/home/background-home-tablet.jpg"
        media="(max-width: 768px)"
      />
      <img
        src="images/home/background-home-desktop.jpg"
        alt="Earth & Space Background Image"
      />
    </picture>
  );
};

export default Home;
