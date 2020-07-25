import { CALL_API } from '../../middleware/api';
import * as actions from '../../constants/actionTypes';


export const getUserList = (params) => ({
  [CALL_API]: {
    params,
    endpoint: '/members',
    method: 'GET',
    types: [
      actions.GET_USER_LIST_REQUEST,
      {
        type: actions.GET_USER_LIST_SUCCESS,
        payload: (action, state, res) => {
          return res.json().then(json => {
            return json;
          });
        }
      },
      actions.GET_USER_LIST_ERROR
    ]
  }
});
