// user/reducer.ts
import * as ActionTypes from './actionType';
interface Action {
    type: string;
    [key: string]: any;
}

const initialState = {
  isLoading:true
};

function loadingReducer(state = initialState, action: Action) {
    switch(action.type) {
        case ActionTypes.LOADING_UPDATE:
            // state.isLoading=action.data
            return action.data;
        default:
            return state;
    }
}

export default loadingReducer;
