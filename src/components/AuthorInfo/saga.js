import _ from "lodash";
import { select, call, put, takeEvery } from "redux-saga/effects";

import { getUser } from "../../api/JSONPlaceholder";
import {
  fetchUserSuccess,
  fetchUserError,
  fetchUserNotRequired
} from "./actions";
import { FETCH_USER } from "./constants";
import { makeSelectAuthorInfo } from "./selectors";

function* fetchUser({ userId }) {
  try {
    const { users } = yield select(makeSelectAuthorInfo());
    const user = _.find(users, ["id", userId]);

    if (user) {
      yield put(fetchUserNotRequired());
    } else {
      const response = yield call(getUser, userId);
      yield put(fetchUserSuccess(response.data));
    }
  } catch (e) {
    yield put(fetchUserError(e.response.errors));
  }
}

function* authorInfoSaga() {
  yield takeEvery(FETCH_USER, fetchUser);
}

export default authorInfoSaga;
