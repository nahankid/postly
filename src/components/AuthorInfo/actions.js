import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_USER_NOT_REQUIRED
} from "./constants";

export const fetchUser = userId => ({
  type: FETCH_USER,
  userId
});

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  user
});

export const fetchUserError = error => ({
  type: FETCH_USER_ERROR,
  error
});

export const fetchUserNotRequired = () => ({
  type: FETCH_USER_NOT_REQUIRED
});
