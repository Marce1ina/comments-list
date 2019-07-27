import { combineReducers } from "redux";
import comments from "./comments.js";
import users from "./users.js";

export default combineReducers({
    comments,
    users
});
