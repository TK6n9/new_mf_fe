import React, { useEffect, useRef, useState } from "react";
import { Layout, Row, Col, Input, Button, Typography, Space, Flex } from "antd";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./MyFooter.module.css";

const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;

const MyFooter = () => {
  const [showText, setShowText] = useState(false);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset + window.innerHeight;
      const imageWrapperTop = imageWrapperRef.current.offsetTop;
      const imageHalfHeight = imageWrapperRef.current.clientHeight / 2;

      if (scrollPosition > imageWrapperTop + imageHalfHeight) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Row justify={"start"}>
        <Link href="https://www.facebook.com">
          <FaFacebook size={15} className={styles.socialLink} />
        </Link>
        <Link href="https://www.twitter.com">
          <FaTwitter size={15} className={styles.socialLink} />
        </Link>
        <Link href="https://www.instagram.com">
          <FaInstagram size={15} className={styles.socialLink} />
        </Link>
      </Row>
      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "96px",
            width: "33%",
          }}
        >
          <Text strong style={{ fontSize: "18px", marginBottom: "12px" }}>
            마음수련
          </Text>
          <Link href="">
            <Text className={styles.copyrightText}>우리의 이야기</Text>
          </Link>

          <Link href="">
            <Text className={styles.copyrightText}>신문</Text>
          </Link>

          <Link href="">
            <Text className={styles.copyrightText}>마스터 클래스</Text>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "33%",
            marginLeft: "24px",
          }}
        >
          <Text strong style={{ fontSize: "18px", marginBottom: "12px" }}>
            지원하다
          </Text>
          <Link href="">
            <Text className={styles.copyrightText}>질의응답</Text>
          </Link>
          <Link href="">
            <Text className={styles.copyrightText}>연락하다</Text>
          </Link>
          <Link href="">
            <Text className={styles.copyrightText}>후원하다</Text>
          </Link>
        </div>
      </div>

      <div className={styles.imageWrapper} ref={imageWrapperRef}>
        <div
          className={`${styles.imageContent} ${
            showText ? styles.fadeIn : styles.hidden
          }`}
        >
          <Row justify="center" align="middle" style={{ height: "80%" }}>
            <Col>
              <Text className={styles.primaryText}>
                시간이 지나도 변하지 않는 가치를 만들어 보겠습니다.
              </Text>
              <br />
              <Text className={styles.secondaryText}>
                우리의 삶은 어디서 왔고 어디로 가야하는가를 탐구하는 곳입니다.
              </Text>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
