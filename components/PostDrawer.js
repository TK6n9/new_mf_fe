import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { addPostRequest, deletePostRequest } from "../reducers/post";
const { Text } = Typography;

const PostDrawer = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const currentUser = useSelector((state) => state.user.currentUser);
  const posts = useSelector((state) => state.post.posts);
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    const newPost = {
      ...values,
      id: new Date().getTime().toString(), // 간단한 ID 생성
      author: currentUser.username, // 작성자 정보 추가
    };
    dispatch(addPostRequest(newPost));
    form.resetFields();
    onClose();
  };

  const handleDelete = (id) => {
    dispatch(deletePostRequest(id));
  };

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
          isAuthenticated ? (
            <Form
              form={form}
              layout="vertical"
              requiredMark={false}
              onFinish={handleFinish}
              style={{ marginTop: 20 }}
            >
              <Col span={24}>
                <Form.Item
                  name="title"
                  label={<Text>제목</Text>}
                  rules={[
                    {
                      required: true,
                      message: "제목을 입력해 주세요",
                    },
                  ]}
                >
                  <Input.TextArea rows={1} placeholder="글 제목" />
                </Form.Item>
              </Col>

              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="description"
                    label={<Text>내용</Text>}
                    rules={[
                      {
                        required: true,
                        message: "내용을 입력해 주세요",
                      },
                    ]}
                  >
                    <Input.TextArea
                      rows={6}
                      placeholder="내용을 입력해 주세요"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button onClick={onClose} type="text">
                  <Text>닫기</Text>
                </Button>
                <Button htmlType="submit" type="text">
                  <Text>등록</Text>
                </Button>
              </div>
            </Form>
          ) : (
            <Text>로그인 후 글을 작성할 수 있습니다.</Text>
          )
        }
      >
        <List
          itemLayout="horizontal"
          dataSource={posts}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                item.author === currentUser.username && (
                  <Button onClick={() => handleDelete(item.id)}>삭제</Button>
                ),
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
                title={<Text>{item.title}</Text>}
                description={
                  <>
                    <Text>{item.description}</Text>
                    <br />
                    <Text type="secondary">{item.author}</Text>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </Drawer>
    </>
  );
};

export default PostDrawer;
