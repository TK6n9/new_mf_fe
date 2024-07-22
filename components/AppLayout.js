import React, { useState } from "react";
import Link from "next/link";
import { Layout, Menu, Typography, Row, Col, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/user";
import MyFooter from "./MyFooter";
import LoginModal from "./LoginModal";
import PostDrawer from "./PostDrawer";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const AppLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [postModalVisible, setPostModalVisible] = useState(false);

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const openPostModal = () => {
    setPostModalVisible(true);
  };

  const closePostModal = () => {
    setPostModalVisible(false);
  };

  const openLoginModal = () => {
    setLoginModalVisible(true);
  };

  const closeLoginModal = () => {
    setLoginModalVisible(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        maxWidth: "768px",
        margin: "0 auto",
        background: "white",
      }}
    >
      <PostDrawer isVisible={postModalVisible} onClose={closePostModal} />
      <LoginModal isVisible={loginModalVisible} onClose={closeLoginModal} />

      <Header
        style={{
          padding: 0,
          margin: 0,
          zIndex: 8888,
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Row justify="space-between" align="middle" style={{ width: "100%" }}>
          <Col style={{ display: "flex", alignItems: "center" }}>
            <Link href="/">
              <Text style={{ whiteSpace: "nowrap", fontSize: "24px" }}>
                C O G
              </Text>
            </Link>
          </Col>
          <Col>
            <Button
              icon={<MenuOutlined />}
              onClick={toggleMenu}
              style={{ border: "none" }}
            />
          </Col>
        </Row>
      </Header>
      {menuOpen && (
        <div>
          <Menu mode="vertical" style={{ border: "none" }}>
            <Menu.Item key="1" onClick={openPostModal}>
              <Text>방명록</Text>
            </Menu.Item>
            {isAuthenticated ? (
              <Menu.Item key="2" onClick={handleLogout}>
                <Text>로그아웃</Text>
              </Menu.Item>
            ) : (
              <Menu.Item key="2" onClick={openLoginModal}>
                <Text>가입하기</Text>
              </Menu.Item>
            )}
          </Menu>
        </div>
      )}

      <Content>{children}</Content>
      <MyFooter />
    </Layout>
  );
};

export default AppLayout;
