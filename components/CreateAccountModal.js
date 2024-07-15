import { Modal, Button, Input, Typography } from "antd";
import { useState, useCallback } from "react";

const CreateAccountModal = ({ isVisible, onClose }) => {
  const { Text } = Typography;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const UsernameHandler = useCallback((e) => {
    setUsername(e.target.value);
  }, []);
  const PasswordHandler = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const ConfirmPasswordHandler = useCallback((e) => {
    setConfirmPassword(e.target.value);
  }, []);

  return (
    <Modal
      open={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      style={{ padding: "20px 40px" }}
      zIndex={10001} // LoginModal 위에 나타나도록 z-index 설정
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text style={{ fontSize: "20px", margin: "20px 0" }}>계정 만들기</Text>

        <Input
          placeholder="아이디"
          value={username}
          onChange={UsernameHandler}
          style={{ marginBottom: 20 }}
        />
        <Input.Password
          placeholder="비밀번호"
          value={password}
          onChange={PasswordHandler}
          style={{ marginBottom: 20 }}
        />
        <Input.Password
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={ConfirmPasswordHandler}
          style={{ marginBottom: 20 }}
        />
        <Button type="text" block onClick={onClose}>
          <Text style={{ fontSize: "16px" }}>계정 생성</Text>
        </Button>
      </div>
    </Modal>
  );
};

export default CreateAccountModal;
