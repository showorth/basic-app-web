import AxiosApiClient from '../AxiosApiClient';
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
// import {
//   setServiceErrorNotification,
// } from 'notifications/notificationsActions';
import {
  FETCH_COMMENT_LIST_REQUEST,
  fetchCommentListSuccess,
} from './CommentListActions';

export const apiGetRequest = endpoint => AxiosApiClient.getRequest(endpoint);

export function* fetchCommentList() {
  const endpoint = 'comments';
  
  try {
    const response = yield call(apiGetRequest, endpoint);
    console.log(response);
    yield all([
      put(fetchCommentListSuccess(response)),
    ]);
  } catch (error) {
    console.log('Error');
    // yield put(serviceComplete());
  }
}

export default function* commentListSaga() {
  yield all([
    takeLatest(FETCH_COMMENT_LIST_REQUEST, fetchCommentList),
  ]);
}
