import { fromJS } from "immutable";

import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR
} from "./constants";

const initialState = fromJS({
  loading: false,
  error: false,
  posts: false
});

const postListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return state
        .set("loading", true)
        .set("error", false)
        .set("posts", false);

    case FETCH_POSTS_SUCCESS:
      return state
        .set("loading", false)
        .set("error", false)
        .set("posts", action.posts);

    case FETCH_POSTS_ERROR:
      return state
        .set("loading", false)
        .set("error", action.error)
        .set("posts", false);

    default:
      return state;
  }
};

export default postListReducer;
