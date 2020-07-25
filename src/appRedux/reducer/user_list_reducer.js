import * as actions from '../../constants/actionTypes';


export const initialState = {
  userList: [],
};

export default function UserListReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_USER_LIST_REQUEST:
      return {
        ...state,
        userList: [],
      };
    case actions.GET_USER_LIST_SUCCESS:
      return {
        ...state,
        userList: payload,
      };
    default:
      return state;
  }
}
