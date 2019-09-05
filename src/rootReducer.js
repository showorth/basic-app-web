import { combineReducers } from 'redux';

import commentListReducer from './comment-list-redux/CommentListReducer';

export const reducerMap = {
  comment: commentListReducer,
};

export default combineReducers(reducerMap);
