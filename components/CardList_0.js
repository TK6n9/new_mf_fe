import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;
import styles from "./CardList_0.module.css"; // Import the CSS Module

const CardList_0 = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroBackground}>
        <img
          src="./hand-plant.jpg"
          alt="Soto Pot Kits"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.heroContent}>
        <Title style={{ color: "white" }}>🪐CENTER ⚙️F GRAVITY🌏</Title>
        {/* <Text className={styles.heroDescription}>
          우리는 어디로 가야하는 가?
        </Text> */}
        {/* <button className={styles.heroButton}>
          <Text style={{ color: "white" }}>가입하기</Text>
        </button> */}
      </div>
    </div>
  );
};

export default CardList_0;
