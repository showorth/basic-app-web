import React, { useState, useEffect } from 'react';
import { Button, Layout } from 'antd';
import CommentTable from '../comment-list/CommentTable';
import '../comment-list/CommentWrapper.scss';
import { Link } from 'react-router-dom';
import FetchApiClient from '../FetchApiClient';

const { Content } = Layout;

function CommentListHooks() {

  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    async function fetchComments() {

      setCommentList(await FetchApiClient.getRequest('comments'));

    }
    fetchComments();
  }, []);

  const onButtonClick = async () => {

    setCommentList(await FetchApiClient.getRequest('comments'));

  }

  return (
    <div className="comment-wrapper">
      <Layout>
        <Link to='/comment-list'>Comment List</Link>
        <Content style={{ padding: '50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <h1 className="header-alignment">Comments</h1>
            <CommentTable commentList={commentList} />
            <div className="align-right">
              <Button className="button-alignment" type="primary" onClick={onButtonClick}>
                Fetch Comments
                                </Button>
            </div>
          </div>
        </Content>
      </Layout>
    </div >
  );
};

export default CommentListHooks;

// CommentListHooks.propTypes = {
//   comment: PropTypes.shape({
//     commentList: PropTypes.arrayOf(PropTypes.shape({
//       key: PropTypes.number,
//       name: PropTypes.string,
//       date: PropTypes.string,
//       comment: PropTypes.string,
//     }))
//   })
// };

// const mapStateToProps = state => ({
//   comment: state.comment,
// });

// const mapDispatchToProps = dispatch => bindActionCreators(
//   {
//     fetchCommentListRequest,
//   },
//   dispatch,
// );

