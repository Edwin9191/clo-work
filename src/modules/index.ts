import { combineReducers } from 'redux';
import { closet } from './closet';

const rootReducer = combineReducers({
  closet,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
