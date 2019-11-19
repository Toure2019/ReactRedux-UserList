import { combineReducers } from 'redux';
import UsersReducder from './reducer_users';
import ActiveUserReducer from './reducer_activeUser';

const rootReducer = combineReducers({
  users: UsersReducder,
  activeUser: ActiveUserReducer
});

export default rootReducer;
