import * as actionType from "../actions/actionTypes"


const initialState={
    posts: []
}

export default function deletePostData(state=initialState, action){


    switch (actionType.type) {
        case actionType.DELETE_POST:{
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