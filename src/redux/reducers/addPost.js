import * as actionType from "../actions/actionTypes"


const initialState={
    posts: null
}

export default function addPostData(state=initialState, action){


    switch (actionType.type) {
        case actionType.ADD_POST:{
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