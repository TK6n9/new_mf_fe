import React from "react";
import { Row, Col, Typography } from "antd";
import {
  DesktopOutlined,
  HomeOutlined,
  CarryOutOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import styles from "./CardList_1.module.css"; // Import the CSS Module

const { Title, Text } = Typography;

const CardList_1 = ({ children }) => {
  return (
    <div className={styles.howItWorksContainer}>
      <Title level={2} className={styles.howItWorksTitle}>
        가치
      </Title>
      <Row justify="center">
        <Col xs={12} sm={12} md={12}>
          <Text className={styles.howItWorksIcon}>⚙️</Text>
          <br />
          <Text style={{ fontSize: "15px" }}> 인생 톱니바퀴</Text>
        </Col>
        <Col xs={12} sm={12} md={12}>
          <Text className={styles.howItWorksIcon}>⏱️</Text>
          <br />
          <Text style={{ fontSize: "15px" }}>
            씨앗을 심는 시기,
            <br />
            새싹이 자라는 시기,
            <br />
            성장하는 시기
          </Text>
        </Col>
        <Col xs={12} sm={12} md={12}>
          <Text className={styles.howItWorksIcon}>🛥️</Text>
          <br />
          <Text style={{ fontSize: "15px" }}>
            배는 주변의 바닷물로
            <br />
            바다에 떠 있을 수 있지만,
            <br />
            바닷물이 배 안으로 들어 올땐
            <br /> 배는 침몰한다.
          </Text>
        </Col>
        <Col xs={12} sm={12} md={12}>
          <Text className={styles.howItWorksIcon}>👁️</Text>
          <br />
          <Text style={{ fontSize: "15px" }}>
            보이는 것 <br />
            보이지 않는 것
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default CardList_1;
