import reducer from './CommentListReducer';
import * as actions from './CommentListActions';
import initialState from './CommentListInitialState';

describe('Comment List Reducer', () => {
  const getInitialState = () => initialState();

  it('should return the initial state', () => {
    expect(reducer(getInitialState(), {})).toEqual(getInitialState());
  });

  it(`should handle ${actions.FETCH_COMMENT_LIST_SUCCESS}`, () => {
    const payload = {
      commentList: [{
        id: 1,
        name: 'Stephanie',
        date: 'Oct. 8, 1993',
        comment: 'This is a note',
      }],
    };

    const action = {
      type: actions.FETCH_COMMENT_LIST_SUCCESS,
      payload,
    };
    const expectedState = getInitialState();
    expectedState.commentList.push({
      id: 1,
      name: 'Stephanie',
      date: 'Oct. 8, 1993',
      comment: 'This is a note',
    });

    expect(reducer(getInitialState(), action)).toEqual(expectedState);
  });
});
