import { all } from "redux-saga/effects";
import watchUserActions from "./user";
import watchPostActions from "./post";

export default function* rootSaga() {
  yield all([watchUserActions(), watchPostActions()]);
}
