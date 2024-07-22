import { Modal, Button, Input, Typography } from "antd";
import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAccountRequest, resetAccountStatus } from "../reducers/user";

const CreateAccountModal = ({ isVisible, onClose }) => {
  const { Text } = Typography;

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const successMessage = useSelector((state) => state.user.successMessage);

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

  const handleCreateAccount = () => {
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    dispatch(createAccountRequest({ username, password }));
  };

  useEffect(() => {
    if (successMessage || error) {
      setTimeout(() => {
        dispatch(resetAccountStatus());
      }, 3000);
    }
  }, [successMessage, error, dispatch]);
  return (
    <Modal
      open={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      style={{ padding: "20px 40px" }}
      zIndex={10001}
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
        <Button
          type="text"
          block
          onClick={handleCreateAccount}
          loading={loading}
        >
          <Text style={{ fontSize: "16px" }}>계정 생성</Text>
        </Button>
        {error && <Text style={{ color: "red" }}>{error}</Text>}
      </div>
    </Modal>
  );
};

export default CreateAccountModal;
