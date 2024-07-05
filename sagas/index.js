import { all, fork } from "redux-saga/effects";

import postSaga from "./post";
import userSaga from "./user";

//스토어로 간다 이것이
export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
