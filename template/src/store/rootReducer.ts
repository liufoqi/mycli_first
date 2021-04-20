// rootReducer.ts
// 合并所有的reducer
import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import loadingReducer from './loading/reducer';
const rootReducer = combineReducers({
    userReducer,
    loadingReducer,
    /*...其他的reducer...*/
});

export default rootReducer;
