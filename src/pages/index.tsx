import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <picture>
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
    </div>
  );
};

export default Home;
