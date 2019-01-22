import { fork } from "redux-saga/effects";

import postListSaga from "./components/PostList/saga";
import authorInfoSaga from "./components/AuthorInfo/saga";

function* saga() {
  yield fork(postListSaga);
  yield fork(authorInfoSaga);
}

export default saga;
