import { call, put, takeLatest } from "redux-saga/effects";

import { getPosts } from "../../api/JSONPlaceholder";

import { FETCH_POSTS } from "./constants";
import { fetchPostsSuccess, fetchPostsError } from "./actions";

function* fetchPosts(action) {
  try {
    const response = yield call(getPosts);
    yield put(fetchPostsSuccess(response.data));
  } catch (e) {
    yield put(fetchPostsError(e.response.errors));
  }
}

function* postListSaga() {
  yield takeLatest(FETCH_POSTS, fetchPosts);
}

export default postListSaga;
