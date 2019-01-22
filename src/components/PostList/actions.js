import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR
} from "./constants";

const fetchPosts = () => {
  return {
    type: FETCH_POSTS
  };
};

const fetchPostsSuccess = posts => {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts
  };
};

const fetchPostsError = error => {
  return {
    type: FETCH_POSTS_ERROR,
    error
  };
};

export { fetchPosts, fetchPostsSuccess, fetchPostsError };
