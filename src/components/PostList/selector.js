import { createSelector } from "reselect";

const makeSelectDomain = state => state.postListReducer;

const makeSelectPosts = () =>
  createSelector(
    makeSelectDomain,
    state => state.toJS()
  );

export default makeSelectDomain;
export { makeSelectPosts };
