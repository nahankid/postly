import { createSelector } from "reselect";

const makeSelectAuthorDomain = state => state.authorInfoReducer;

export const makeSelectAuthorInfo = () =>
  createSelector(
    makeSelectAuthorDomain,
    state => state.toJS()
  );

export default makeSelectAuthorDomain;
