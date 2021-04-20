// index.ts
// 
import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';

const initState: { [key: string]: any } = {/*...初始化状态的值...*/};
export const store = createStore(rootReducer, initState, applyMiddleware(
    /*...中间件，增强dispatch...*/
));
