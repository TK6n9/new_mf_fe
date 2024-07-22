import { put, takeLatest, delay } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  createAccountRequest,
  createAccountSuccess,
  createAccountFailure,
} from "../reducers/user";

function* createAccountSaga(action) {
  try {
    yield delay(1000); // 비동기 작업을 시뮬레이션하기 위한 딜레이

    let users = [];
    if (typeof window !== "undefined") {
      users = JSON.parse(localStorage.getItem("users")) || [];
    }

    const userExists = users.find(
      (user) => user.username === action.payload.username
    );
    if (userExists) {
      throw new Error("이미 존재하는 사용자명입니다.");
    }

    users.push(action.payload);
    if (typeof window !== "undefined") {
      localStorage.setItem("users", JSON.stringify(users));
    }

    yield put(createAccountSuccess(action.payload));
    yield put(loginSuccess(action.payload)); // 자동 로그인
  } catch (error) {
    yield put(createAccountFailure(error.message));
  }
}

function* loginSaga(action) {
  try {
    yield delay(1000); // 비동기 작업을 시뮬레이션하기 위한 딜레이

    let users = [];
    if (typeof window !== "undefined") {
      users = JSON.parse(localStorage.getItem("users")) || [];
    }

    const user = users.find(
      (user) =>
        user.username === action.payload.username &&
        user.password === action.payload.password
    );
    if (!user) {
      throw new Error("잘못된 사용자명 또는 비밀번호입니다.");
    }

    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* watchUserActions() {
  yield takeLatest(createAccountRequest().type, createAccountSaga);
  yield takeLatest(loginRequest().type, loginSaga);
}

export default watchUserActions;
