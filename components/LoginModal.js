import { Modal, Button, Input, Typography } from "antd";
import { useState, useCallback } from "react";
import CreateAccountModal from "./CreateAccountModal"; // 경로를 적절히 수정하세요
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../reducers/user";

const LoginModal = ({ isVisible, onClose }) => {
  const { Text } = Typography;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

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

  const handleLogin = useCallback(() => {
    dispatch(loginRequest({ username: nickname, password }));
    onClose();
  }, [dispatch, nickname, password, onClose]);

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
          {error && <Text style={{ color: "red" }}>{error}</Text>}

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
            <Button type="text" block onClick={handleLogin} loading={loading}>
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
