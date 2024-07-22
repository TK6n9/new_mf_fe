import { produce } from "immer";

// 액션 타입 정의
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const LOGOUT = "LOGOUT";
const CREATE_ACCOUNT_REQUEST = "CREATE_ACCOUNT_REQUEST";
const CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS";
const CREATE_ACCOUNT_FAILURE = "CREATE_ACCOUNT_FAILURE";
const RESET_ACCOUNT_STATUS = "RESET_ACCOUNT_STATUS";

// 액션 생성자 정의
export const loginRequest = (payload) => ({ type: LOGIN_REQUEST, payload });
export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });
export const loginFailure = (payload) => ({ type: LOGIN_FAILURE, payload });
export const logout = () => ({ type: LOGOUT });
export const createAccountRequest = (payload) => ({
  type: CREATE_ACCOUNT_REQUEST,
  payload,
});
export const createAccountSuccess = (payload) => ({
  type: CREATE_ACCOUNT_SUCCESS,
  payload,
});
export const createAccountFailure = (payload) => ({
  type: CREATE_ACCOUNT_FAILURE,
  payload,
});
export const resetAccountStatus = () => ({ type: RESET_ACCOUNT_STATUS });

const initialState = {
  loading: false,
  error: null,
  users: [],
  successMessage: null,
  isAuthenticated: false,
  currentUser: null,
};

// 클라이언트 사이드에서만 실행
const getInitialUsers = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
  return [];
};

const userReducer = (
  state = { ...initialState, users: getInitialUsers() },
  action
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case LOGIN_SUCCESS:
        draft.loading = false;
        draft.isAuthenticated = true;
        draft.currentUser = action.payload;
        break;
      case LOGIN_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case LOGOUT:
        draft.isAuthenticated = false;
        draft.currentUser = null;
        break;
      case CREATE_ACCOUNT_REQUEST:
        draft.loading = true;
        draft.error = null;
        draft.successMessage = null;
        break;
      case CREATE_ACCOUNT_SUCCESS:
        draft.loading = false;
        draft.users.push(action.payload);
        draft.successMessage = "계정이 성공적으로 생성되었습니다.";
        if (typeof window !== "undefined") {
          localStorage.setItem("users", JSON.stringify(draft.users));
        }
        break;
      case CREATE_ACCOUNT_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case RESET_ACCOUNT_STATUS:
        draft.error = null;
        draft.successMessage = null;
        break;
      default:
        return state;
    }
  });
};

export default userReducer;
