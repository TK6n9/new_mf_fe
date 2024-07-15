import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Row,
  Typography,
  Avatar,
  List,
} from "antd";
const { Text } = Typography;

const PostDrawer = ({ isVisible, onClose }) => {
  const data = [
    {
      title: "제목1",
      description: "내용1",
    },
    {
      title: "제목2",
      description: "내용2",
    },
    {
      title: "제목3",
      description: "내용3",
    },
    {
      title: "제목4",
      description: "내용4",
    },
  ];

  return (
    <>
      <Drawer
        title="방명록"
        width={720}
        onClose={onClose}
        open={isVisible}
        zIndex={10000}
        footerStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        footer={
          <>
            <Form
              layout="vertical"
              requiredMark={false}
              style={{ marginTop: 20 }}
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="제목"
                    label={<Text>제목</Text>}
                    rules={[
                      {
                        required: false,
                        message: "제목을 입력해 주세요",
                      },
                    ]}
                  >
                    <Input.TextArea placeholder="글 제목" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="내용"
                    label={<Text>내용</Text>}
                    rules={[
                      {
                        required: false,
                        message: "내용을 입력해 주세요",
                      },
                    ]}
                  >
                    <Input.TextArea
                      rows={4}
                      placeholder={"내용을 입력해 주세요"}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button onClick={onClose} type="text">
                <Text>닫기</Text>
              </Button>
              <Button onClick={onClose} type="text">
                <Text>등록</Text>
              </Button>
            </div>
          </>
        }
      >
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
                title={<Text>{item.title}</Text>}
                description={<Text>{item.description}</Text>}
              />
            </List.Item>
          )}
        />
      </Drawer>
    </>
  );
};

export default PostDrawer;
