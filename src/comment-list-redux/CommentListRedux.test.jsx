import React from 'react';
import { shallow } from 'enzyme';
import { CommentListRedux } from './CommentListRedux';

describe('CommentListRedux', () => {
  const createTestComponent = () => {
    const commentList = [{
      id: 1,
      name: 'Stephanie',
      date: 'Oct. 8, 1993',
      comment: 'This is a note',
    }];
    const props = {
      comment: { commentList },
      fetchCommentListRequest: jest.fn(),
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    return shallow(<CommentListRedux {...props} />);
  };

  it('renders without crashing', () => {
    createTestComponent();
  });

  it('Should have "fetchCommentListRequest" method trigger on component instantiation ', () => {
    const wrapper = createTestComponent();
    const componentInstance = wrapper.instance();

    const spy = jest.spyOn(componentInstance.props, 'fetchCommentListRequest');
    componentInstance.componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
});
