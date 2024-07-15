import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "../reducers"; // index.js
import rootSaga from "../sagas"; // index.js

const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== "production",
  });
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
