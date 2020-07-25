import { combineReducers } from 'redux';
import UserListReducer from './user_list_reducer';

const rootReducer = combineReducers({
  UserListReducer,
});

export default rootReducer;
