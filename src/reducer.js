import { combineReducers } from "redux";

import postListReducer from "./components/PostList/reducer";
import authorInfoReducer from "./components/AuthorInfo/reducer";

const reducer = combineReducers({ postListReducer, authorInfoReducer });

export default reducer;
