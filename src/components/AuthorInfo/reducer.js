import { fromJS } from "immutable";

import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from "./constants";

const initialState = fromJS({
  loading: false,
  error: false,
  users: false
});

const authorInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return state.set("loading", true).set("error", false);

    case FETCH_USER_SUCCESS:
      return state
        .set("loading", false)
        .set("error", false)
        .set("users", { ...state.get("users"), [action.user.id]: action.user });

    case FETCH_USER_ERROR:
      return state.set("loading", false).set("error", action.error);

    default:
      return state;
  }
};

export default authorInfoReducer;
