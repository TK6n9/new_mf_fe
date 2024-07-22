import { put, takeLatest, delay } from "redux-saga/effects";
import {
  addPostRequest,
  addPostSuccess,
  addPostFailure,
  deletePostRequest,
  deletePostSuccess,
  deletePostFailure,
} from "../reducers/post";

function* addPostSaga(action) {
  try {
    yield delay(500); // 비동기 작업을 시뮬레이션하기 위한 딜레이

    let posts = [];
    if (typeof window !== "undefined") {
      posts = JSON.parse(localStorage.getItem("posts")) || [];
    }

    posts.push(action.payload);
    if (typeof window !== "undefined") {
      localStorage.setItem("posts", JSON.stringify(posts));
    }

    yield put(addPostSuccess(action.payload));
  } catch (error) {
    yield put(addPostFailure(error.message));
  }
}

function* deletePostSaga(action) {
  try {
    yield delay(500); // 비동기 작업을 시뮬레이션하기 위한 딜레이

    let posts = [];
    if (typeof window !== "undefined") {
      posts = JSON.parse(localStorage.getItem("posts")) || [];
    }

    posts = posts.filter((post) => post.id !== action.payload);
    if (typeof window !== "undefined") {
      localStorage.setItem("posts", JSON.stringify(posts));
    }

    yield put(deletePostSuccess(action.payload));
  } catch (error) {
    yield put(deletePostFailure(error.message));
  }
}

function* watchPostActions() {
  yield takeLatest(addPostRequest().type, addPostSaga);
  yield takeLatest(deletePostRequest().type, deletePostSaga);
}

export default watchPostActions;
