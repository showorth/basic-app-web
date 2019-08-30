import { combineReducers } from 'redux';

import commentListReducer from './comment-list-redux/CommentListReducer';

export default combineReducers({
  comment: commentListReducer,
});
