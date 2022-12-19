import * as actionType from "../actions/actionTypes"


const initialState={
    posts: null
}

export default function updatePostData(state=initialState, action){


    switch (actionType.type) {
        case actionType.UPDATE_POST:{
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