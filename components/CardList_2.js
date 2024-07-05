import React, { useState } from "react";
import { Typography } from "antd";
import styles from "./CardList_2.module.css";

const { Text } = Typography;

function CardList_2() {
  const [hover, setHover] = useState([false, false, false, false]);

  const handleMouseEnter = (index) => {
    const newHover = hover.map((_, i) => i === index);
    setHover(newHover);
  };

  const cards = [
    "본능이 악이라면 이성은 천사인가?",
    "부처를 만나면 부처를 죽이고 조사를 만나면 조사를 죽여라.",
    "나 자신까지 속여 버릴 것인가?",
    "우리는 창조자이면서 동시에 조력자가 되어야한다.",
  ];

  const images = ["/111.jpg", "/222.jpg", "/333.jpg", "/444.jpg"];

  return (
    <div className={styles.container}>
      {cards.map((text, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          className={`${styles.imageContainer} ${
            styles[`imageContainer${index + 1}`]
          } ${hover[index] ? styles.hover : ""}`}
        >
          {hover[index] ? (
            <div className={styles.hoverContent}>
              <Text className={styles.hoverTitle}></Text>
              <Text className={styles.hoverText}>{text}</Text>
            </div>
          ) : (
            <Text className={styles.text}></Text>
          )}
        </div>
      ))}
    </div>
  );
}

export default CardList_2;
