import { produce } from "immer";

// 액션 타입 정의
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";

const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

// 액션 생성자 정의
export const addPostRequest = (payload) => ({
  type: ADD_POST_REQUEST,
  payload,
});
export const addPostSuccess = (payload) => ({
  type: ADD_POST_SUCCESS,
  payload,
});
export const addPostFailure = (payload) => ({
  type: ADD_POST_FAILURE,
  payload,
});

export const deletePostRequest = (payload) => ({
  type: DELETE_POST_REQUEST,
  payload,
});
export const deletePostSuccess = (payload) => ({
  type: DELETE_POST_SUCCESS,
  payload,
});
export const deletePostFailure = (payload) => ({
  type: DELETE_POST_FAILURE,
  payload,
});

const initialState = {
  loading: false,
  error: null,
  posts: [],
};

// 클라이언트 사이드에서만 실행
const getInitialPosts = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("posts")) || [];
  }
  return [];
};

const postReducer = (
  state = { ...initialState, posts: getInitialPosts() },
  action
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case ADD_POST_SUCCESS:
        draft.loading = false;
        draft.posts.push(action.payload);
        if (typeof window !== "undefined") {
          localStorage.setItem("posts", JSON.stringify(draft.posts));
        }
        break;
      case ADD_POST_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case DELETE_POST_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case DELETE_POST_SUCCESS:
        draft.loading = false;
        draft.posts = draft.posts.filter((post) => post.id !== action.payload);
        if (typeof window !== "undefined") {
          localStorage.setItem("posts", JSON.stringify(draft.posts));
        }
        break;
      case DELETE_POST_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      default:
        return state;
    }
  });
};

export default postReducer;
