import { Modal, Button, Input, Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState, useCallback } from "react";
import CreateAccountModal from "./CreateAccountModal"; // 경로를 적절히 수정하세요

import { useDispatch, useSelector } from "react-redux";
import Password from "antd/es/input/Password";

const LoginModal = ({ isVisible, onClose }) => {
  //내일할꺼 훅도 확인하기
  const { Text } = Typography;

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const [isCreateAccountVisible, setCreateAccountVisible] = useState(false);

  const NicknameHandler = useCallback((e) => {
    setNickname(e.target.value);
  }, []);
  const PasswordHandler = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const showCreateAccountModal = useCallback(() => {
    setCreateAccountVisible(true);
    onClose();
  }, [onClose]);
  const hideCreateAccountModal = useCallback(() => {
    setCreateAccountVisible(false);
  }, []);

  return (
    <>
      <Modal
        open={isVisible}
        onCancel={onClose}
        footer={null}
        centered
        style={{ padding: "20px 40px" }}
        zIndex={10000} // Increase z-index for Modal
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text style={{ fontSize: "20px", margin: "20px 0" }}>COG 계정</Text>
          <Text style={{ fontSize: "16px" }}></Text>

          <Input
            placeholder="닉네임"
            value={nickname}
            onChange={NicknameHandler}
            style={{ marginBottom: 20 }}
          />
          <Input.Password
            placeholder="비밀번호"
            value={password}
            onChange={PasswordHandler}
            style={{ marginBottom: 20 }}
          />
          <div style={{ display: "flex" }}>
            <Button type="text" block onClick={showCreateAccountModal}>
              <Text style={{ fontSize: "16px" }}>계정 만들기</Text>
            </Button>
            <Button type="text" block onClick={onClose}>
              <Text style={{ fontSize: "16px" }}>로그인</Text>
            </Button>
          </div>
        </div>
      </Modal>
      <CreateAccountModal
        isVisible={isCreateAccountVisible}
        onClose={hideCreateAccountModal}
      />
    </>
  );
};

export default LoginModal;
