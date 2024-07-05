import React from "react";
import { Row, Col, Typography, Image } from "antd";

const { Title, Text } = Typography;

const CardList_3 = () => {
  return (
    <Row justify="center">
      <Col span={24} style={{ textAlign: "center" }}>
        <Title level={1}>COG 관하여</Title>
      </Col>

      <Row style={{ width: "100%" }}>
        <Col xs={24} md={12} style={{ paddingRight: "24px" }}>
          <Title level={3}>COG란 무엇인가요?</Title>
          <Text
            style={{
              fontSize: "14px",
              marginBottom: "24px",
              display: "block",
            }}
          >
            중력의 중심과 톱니바퀴입니다.
            <br />
            <br /> 중력의 중심 처럼 나 자신을 잃지 말자라는 의미와
            <br /> 톱니바퀴처럼 우리는 어쩔 수 없이 어울려 살아야하는 운명,
            <br />
            <br />
            나는 어떤 톱니바퀴로 어떠한 역할을 해야하나라는 의미가 있습니다.
          </Text>
          <Title level={3} style={{ marginBottom: "24px" }}>
            여기서 무엇을 하면 돼 ?
          </Title>
          <Text
            style={{
              fontSize: "14px",
              marginBottom: "24px",
              display: "block",
            }}
          >
            자유롭게 글을 쓰고 자신의 생각, 경험, 감정, 악담, 험담 모든 것이
            허용됩니다.
          </Text>
          <Title level={3} style={{ marginBottom: "24px" }}>
            목적이 뭔데?
          </Title>
          <Text
            style={{
              fontSize: "14px",
              marginBottom: "24px",
              display: "block",
            }}
          >
            목적은 허무한 삶에 대한 토론이며, 허무한 삶에 어떤 기여를 할 수
            있을까?
            <br />
            내일을 살게 만드는 힘을 만들어 내는 것입니다.
            <br />
            아침을 반갑게 맞이하는 힘이 아닐까요
          </Text>
          <Title level={3} style={{ marginBottom: "24px" }}>
            이용에 아무런 댓가는 없는가 ?
          </Title>
          <Text
            style={{
              fontSize: "14px",
              marginBottom: "24px",
              display: "block",
            }}
          >
            나를 더 발전시키는 목적이므로 비용적 측면은 없고 익명으로
            운영됩니다.
          </Text>
        </Col>

        <Col xs={24} md={12}>
          <Image
            src="/womenimg.jpg"
            style={{
              borderRadius: "10px",
              objectFit: "cover",
              height: "auto",
              marginTop: "48px",
            }}
          />
        </Col>
      </Row>
    </Row>
  );
};

export default CardList_3;
