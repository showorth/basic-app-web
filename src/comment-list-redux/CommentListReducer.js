
import {
  FETCH_COMMENT_LIST_SUCCESS
} from './CommentListActions';

import commentListInitialState from './CommentListInitialState';

const initialState = commentListInitialState();

const commentListReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case FETCH_COMMENT_LIST_SUCCESS: {
      const { commentList } = payload;
      
      const newState = {
        ...state,
        commentList,
      };
      console.log("New State is", commentList)
      return newState;
    }
    default:
      return state;
  }
};

export default commentListReducer;