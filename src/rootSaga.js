import { all, fork } from 'redux-saga/effects';

import commentListSaga from './comment-list-redux/CommentListSaga';

export default function* rootSaga() {
  yield all([
    fork(commentListSaga),
  ]);
}
