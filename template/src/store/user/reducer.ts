// user/reducer.ts
import * as ActionTypes from './actionType';
interface Action {
    type: string;
    [key: string]: any;
}

const initialState = {

};

function userReducer(state = initialState, action: Action) {
    switch(action.type) {
        case ActionTypes.USERINFO_UPDATE:
            return action.data;
        default:
            return state;
    }
}
export default userReducer;
