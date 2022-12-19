import {combineReducers} from "redux";


import addPostData from "./addPost";
import getPostData from "./getPosts";
import updatePostData from "./updatePost";
import deletePostData from "./deletePost";

export default combineReducers({
    addPostData,
    getPostData,
    updatePostData,
    deletePostData
})

