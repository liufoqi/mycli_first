import * as ActionType from './actionType'
/**
 * @func
 * @desc 更新用户信息
 * @param data 
 */
 export function updateLoding(data: { [key: string]: any }) {
  return {
      type: ActionType.LOADING_UPDATE,
      data
  };
};
