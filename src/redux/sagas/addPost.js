import * as actionType from "../actions/actionTypes";
import postsblogPostApi from "../../server/api";
import { call, put, takeEvery } from "redux-saga/effects";


export default function* addPostSaga(){
    yield takeEvery(actionType.ADD_POST, addPost)
}

function* addPost (action){
    try {
        const postResponse = yield call (postsblogPostApi.add, action.payload)
        yield put({type: actionType.ADDED_POST, payload: postResponse})
        
    } catch (error) {
        console.log(error);
    }
}