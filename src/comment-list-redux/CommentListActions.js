export const FETCH_COMMENT_LIST_REQUEST = 'FETCH_COMMENT_LIST_REQUEST';
export const FETCH_COMMENT_LIST_SUCCESS = 'FETCH_COMMENT_LIST_SUCCESS';
      
export const fetchCommentListRequest = () => ({
  type: FETCH_COMMENT_LIST_REQUEST,
  payload: {},
});

export const fetchCommentListSuccess = commentList => ({
  type: FETCH_COMMENT_LIST_SUCCESS,
  payload: { commentList },
});
      