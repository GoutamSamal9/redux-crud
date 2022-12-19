import * as actionType from "../actions/actionTypes"


const initialState={
    posts: []
}

export default function getPostData(state=initialState, action){


    switch (actionType.type) {
        case actionType.GET_POSTS:{
           return{
            ...state,
            posts: action.payload
           }
    }
        default:{
            return {
                ...state
            }
        }
    }


}